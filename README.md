# Final Fantasy Pixel Remaster Tool

This tool can automate and simplify the modification of the Final Fantasy Pixel Remaster series. It's currently tested to work with all entries released (I through IV). It does require you to have a (mostly) unmodified GameAssembly.dll in your directory. If you're previously modified the walk speed values, you will need to revert to the original GameAssembly.dll before using this tool

Note: for best results, make sure to run the game in Fullscreen mode and force VSync through your graphics card control panel.

## Features:
  - Set the walking speed to Classic (60 px/second) or Fast (120 px/second). This can greatly reduce walking stutter as the original game's 80 px/second doesn't match the framerate of the game. 

## Usage
  - Download release from https://github.com/noskill-io/ffpr-tool/releases
  - Place ffpr-tool.exe in root game directory (e.g. C:\Program Files\Steam\steamapps\common\FINAL FANTASY PR\)
  - Run ffpr-tool.exe and follow the prompts

## Planned Features
  - Modify Framerate
  - Modify AutoBattle speed
  - Your Suggestions!
  
## Build from source

  ### Requirements
  - Node 14
  - Yarn
  ```
  yarn install
  yarn build
  ``` 
