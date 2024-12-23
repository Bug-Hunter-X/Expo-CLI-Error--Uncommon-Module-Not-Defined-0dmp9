# Expo CLI Error: Uncommon Module Not Defined

This repository demonstrates a common error in Expo projects where a native module is not properly defined, resulting in a runtime error.  The error typically occurs when a module installed via `expo install` isn't correctly linked to the native parts of your Expo app (iOS and/or Android).

## Problem

The primary issue is that even after installing a native module using `expo install`, the module might not be readily accessible within your JavaScript code because the necessary native linking hasn't taken place.

## Solution

The provided solution explores different methods to address this, focusing on ensuring correct module linking. This may involve using `expo prebuild`, EAS Build, or other module-specific linking instructions.