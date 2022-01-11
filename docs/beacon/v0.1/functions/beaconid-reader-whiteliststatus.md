---
title: beaconIdToReaderToWhitelistStatus()
---

<TitleSpan>Beacons</TitleSpan>

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

::: danger TODO:

1. Get link from BD for whitelisting requests.
2. This description in the return value for `uint192 indefiniteWhitelistCount`
   seems wrong. <br/>**Number of times reader was whitelisted indefinitely for
   templateId.** <br/>Should `templateId` be `beaconId`? The code comments also
   say `templateId`.

:::

For on-chain smart contracts, the function
[beaconIdToReaderToWhitelistStatus()](https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L322-L342)
returns detailed whitelisting status for the `reader` and `beaconId` parameters.
Please contact the [API3 Business Development API Team](https://api3.org) to be
whitelisted.

## Example Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@api3/airnode-protocol";
contract mySmartContract {
    uint64 private expirationTimestamp;
    uint192 private indefiniteWhitelistCount;

    function myReadableDetails(
      bytes32 _beaconId
      address _beaconContractAddress
    ) private {
        // Calling the BeaconServer for detailed whitelist status
        // where "this" is the contract address of this contract (myReadableDetails).
        (expirationTimestamp, indefiniteWhitelistCount) =
            RrpBeaconServer(_beaconContractAddress).beaconIdToReaderToWhitelistStatus(
              _beaconId,
              this
            );
    }
}
```

## Parameters

`beaconIdToReaderToWhitelistStatus(bytes32 beaconId, address reader)`

- `bytes32 beaconId` - The ID of the beacon.
- `address reader` - The address to get the whitelist details for.

## Returns

- `uint64 private expirationTimestamp` - Timestamp at which the whitelisting of
  the reader will expire.
- `uint192 indefiniteWhitelistCount` - Number of times `reader` was whitelisted
  indefinitely for `templateId`. A reader is indefinitely whitelisted by the
  whitelist manager account or by any other account that has the
  [INDEFINITE_WHITELISTER_ROLE_DESCRIPTION](https://github.com/api3dao/airnode/blob/6d902da259ec3084c8f4764cadc74e270e5c7162/packages/airnode-protocol/contracts/whitelist/WhitelistRoles.sol#L32-L33)
  role. Each time an authorized account indefinitely whitelists the reader a
  recorded counter is incremented. When the reader's whitelist status is revoked
  then the counter is decremented. This means that as long as the counter
  (`indefiniteWhitelistCount`) is greater than 0 the reader is whitelisted
  indefinitely.

When the `address` has not been whitelisted this function returns:

```bash
expirationTimestamp   uint64 :  0
indefiniteWhitelistCount   uint192 :  0
```