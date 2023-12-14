//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.48;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.48] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","CommandAddOptimize:eval":"true","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

function _0x4d14(_0x37d598,_0x2b3edb){const _0x5abe5a=_0x5abe();return _0x4d14=function(_0x4d142b,_0x1e3323){_0x4d142b=_0x4d142b-0x12f;let _0x2c1743=_0x5abe5a[_0x4d142b];return _0x2c1743;},_0x4d14(_0x37d598,_0x2b3edb);}const _0x9e78a=_0x4d14;(function(_0x301391,_0x5a5ca6){const _0x564081=_0x4d14,_0x367163=_0x301391();while(!![]){try{const _0x36588f=parseInt(_0x564081(0x4a0))/0x1*(parseInt(_0x564081(0x638))/0x2)+parseInt(_0x564081(0x1ac))/0x3+parseInt(_0x564081(0x2d7))/0x4*(parseInt(_0x564081(0x434))/0x5)+parseInt(_0x564081(0x149))/0x6+parseInt(_0x564081(0x51b))/0x7+parseInt(_0x564081(0x314))/0x8+parseInt(_0x564081(0x313))/0x9*(-parseInt(_0x564081(0x2f0))/0xa);if(_0x36588f===_0x5a5ca6)break;else _0x367163['push'](_0x367163['shift']());}catch(_0x3b3e76){_0x367163['push'](_0x367163['shift']());}}}(_0x5abe,0xa1f8e));var label='ItemsEquipsCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x9e78a(0x218)](function(_0x55991a){const _0x1ddb52=_0x9e78a;return _0x55991a[_0x1ddb52(0x3bf)]&&_0x55991a[_0x1ddb52(0x204)][_0x1ddb52(0x285)]('['+label+']');})[0x0];VisuMZ[label][_0x9e78a(0x5b0)]=VisuMZ[label][_0x9e78a(0x5b0)]||{},VisuMZ[_0x9e78a(0x5a2)]=function(_0x344872,_0x3019f7){const _0x2bfd9b=_0x9e78a;for(const _0x2f6bd7 in _0x3019f7){if(_0x2bfd9b(0x4bb)!==_0x2bfd9b(0x1b2)){if(_0x2f6bd7[_0x2bfd9b(0x3cf)](/(.*):(.*)/i)){const _0x27d5f2=String(RegExp['$1']),_0x27f41c=String(RegExp['$2'])[_0x2bfd9b(0x289)]()['trim']();let _0x1a5e37,_0x56aa6f,_0x171fc9;switch(_0x27f41c){case _0x2bfd9b(0x5bf):_0x1a5e37=_0x3019f7[_0x2f6bd7]!==''?Number(_0x3019f7[_0x2f6bd7]):0x0;break;case _0x2bfd9b(0x50e):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f[_0x2bfd9b(0x4e5)](_0x2255a6=>Number(_0x2255a6));break;case _0x2bfd9b(0x48c):_0x1a5e37=_0x3019f7[_0x2f6bd7]!==''?eval(_0x3019f7[_0x2f6bd7]):null;break;case _0x2bfd9b(0x528):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f[_0x2bfd9b(0x4e5)](_0x289cc5=>eval(_0x289cc5));break;case'JSON':_0x1a5e37=_0x3019f7[_0x2f6bd7]!==''?JSON['parse'](_0x3019f7[_0x2f6bd7]):'';break;case _0x2bfd9b(0x49a):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f[_0x2bfd9b(0x4e5)](_0x5d8b4c=>JSON[_0x2bfd9b(0x2ab)](_0x5d8b4c));break;case _0x2bfd9b(0x52d):_0x1a5e37=_0x3019f7[_0x2f6bd7]!==''?new Function(JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7])):new Function(_0x2bfd9b(0x411));break;case _0x2bfd9b(0x5ef):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f[_0x2bfd9b(0x4e5)](_0x366385=>new Function(JSON[_0x2bfd9b(0x2ab)](_0x366385)));break;case _0x2bfd9b(0x2ed):_0x1a5e37=_0x3019f7[_0x2f6bd7]!==''?String(_0x3019f7[_0x2f6bd7]):'';break;case _0x2bfd9b(0x519):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f['map'](_0x1a21fc=>String(_0x1a21fc));break;case _0x2bfd9b(0x22d):_0x171fc9=_0x3019f7[_0x2f6bd7]!==''?JSON['parse'](_0x3019f7[_0x2f6bd7]):{},_0x344872[_0x27d5f2]={},VisuMZ[_0x2bfd9b(0x5a2)](_0x344872[_0x27d5f2],_0x171fc9);continue;case _0x2bfd9b(0x254):_0x56aa6f=_0x3019f7[_0x2f6bd7]!==''?JSON[_0x2bfd9b(0x2ab)](_0x3019f7[_0x2f6bd7]):[],_0x1a5e37=_0x56aa6f[_0x2bfd9b(0x4e5)](_0x260d31=>VisuMZ[_0x2bfd9b(0x5a2)]({},JSON[_0x2bfd9b(0x2ab)](_0x260d31)));break;default:continue;}_0x344872[_0x27d5f2]=_0x1a5e37;}}else this['postCreateCategoryWindowItemsEquipsCore']();}return _0x344872;},(_0x586d4e=>{const _0x26aca4=_0x9e78a,_0x13e7e6=_0x586d4e['name'];for(const _0x1b5030 of dependencies){if(!Imported[_0x1b5030]){if(_0x26aca4(0x210)!==_0x26aca4(0x210))this[_0x26aca4(0x303)]();else{alert(_0x26aca4(0x2a5)[_0x26aca4(0x4a6)](_0x13e7e6,_0x1b5030)),SceneManager[_0x26aca4(0x5b8)]();break;}}}const _0x200c96=_0x586d4e[_0x26aca4(0x204)];if(_0x200c96[_0x26aca4(0x3cf)](/\[Version[ ](.*?)\]/i)){if('jsjAq'==='KqjAz'){const _0x48cdc8=_0x26aca4(0x15b);if(this[_0x26aca4(0x287)][_0x48cdc8])return this[_0x26aca4(0x287)][_0x48cdc8];const _0x18590e=_0x26aca4(0x224);return _0x18590e[_0x26aca4(0x4a6)](this[_0x26aca4(0x262)][_0x26aca4(0x2ba)]);}else{const _0x43a836=Number(RegExp['$1']);_0x43a836!==VisuMZ[label][_0x26aca4(0x1b5)]&&(alert(_0x26aca4(0x5de)['format'](_0x13e7e6,_0x43a836)),SceneManager[_0x26aca4(0x5b8)]());}}if(_0x200c96['match'](/\[Tier[ ](\d+)\]/i)){const _0x3831a3=Number(RegExp['$1']);if(_0x3831a3<tier)alert(_0x26aca4(0x147)['format'](_0x13e7e6,_0x3831a3,tier)),SceneManager['exit']();else{if(_0x26aca4(0x238)!==_0x26aca4(0x4b1))tier=Math[_0x26aca4(0x26e)](_0x3831a3,tier);else{const _0xe3cc07=this[_0x26aca4(0x43f)];_0xe3cc07['contents']['clear']();const _0x2d24c5=this[_0x26aca4(0x2e8)](this['index']());if(_0x2d24c5==='icon'){const _0x1797f2=this[_0x26aca4(0x3f7)](this[_0x26aca4(0x4a2)]());let _0x13ed49=this[_0x26aca4(0x63c)](this[_0x26aca4(0x4a2)]());_0x13ed49=_0x13ed49[_0x26aca4(0x203)](/\\I\[(\d+)\]/gi,''),_0xe3cc07[_0x26aca4(0x293)](),this[_0x26aca4(0x493)](_0x13ed49,_0x1797f2),this[_0x26aca4(0x1b9)](_0x13ed49,_0x1797f2),this[_0x26aca4(0x5cb)](_0x13ed49,_0x1797f2);}}}}VisuMZ[_0x26aca4(0x5a2)](VisuMZ[label]['Settings'],_0x586d4e[_0x26aca4(0x4c2)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x9e78a(0x3a7)],'ActorChangeEquipSlots',_0x2fb041=>{const _0x1f378a=_0x9e78a;VisuMZ[_0x1f378a(0x5a2)](_0x2fb041,_0x2fb041);const _0x51e6ae=_0x2fb041[_0x1f378a(0x539)][_0x1f378a(0x4e5)](_0x3d6d3e=>$gameActors['actor'](_0x3d6d3e)),_0x2d8ab=_0x2fb041[_0x1f378a(0x62e)][_0x1f378a(0x4e5)](_0xc2c3dc=>$dataSystem[_0x1f378a(0x3ff)][_0x1f378a(0x63b)](_0xc2c3dc[_0x1f378a(0x361)]()));for(const _0x53c8ca of _0x51e6ae){if(!_0x53c8ca)continue;_0x53c8ca[_0x1f378a(0x17e)](_0x2d8ab);}}),PluginManager[_0x9e78a(0x45b)](pluginData[_0x9e78a(0x3a7)],_0x9e78a(0x43c),_0x497ec8=>{const _0x43d587=_0x9e78a;VisuMZ['ConvertParams'](_0x497ec8,_0x497ec8);const _0x51c20b=_0x497ec8[_0x43d587(0x539)][_0x43d587(0x4e5)](_0x537325=>$gameActors[_0x43d587(0x3a5)](_0x537325));for(const _0x331078 of _0x51c20b){if('pFFBV'!==_0x43d587(0x467))this[_0x43d587(0x457)][_0x43d587(0x4a2)]()>=0x0?(_0x3e14ec[_0x43d587(0x331)][_0x43d587(0x256)]['call'](this),this[_0x43d587(0x41f)]()):(this['_slotWindow']['smoothSelect'](0x0),this[_0x43d587(0x457)]['activate']());else{if(!_0x331078)continue;_0x331078['forceResetEquipSlots']();}}}),PluginManager[_0x9e78a(0x45b)](pluginData[_0x9e78a(0x3a7)],_0x9e78a(0x358),_0xdac2a7=>{const _0x35f207=_0x9e78a;VisuMZ['ConvertParams'](_0xdac2a7,_0xdac2a7);const _0x92ba0b=[],_0x39c9a9=_0xdac2a7['Blacklist'][_0x35f207(0x4e5)](_0x2744b0=>_0x2744b0['toUpperCase']()[_0x35f207(0x361)]()),_0x275b24=_0xdac2a7[_0x35f207(0x5bd)][_0x35f207(0x4e5)](_0x17ee35=>_0x17ee35[_0x35f207(0x289)]()['trim']()),_0x824718=_0xdac2a7['Step1End']>=_0xdac2a7[_0x35f207(0x284)]?_0xdac2a7['Step1Start']:_0xdac2a7[_0x35f207(0x171)],_0x19613e=_0xdac2a7[_0x35f207(0x171)]>=_0xdac2a7['Step1Start']?_0xdac2a7[_0x35f207(0x171)]:_0xdac2a7[_0x35f207(0x284)],_0x1f6a40=Array(_0x19613e-_0x824718+0x1)[_0x35f207(0x541)]()[_0x35f207(0x4e5)]((_0x365dba,_0x4b1526)=>_0x824718+_0x4b1526);for(const _0x246ad9 of _0x1f6a40){if('srAFX'===_0x35f207(0x58f)){const _0x57f1c6=$dataItems[_0x246ad9];if(!_0x57f1c6)continue;if(!VisuMZ[_0x35f207(0x331)][_0x35f207(0x2b4)](_0x57f1c6,_0x39c9a9,_0x275b24))continue;_0x92ba0b[_0x35f207(0x51d)]([0x0,_0x246ad9,0x0,_0x57f1c6[_0x35f207(0x13e)]]);}else{const _0x3a983b=_0x35f207(0x14d);if(this['_itemData'][_0x35f207(0x2b2)]>=0x0&&this[_0x35f207(0x3cb)][_0x35f207(0x2b3)]>=0x0&&!this['_customItemInfo'][_0x3a983b])return![];const _0x25dca1=this[_0x35f207(0x301)]();this[_0x35f207(0x61a)](_0x25dca1,_0x4549e1,_0x2f768e,_0x1c8189,!![]);const _0x7478f8=this['getItemEffectsHpDamageText']();return this[_0x35f207(0x32e)](_0x11ee4c['damageColor'](0x0)),this[_0x35f207(0x61a)](_0x7478f8,_0x78ac29,_0x4b6230,_0x244cbb,![],'right'),this[_0x35f207(0x2f7)](_0x43a650,_0xbfc8b7,_0x551566),this['resetFontSettings'](),!![];}}const _0xc5bb9f=_0xdac2a7[_0x35f207(0x2a0)]>=_0xdac2a7[_0x35f207(0x436)]?_0xdac2a7[_0x35f207(0x436)]:_0xdac2a7['Step2End'],_0x29eceb=_0xdac2a7['Step2End']>=_0xdac2a7[_0x35f207(0x436)]?_0xdac2a7[_0x35f207(0x2a0)]:_0xdac2a7[_0x35f207(0x436)],_0x4bf96a=Array(_0x29eceb-_0xc5bb9f+0x1)[_0x35f207(0x541)]()[_0x35f207(0x4e5)]((_0x2e57f3,_0x2fd7f)=>_0xc5bb9f+_0x2fd7f);for(const _0x1f712 of _0x4bf96a){const _0x1ff21d=$dataWeapons[_0x1f712];if(!_0x1ff21d)continue;if(!VisuMZ[_0x35f207(0x331)]['IncludeShopItem'](_0x1ff21d,_0x39c9a9,_0x275b24))continue;_0x92ba0b[_0x35f207(0x51d)]([0x1,_0x1f712,0x0,_0x1ff21d[_0x35f207(0x13e)]]);}const _0x1d0e82=_0xdac2a7['Step3End']>=_0xdac2a7[_0x35f207(0x484)]?_0xdac2a7['Step3Start']:_0xdac2a7[_0x35f207(0x51f)],_0x13ca3c=_0xdac2a7[_0x35f207(0x51f)]>=_0xdac2a7[_0x35f207(0x484)]?_0xdac2a7[_0x35f207(0x51f)]:_0xdac2a7['Step3Start'],_0x5e64c7=Array(_0x13ca3c-_0x1d0e82+0x1)['fill']()['map']((_0x4f58e0,_0x4a0e7c)=>_0x1d0e82+_0x4a0e7c);for(const _0x57990d of _0x5e64c7){if(_0x35f207(0x28d)===_0x35f207(0x28d)){const _0x4e9d5e=$dataArmors[_0x57990d];if(!_0x4e9d5e)continue;if(!VisuMZ[_0x35f207(0x331)][_0x35f207(0x2b4)](_0x4e9d5e,_0x39c9a9,_0x275b24))continue;_0x92ba0b[_0x35f207(0x51d)]([0x2,_0x57990d,0x0,_0x4e9d5e[_0x35f207(0x13e)]]);}else{const _0x34e5af=_0x445b0c[_0x35f207(0x5d1)][_0x35f207(0x49e)];if(!_0x34e5af)return;if(!_0x34e5af['isEquipChangeOk'](this[_0x35f207(0x4a2)]()))return![];const _0x4c922a=_0x34e5af[_0x35f207(0x24a)]()[this[_0x35f207(0x4a2)]()];if(_0x34e5af[_0x35f207(0x5a1)]()[_0x35f207(0x285)](_0x4c922a))return![];return!![];;}}SceneManager[_0x35f207(0x51d)](Scene_Shop),SceneManager[_0x35f207(0x158)](_0x92ba0b,_0xdac2a7['PurchaseOnly']);}),VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2b4)]=function(_0x3fa3d8,_0x451afa,_0x1d25ec){const _0x1c3365=_0x9e78a;if(_0x3fa3d8['name'][_0x1c3365(0x361)]()==='')return![];if(_0x3fa3d8['name'][_0x1c3365(0x3cf)](/-----/i))return![];const _0x4d7988=_0x3fa3d8[_0x1c3365(0x4bf)];if(_0x451afa[_0x1c3365(0x458)]>0x0)for(const _0x106bda of _0x451afa){if(_0x1c3365(0x21a)==='ZtKyD')for(const _0x1b52e0 of _0x25da44){_0x1b52e0[_0x1c3365(0x3cf)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0xa4f081=_0xe39a4a(_0x1ded41['$1'])[_0x1c3365(0x289)]()['trim']()['split'](',');for(const _0x33bbb5 of _0xa4f081){_0x27f341[_0x1c3365(0x4bf)][_0x1c3365(0x51d)](_0x33bbb5[_0x1c3365(0x361)]());}}else{if(!_0x106bda)continue;if(_0x4d7988[_0x1c3365(0x285)](_0x106bda))return![];}}if(_0x1d25ec[_0x1c3365(0x458)]>0x0){for(const _0x2aff1f of _0x1d25ec){if(!_0x2aff1f)continue;if(_0x4d7988[_0x1c3365(0x285)](_0x2aff1f))return!![];}return![];}return!![];},VisuMZ[_0x9e78a(0x331)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x9e78a(0x1e9)]['onDatabaseLoaded']=function(){const _0x3ab4f3=_0x9e78a;this[_0x3ab4f3(0x61f)](),VisuMZ[_0x3ab4f3(0x331)][_0x3ab4f3(0x22b)][_0x3ab4f3(0x20e)](this),this['process_VisuMZ_ItemsEquipsCore_Notetags'](),VisuMZ[_0x3ab4f3(0x331)]['SetupProxyItemGroups'](),VisuMZ[_0x3ab4f3(0x331)][_0x3ab4f3(0x330)]();},Scene_Boot[_0x9e78a(0x1e9)][_0x9e78a(0x61f)]=function(){const _0x1aa85c=_0x9e78a;VisuMZ[_0x1aa85c(0x331)][_0x1aa85c(0x155)]={},VisuMZ[_0x1aa85c(0x331)]['RegExp'][_0x1aa85c(0x480)]=[],VisuMZ[_0x1aa85c(0x331)][_0x1aa85c(0x155)][_0x1aa85c(0x5e1)]=[];const _0x49aab6=[_0x1aa85c(0x272),_0x1aa85c(0x32d),_0x1aa85c(0x597),_0x1aa85c(0x13d),_0x1aa85c(0x381),_0x1aa85c(0x3be),_0x1aa85c(0x5f2),_0x1aa85c(0x5c5)];for(const _0x5695cc of _0x49aab6){const _0x2b7e82=_0x1aa85c(0x520)[_0x1aa85c(0x4a6)](_0x5695cc);VisuMZ[_0x1aa85c(0x331)][_0x1aa85c(0x155)]['EquipParams']['push'](new RegExp(_0x2b7e82,'i'));const _0x5d538a=_0x1aa85c(0x585)['format'](_0x5695cc);VisuMZ['ItemsEquipsCore']['RegExp'][_0x1aa85c(0x5e1)][_0x1aa85c(0x51d)](new RegExp(_0x5d538a,'g'));}},Scene_Boot[_0x9e78a(0x1e9)][_0x9e78a(0x1b3)]=function(){const _0xed67c8=_0x9e78a;if(VisuMZ[_0xed67c8(0x294)])return;this[_0xed67c8(0x1ef)]();const _0x3359ed=[$dataItems,$dataWeapons,$dataArmors];for(const _0x1b0f3d of _0x3359ed){if(_0xed67c8(0x33d)===_0xed67c8(0x353))this[_0xed67c8(0x61e)](_0x1ef537);else for(const _0x5f3a6a of _0x1b0f3d){if(!_0x5f3a6a)continue;VisuMZ['ItemsEquipsCore'][_0xed67c8(0x486)](_0x5f3a6a,_0x1b0f3d),VisuMZ[_0xed67c8(0x331)][_0xed67c8(0x234)](_0x5f3a6a,_0x1b0f3d),VisuMZ['ItemsEquipsCore'][_0xed67c8(0x2e9)](_0x5f3a6a,_0x1b0f3d),VisuMZ['ItemsEquipsCore'][_0xed67c8(0x4bc)](_0x5f3a6a,_0x1b0f3d),VisuMZ[_0xed67c8(0x331)][_0xed67c8(0x505)](_0x5f3a6a,_0x1b0f3d);}}},Scene_Boot[_0x9e78a(0x1e9)][_0x9e78a(0x1ef)]=function(){const _0x2f697f=_0x9e78a;for(const _0x5ad008 of $dataClasses){if(!_0x5ad008)continue;VisuMZ['ItemsEquipsCore'][_0x2f697f(0x3da)](_0x5ad008);}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2a9)]=VisuMZ[_0x9e78a(0x2a9)],VisuMZ[_0x9e78a(0x2a9)]=function(_0x53a64a){const _0x304008=_0x9e78a;VisuMZ[_0x304008(0x331)][_0x304008(0x2a9)]['call'](this,_0x53a64a),VisuMZ['ItemsEquipsCore'][_0x304008(0x3da)](_0x53a64a);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1f5)]=VisuMZ[_0x9e78a(0x1f5)],VisuMZ[_0x9e78a(0x1f5)]=function(_0x1b4b53){const _0xaf311f=_0x9e78a;VisuMZ[_0xaf311f(0x331)][_0xaf311f(0x1f5)][_0xaf311f(0x20e)](this,_0x1b4b53),VisuMZ[_0xaf311f(0x331)][_0xaf311f(0x3fd)](_0x1b4b53,$dataItems);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x379)]=VisuMZ[_0x9e78a(0x379)],VisuMZ[_0x9e78a(0x379)]=function(_0x145205){const _0xb4402=_0x9e78a;VisuMZ[_0xb4402(0x331)][_0xb4402(0x379)][_0xb4402(0x20e)](this,_0x145205),VisuMZ['ItemsEquipsCore']['Parse_Notetags_Batch'](_0x145205,$dataWeapons);},VisuMZ[_0x9e78a(0x331)]['ParseArmorNotetags']=VisuMZ['ParseArmorNotetags'],VisuMZ[_0x9e78a(0x4a4)]=function(_0x4e4bfb){const _0x6a554f=_0x9e78a;VisuMZ[_0x6a554f(0x331)][_0x6a554f(0x4a4)][_0x6a554f(0x20e)](this,_0x4e4bfb),VisuMZ[_0x6a554f(0x331)][_0x6a554f(0x3fd)](_0x4e4bfb,$dataArmors);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x3da)]=function(_0x2e72d0){const _0x5a96b7=_0x9e78a;_0x2e72d0[_0x5a96b7(0x24a)]=[];const _0x27d745=$dataSystem[_0x5a96b7(0x3ff)][_0x5a96b7(0x4e5)](_0x1a3ff9=>_0x1a3ff9?_0x1a3ff9['trim']():'');if(!BattleManager[_0x5a96b7(0x132)]()&&_0x2e72d0[_0x5a96b7(0x173)][_0x5a96b7(0x3cf)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){if(_0x5a96b7(0x280)===_0x5a96b7(0x280)){const _0x646465=String(RegExp['$1'])[_0x5a96b7(0x19d)](/[\r\n]+/);for(const _0xf01a02 of _0x646465){const _0x5bddd3=_0x27d745[_0x5a96b7(0x63b)](_0xf01a02['trim']());if(_0x5bddd3>0x0)_0x2e72d0[_0x5a96b7(0x24a)][_0x5a96b7(0x51d)](_0x5bddd3);}}else{const _0x174fc7=this[_0x5a96b7(0x3f7)](_0x388cf5),_0x16b7a6=this['commandName'](_0x30904a),_0x1c89cd=this[_0x5a96b7(0x50b)](_0x16b7a6)[_0x5a96b7(0x1d2)];this[_0x5a96b7(0x23f)](this[_0x5a96b7(0x5ec)](_0x14851c));const _0x1c0fba=this[_0x5a96b7(0x5e7)]();if(_0x1c0fba==='right')this[_0x5a96b7(0x42c)](_0x16b7a6,_0x174fc7['x']+_0x174fc7[_0x5a96b7(0x1d2)]-_0x1c89cd,_0x174fc7['y'],_0x1c89cd);else{if(_0x1c0fba===_0x5a96b7(0x550)){const _0x46e6a3=_0x174fc7['x']+_0x128199[_0x5a96b7(0x207)]((_0x174fc7[_0x5a96b7(0x1d2)]-_0x1c89cd)/0x2);this[_0x5a96b7(0x42c)](_0x16b7a6,_0x46e6a3,_0x174fc7['y'],_0x1c89cd);}else this['drawTextEx'](_0x16b7a6,_0x174fc7['x'],_0x174fc7['y'],_0x1c89cd);}}}else{if(_0x5a96b7(0x176)==='uOjqE')this['cursorDown'](_0x51f03d[_0x5a96b7(0x3df)]('down'));else for(const _0x69f2e1 of _0x27d745){if(_0x5a96b7(0x5a4)==='wrtZD'){const _0x3c82bc=_0x27d745[_0x5a96b7(0x63b)](_0x69f2e1[_0x5a96b7(0x361)]());if(_0x3c82bc>0x0)_0x2e72d0[_0x5a96b7(0x24a)][_0x5a96b7(0x51d)](_0x3c82bc);}else return this[_0x5a96b7(0x31b)]?_0x17d891['ShopMenuStatusStandard']:0x1;}}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x3fd)]=function(_0x102000,_0x14c503){const _0x508767=_0x9e78a;VisuMZ[_0x508767(0x331)][_0x508767(0x486)](_0x102000,_0x14c503),VisuMZ['ItemsEquipsCore'][_0x508767(0x234)](_0x102000,_0x14c503),VisuMZ[_0x508767(0x331)][_0x508767(0x2e9)](_0x102000,_0x14c503),VisuMZ[_0x508767(0x331)][_0x508767(0x4bc)](_0x102000,_0x14c503),VisuMZ['ItemsEquipsCore']['Parse_Notetags_EnableJS'](_0x102000,_0x14c503);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x486)]=function(_0x481dc0,_0x5400b4){const _0x224c1b=_0x9e78a;_0x481dc0[_0x224c1b(0x4bf)]=[];const _0x4286b6=_0x481dc0[_0x224c1b(0x173)],_0x3ad162=_0x4286b6[_0x224c1b(0x3cf)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x3ad162)for(const _0x6a9f39 of _0x3ad162){_0x6a9f39['match'](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x5ca1a5=String(RegExp['$1'])['toUpperCase']()[_0x224c1b(0x361)]()[_0x224c1b(0x19d)](',');for(const _0xa03ab3 of _0x5ca1a5){_0x224c1b(0x195)!==_0x224c1b(0x195)?(_0x22c99c[_0x224c1b(0x3df)](_0x224c1b(0x160))&&this[_0x224c1b(0x375)](),_0x587d00[_0x224c1b(0x3df)](_0x224c1b(0x5d2))&&this[_0x224c1b(0x174)]()):_0x481dc0[_0x224c1b(0x4bf)][_0x224c1b(0x51d)](_0xa03ab3[_0x224c1b(0x361)]());}}if(_0x4286b6[_0x224c1b(0x3cf)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x169574=RegExp['$1']['split'](/[\r\n]+/);for(const _0x5be46f of _0x169574){_0x481dc0[_0x224c1b(0x4bf)][_0x224c1b(0x51d)](_0x5be46f['toUpperCase']()[_0x224c1b(0x361)]());}}},VisuMZ[_0x9e78a(0x331)]['Parse_Notetags_Prices']=function(_0x3e886a,_0x5e01e3){const _0x46d715=_0x9e78a;_0x3e886a[_0x46d715(0x173)][_0x46d715(0x3cf)](/<PRICE:[ ](\d+)>/i)&&(_0x3e886a['price']=Number(RegExp['$1']));},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2e9)]=function(_0x3b4d51,_0x1905c0){const _0x1720e2=_0x9e78a;if(_0x1905c0===$dataItems)return;for(let _0x3ebd38=0x0;_0x3ebd38<0x8;_0x3ebd38++){const _0x486a9a=VisuMZ[_0x1720e2(0x331)]['RegExp']['EquipParams'][_0x3ebd38];if(_0x3b4d51['note'][_0x1720e2(0x3cf)](_0x486a9a)){if(_0x1720e2(0x327)!==_0x1720e2(0x327)){const _0x2d0b4c=_0x213062?_0x303f57(_0x200a63['$1']):_0x3cd164[_0x1720e2(0x460)](_0x49af9e);return _0x34e5c7[_0x2d0b4c]||_0x59a44e;}else _0x3b4d51[_0x1720e2(0x612)][_0x3ebd38]=parseInt(RegExp['$1']);}}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x279)]={},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x4bc)]=function(_0x4acb49,_0x142767){const _0x514d15=_0x9e78a;if(_0x142767===$dataItems)return;if(_0x4acb49[_0x514d15(0x173)][_0x514d15(0x3cf)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x5983b7=String(RegExp['$1']),_0x4b7dbe=(_0x142767===$dataWeapons?_0x514d15(0x157):_0x514d15(0x34c))['format'](_0x4acb49['id']),_0x14e802='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'['format'](_0x5983b7);for(let _0x3f764b=0x0;_0x3f764b<0x8;_0x3f764b++){if(_0x5983b7['match'](VisuMZ[_0x514d15(0x331)][_0x514d15(0x155)][_0x514d15(0x5e1)][_0x3f764b])){if(_0x514d15(0x596)!==_0x514d15(0x596))return _0x13e2e6['ItemsEquipsCore'][_0x514d15(0x5b0)][_0x514d15(0x1ab)][_0x514d15(0x334)];else{const _0x5cd9ef=_0x514d15(0x13a)[_0x514d15(0x4a6)](_0x4b7dbe,_0x3f764b);VisuMZ[_0x514d15(0x331)][_0x514d15(0x279)][_0x5cd9ef]=new Function(_0x514d15(0x5ee),_0x514d15(0x529),_0x14e802);}}}}},VisuMZ[_0x9e78a(0x331)]['itemEnableJS']={},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x505)]=function(_0x4fbab4,_0x8a5977){const _0xf97427=_0x9e78a;if(_0x8a5977!==$dataItems)return;if(_0x4fbab4['note'][_0xf97427(0x3cf)](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){if(_0xf97427(0x1d7)!==_0xf97427(0x1d7)){const _0x3babd5=this[_0xf97427(0x5a5)](_0x57ff75);let _0x304e04=0x0,_0x523ce5=0x0,_0x18401d=0x0;_0x3f5319[_0xf97427(0x423)]?(_0x304e04=_0x3babd5[_0xf97427(0x4d5)](_0x11b9e4),_0x523ce5=_0x304e04-_0x31e3b5[_0xf97427(0x4d5)](_0x53cfda),this[_0xf97427(0x32e)](_0x177b97[_0xf97427(0x235)](_0x523ce5)),_0x18401d=(_0x523ce5>=0x0?'+':'')+_0x55b0df['ConvertNumberToString'](_0x523ce5,0x0,_0x307e9c)):(_0x304e04=_0x3babd5[_0xf97427(0x432)](_0x1332e1),_0x523ce5=_0x304e04-_0xca4d1a[_0xf97427(0x432)](_0x460e6d),this[_0xf97427(0x32e)](_0x124399[_0xf97427(0x235)](_0x523ce5)),_0x18401d=(_0x523ce5>=0x0?'+':'')+_0x523ce5),_0x18401d==='+0'&&(_0x18401d=_0x303636[_0xf97427(0x487)]),this[_0xf97427(0x3ce)](_0x18401d,_0x2ed13e,_0x5127b2,_0x124b94,'center');}else{const _0x20a1fa=String(RegExp['$1']),_0x575ca6=_0xf97427(0x437)[_0xf97427(0x4a6)](_0x20a1fa);VisuMZ[_0xf97427(0x331)][_0xf97427(0x577)][_0x4fbab4['id']]=new Function(_0xf97427(0x5ee),_0x575ca6);}}},DataManager['isKeyItem']=function(_0x28bf23){const _0x26d97f=_0x9e78a;return this[_0x26d97f(0x4d8)](_0x28bf23)&&_0x28bf23[_0x26d97f(0x3ea)]===0x2;},DataManager[_0x9e78a(0x364)]=function(_0x2349de){const _0x5e881f=_0x9e78a;if(!_0x2349de)return 0x63;else return _0x2349de['note'][_0x5e881f(0x3cf)](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x5e881f(0x2db)](_0x2349de);},DataManager[_0x9e78a(0x2db)]=function(_0x15b9c2){const _0x29f808=_0x9e78a;if(this[_0x29f808(0x4d8)](_0x15b9c2)){if(_0x29f808(0x61c)===_0x29f808(0x35b))this['onCategoryCancelItemsEquipsCore']();else return VisuMZ[_0x29f808(0x331)][_0x29f808(0x5b0)][_0x29f808(0x4e7)][_0x29f808(0x17a)];}else{if(this['isWeapon'](_0x15b9c2))return VisuMZ[_0x29f808(0x331)][_0x29f808(0x5b0)][_0x29f808(0x4e7)][_0x29f808(0x394)];else{if(this['isArmor'](_0x15b9c2))return VisuMZ['ItemsEquipsCore'][_0x29f808(0x5b0)]['ItemScene'][_0x29f808(0x393)];}}},DataManager[_0x9e78a(0x2e7)]=function(_0x685aeb){const _0x570bd7=_0x9e78a;_0x685aeb=_0x685aeb[_0x570bd7(0x289)]()[_0x570bd7(0x361)](),this[_0x570bd7(0x4e1)]=this[_0x570bd7(0x4e1)]||{};if(this['_classIDs'][_0x685aeb])return this[_0x570bd7(0x4e1)][_0x685aeb];for(const _0x29c72c of $dataClasses){if(!_0x29c72c)continue;let _0x4bb2a3=_0x29c72c[_0x570bd7(0x3a7)];_0x4bb2a3=_0x4bb2a3['replace'](/\x1I\[(\d+)\]/gi,''),_0x4bb2a3=_0x4bb2a3['replace'](/\\I\[(\d+)\]/gi,''),this['_classIDs'][_0x4bb2a3[_0x570bd7(0x289)]()['trim']()]=_0x29c72c['id'];}return this[_0x570bd7(0x4e1)][_0x685aeb]||0x0;},DataManager[_0x9e78a(0x429)]=function(_0x48d34a){const _0x34d63b=_0x9e78a;_0x48d34a=_0x48d34a[_0x34d63b(0x289)]()['trim'](),this[_0x34d63b(0x1cf)]=this[_0x34d63b(0x1cf)]||{};if(this[_0x34d63b(0x1cf)][_0x48d34a])return this['_skillIDs'][_0x48d34a];for(const _0x39c5da of $dataSkills){if('etTVW'===_0x34d63b(0x2f3)){if(!_0x39c5da)continue;this[_0x34d63b(0x1cf)][_0x39c5da['name'][_0x34d63b(0x289)]()[_0x34d63b(0x361)]()]=_0x39c5da['id'];}else this[_0x34d63b(0x3e3)]();}return this[_0x34d63b(0x1cf)][_0x48d34a]||0x0;},DataManager['getItemIdWithName']=function(_0x510c18){const _0x54dd76=_0x9e78a;_0x510c18=_0x510c18[_0x54dd76(0x289)]()[_0x54dd76(0x361)](),this['_itemIDs']=this[_0x54dd76(0x575)]||{};if(this[_0x54dd76(0x575)][_0x510c18])return this[_0x54dd76(0x575)][_0x510c18];for(const _0x53d182 of $dataItems){if(_0x54dd76(0x5df)==='FJxmY')_0xb4f85[_0x54dd76(0x1e9)][_0x54dd76(0x1d0)][_0x54dd76(0x20e)](this,_0xf5bc78);else{if(!_0x53d182)continue;this[_0x54dd76(0x575)][_0x53d182['name'][_0x54dd76(0x289)]()['trim']()]=_0x53d182['id'];}}return this[_0x54dd76(0x575)][_0x510c18]||0x0;},DataManager[_0x9e78a(0x460)]=function(_0x5a43ab){const _0x44763a=_0x9e78a;_0x5a43ab=_0x5a43ab[_0x44763a(0x289)]()[_0x44763a(0x361)](),this['_weaponIDs']=this[_0x44763a(0x3db)]||{};if(this[_0x44763a(0x3db)][_0x5a43ab])return this[_0x44763a(0x3db)][_0x5a43ab];for(const _0x2125b2 of $dataWeapons){if(_0x44763a(0x1ea)!==_0x44763a(0x3cd)){if(!_0x2125b2)continue;this[_0x44763a(0x3db)][_0x2125b2[_0x44763a(0x3a7)][_0x44763a(0x289)]()[_0x44763a(0x361)]()]=_0x2125b2['id'];}else _0x20597d['ItemsEquipsCore'][_0x44763a(0x62a)]['call'](this,_0xf7f807),_0x137b92[_0x44763a(0x3eb)]=this;}return this['_weaponIDs'][_0x5a43ab]||0x0;},DataManager[_0x9e78a(0x44a)]=function(_0x4b58b4){const _0x2f405e=_0x9e78a;_0x4b58b4=_0x4b58b4[_0x2f405e(0x289)]()[_0x2f405e(0x361)](),this['_armorIDs']=this[_0x2f405e(0x4a5)]||{};if(this[_0x2f405e(0x4a5)][_0x4b58b4])return this[_0x2f405e(0x4a5)][_0x4b58b4];for(const _0x24641b of $dataArmors){if(!_0x24641b)continue;this[_0x2f405e(0x4a5)][_0x24641b[_0x2f405e(0x3a7)][_0x2f405e(0x289)]()[_0x2f405e(0x361)]()]=_0x24641b['id'];}return this[_0x2f405e(0x4a5)][_0x4b58b4]||0x0;},DataManager[_0x9e78a(0x389)]=function(_0x356e55){const _0x3ae0d2=_0x9e78a;_0x356e55=_0x356e55['toUpperCase']()[_0x3ae0d2(0x361)](),this['_etypeIDs']=this[_0x3ae0d2(0x270)]||{};if(this[_0x3ae0d2(0x270)][_0x356e55])return this[_0x3ae0d2(0x270)][_0x356e55];for(const _0x2c10f1 of $dataSystem['equipTypes']){this[_0x3ae0d2(0x270)][_0x2c10f1['toUpperCase']()['trim']()]=$dataSystem[_0x3ae0d2(0x3ff)][_0x3ae0d2(0x63b)](_0x2c10f1);}return this[_0x3ae0d2(0x270)][_0x356e55]||0x0;},VisuMZ[_0x9e78a(0x331)]['SetupProxyItemGroups']=function(){const _0x11446c=_0x9e78a;VisuMZ[_0x11446c(0x331)]['SetupProxyItemGroup']($dataItems),VisuMZ['ItemsEquipsCore'][_0x11446c(0x2bf)]($dataWeapons),VisuMZ[_0x11446c(0x331)][_0x11446c(0x2bf)]($dataArmors);},VisuMZ[_0x9e78a(0x331)]['SetupProxyItemGroup']=function(_0x43f0ec){const _0x40d34d=_0x9e78a;for(const _0x11a2d2 of _0x43f0ec){if(_0x40d34d(0x30c)===_0x40d34d(0x3dc))_0x3625a4=_0xd90ad3(_0x106b2e['$1'])[_0x40d34d(0x19d)](/[\r\n]+/);else{if(!_0x11a2d2)continue;if(!DataManager[_0x40d34d(0x1e0)](_0x11a2d2))continue;const _0x1efcab=DataManager[_0x40d34d(0x5bb)](_0x11a2d2),_0x5ad920=[_0x40d34d(0x3a7),_0x40d34d(0x425),'description'];for(const _0x422e76 of _0x5ad920){if(_0x40d34d(0x1ae)===_0x40d34d(0x16f)){const _0x1559be=_0x413cfa(_0x457551['$1'])[_0x40d34d(0x19d)](/[\r\n]+/);for(const _0x5f33c9 of _0x1559be){if(_0x5f33c9[_0x40d34d(0x3cf)](/(.*):[ ](.*)/i)){const _0x38c067=_0x5f1858(_0x584114['$1'])[_0x40d34d(0x289)]()[_0x40d34d(0x361)](),_0x1a8a0f=_0x503eb5(_0x57d7da['$2'])[_0x40d34d(0x361)]();this['_customItemInfo'][_0x38c067]=_0x1a8a0f;}}}else _0x11a2d2[_0x422e76]=_0x1efcab[_0x422e76];}}}},DataManager[_0x9e78a(0x1e0)]=function(_0x435622){const _0x49214f=_0x9e78a;if(!_0x435622)return![];if(!_0x435622[_0x49214f(0x173)])return![];return _0x435622&&_0x435622[_0x49214f(0x173)][_0x49214f(0x3cf)](/<PROXY:[ ](.*)>/i);},DataManager[_0x9e78a(0x5bb)]=function(_0x3cf447){const _0x407042=_0x9e78a;if(this[_0x407042(0x1e0)](_0x3cf447)){if('TCKlT'===_0x407042(0x45a)){if(_0x33b224[_0x407042(0x3cf)](/(.*):[ ](.*)/i)){const _0x30b276=_0x1a2751(_0x4e59b0['$1'])[_0x407042(0x289)]()[_0x407042(0x361)](),_0x5ada74=_0x176e82(_0x2ec728['$2'])['trim']();this[_0x407042(0x287)][_0x30b276]=_0x5ada74;}}else return this[_0x407042(0x2c3)](_0x3cf447)||_0x3cf447;}else return _0x3cf447;},DataManager[_0x9e78a(0x2c3)]=function(_0x58eea5){const _0x4ce297=_0x9e78a;_0x58eea5[_0x4ce297(0x173)][_0x4ce297(0x3cf)](/<PROXY:[ ](.*)>/i);const _0x79f0d7=RegExp['$1']['trim'](),_0x4691b6=/^\d+$/[_0x4ce297(0x579)](_0x79f0d7);if(this[_0x4ce297(0x4d8)](_0x58eea5)){const _0x2678df=_0x4691b6?Number(RegExp['$1']):DataManager[_0x4ce297(0x172)](_0x79f0d7);return $dataItems[_0x2678df]||_0x58eea5;}else{if(this[_0x4ce297(0x613)](_0x58eea5)){const _0x3c6b77=_0x4691b6?Number(RegExp['$1']):DataManager['getWeaponIdWithName'](_0x79f0d7);return $dataWeapons[_0x3c6b77]||_0x58eea5;}else{if(this[_0x4ce297(0x525)](_0x58eea5)){const _0x4a6695=_0x4691b6?Number(RegExp['$1']):DataManager[_0x4ce297(0x44a)](_0x79f0d7);return $dataArmors[_0x4a6695]||_0x58eea5;}}}return _0x58eea5;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x239)]=Window_ItemList['prototype']['item'],Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x5ee)]=function(){const _0x314d3a=_0x9e78a;if($gameTemp[_0x314d3a(0x501)])return VisuMZ[_0x314d3a(0x331)]['Window_ItemList_item']['call'](this);return DataManager['getProxyItem'](VisuMZ[_0x314d3a(0x331)][_0x314d3a(0x239)]['call'](this));},Window_ItemList[_0x9e78a(0x1e9)]['proxyItem']=function(){const _0x2f6454=_0x9e78a;return VisuMZ[_0x2f6454(0x331)][_0x2f6454(0x239)][_0x2f6454(0x20e)](this);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x34d)]=Window_ShopBuy['prototype'][_0x9e78a(0x5ee)],Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x5ee)]=function(){const _0x733ef6=_0x9e78a;if($gameTemp[_0x733ef6(0x501)])return VisuMZ['ItemsEquipsCore'][_0x733ef6(0x34d)][_0x733ef6(0x20e)](this);return DataManager[_0x733ef6(0x5bb)](VisuMZ[_0x733ef6(0x331)][_0x733ef6(0x34d)][_0x733ef6(0x20e)](this));},Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x463)]=function(){const _0x33c667=_0x9e78a;return VisuMZ[_0x33c667(0x331)]['Window_ShopBuy_item']['call'](this);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x4ed)]=Game_Item['prototype'][_0x9e78a(0x371)],Game_Item[_0x9e78a(0x1e9)][_0x9e78a(0x371)]=function(_0x483752){const _0x3d4b80=_0x9e78a;if(DataManager['isProxyItem'](_0x483752))return;VisuMZ[_0x3d4b80(0x331)][_0x3d4b80(0x4ed)][_0x3d4b80(0x20e)](this,_0x483752);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x330)]=function(){const _0x35fe34=_0x9e78a;this[_0x35fe34(0x179)]={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x5066d0 of $dataArmors){if(_0x35fe34(0x41d)!==_0x35fe34(0x318)){if(!_0x5066d0)continue;if(!DataManager[_0x35fe34(0x4dd)](_0x5066d0))continue;DataManager['isPartyArtifact'](_0x5066d0)&&(_0x35fe34(0x29e)!=='wFQgq'?_0x2897d2['setValue'](_0x343707['SwitchBuy'],!![]):this['artifactIDs'][_0x35fe34(0x38c)][_0x35fe34(0x51d)](_0x5066d0['id']));if(DataManager[_0x35fe34(0x496)](_0x5066d0)){if('HsSQm'!==_0x35fe34(0x43d)){const _0x5aac6e=this[_0x35fe34(0x27a)][this[_0x35fe34(0x27a)][_0x35fe34(0x458)]-0x1];_0x5aac6e&&_0x5aac6e['object']()&&_0x2eb27d['gainItem'](_0x5aac6e['object'](),0x1),this['_equips'][_0x35fe34(0x273)]();}else this['artifactIDs'][_0x35fe34(0x26b)][_0x35fe34(0x51d)](_0x5066d0['id']);}}else{if(this[_0x35fe34(0x3d2)]())return _0x4325e3['ItemsEquipsCore']['Settings'][_0x35fe34(0x4e7)]['buttonAssistCategory'];else{if(this[_0x35fe34(0x22e)]&&this[_0x35fe34(0x22e)]['active'])return _0xeb649f[_0x35fe34(0x331)][_0x35fe34(0x5b0)][_0x35fe34(0x1ab)][_0x35fe34(0x5dc)];}return _0x398551[_0x35fe34(0x1e9)][_0x35fe34(0x1f3)][_0x35fe34(0x20e)](this);}}},DataManager['isArtifact']=function(_0x1cb9f4){const _0x56aff1=_0x9e78a;if(!this[_0x56aff1(0x525)](_0x1cb9f4))return![];const _0x410609=_0x1cb9f4[_0x56aff1(0x173)];if(!_0x410609)return![];if(_0x410609[_0x56aff1(0x3cf)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x410609[_0x56aff1(0x3cf)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x410609[_0x56aff1(0x3cf)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x410609[_0x56aff1(0x3cf)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x9e78a(0x27f)]=function(_0x527b51){const _0x3f4631=_0x9e78a;if(!this[_0x3f4631(0x4dd)](_0x527b51))return![];const _0x363421=_0x527b51[_0x3f4631(0x173)];if(!_0x363421)return![];if(_0x363421['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x363421['match'](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x9e78a(0x63e)]=function(_0x2e52e3){const _0x4c4979=_0x9e78a;if(!this['isArtifact'](_0x2e52e3))return![];const _0x3f31e7=_0x2e52e3[_0x4c4979(0x173)];if(!_0x3f31e7)return![];if(_0x3f31e7['match'](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x3f31e7[_0x4c4979(0x3cf)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager['isTroopArtifact']=function(_0x1b155d){const _0x306a60=_0x9e78a;if(!this['isArtifact'](_0x1b155d))return![];const _0x34fa15=_0x1b155d[_0x306a60(0x173)];if(!_0x34fa15)return![];if(_0x34fa15[_0x306a60(0x3cf)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x34fa15[_0x306a60(0x3cf)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x9e78a(0x331)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x380)],Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x380)]=function(_0x4199eb){const _0x589523=_0x9e78a;if(DataManager['isArtifact'](_0x4199eb))return![];if(!DataManager[_0x589523(0x5e5)](this,_0x4199eb))return![];if(!DataManager[_0x589523(0x44d)](this,_0x4199eb))return![];return VisuMZ[_0x589523(0x331)][_0x589523(0x346)][_0x589523(0x20e)](this,_0x4199eb);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x20a)]=Game_BattlerBase['prototype']['param'],Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x432)]=function(_0x107587){const _0x2df57d=_0x9e78a;this['_allowArtifactParamBase']=!![];const _0x4803d5=VisuMZ[_0x2df57d(0x331)][_0x2df57d(0x20a)][_0x2df57d(0x20e)](this,_0x107587);return this[_0x2df57d(0x5a7)]=undefined,_0x4803d5;},VisuMZ[_0x9e78a(0x331)]['Game_Actor_artifact']=Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x47b)],Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x47b)]=function(){const _0x102204=_0x9e78a;this[_0x102204(0x2c4)]=!![];const _0x2bb28d=VisuMZ[_0x102204(0x331)][_0x102204(0x547)][_0x102204(0x20e)](this);return this[_0x102204(0x2c4)]=undefined,_0x2bb28d;},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x4f8)]=Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x5be)],Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x5be)]=function(){const _0x2a1457=_0x9e78a,_0x83b82b=VisuMZ[_0x2a1457(0x331)]['Game_Actor_equips_artifacts'][_0x2a1457(0x20e)](this);if(this[_0x2a1457(0x2c4)]||this[_0x2a1457(0x5a7)]){if(_0x2a1457(0x4c5)===_0x2a1457(0x4c5)){const _0x36426d=_0x83b82b[_0x2a1457(0x29a)]($gameParty[_0x2a1457(0x5fb)]());return _0x36426d;}else this[_0x2a1457(0x564)](0x0);}else{if(_0x2a1457(0x20b)!==_0x2a1457(0x518))return _0x83b82b;else{const _0x1b300c=_0x269ef8[_0x2a1457(0x3ff)]['indexOf'](_0x151333(_0x3562b1['$1'])[_0x2a1457(0x361)]());return _0x38af5a[_0x2a1457(0x525)](_0x1b1c2e)&&_0x5b62e4[_0x2a1457(0x589)]===_0x1b300c;}}},VisuMZ[_0x9e78a(0x331)]['Game_BattlerBase_paramPlus_artifact']=Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x17b)],Game_BattlerBase['prototype']['paramPlus']=function(_0x22502d){const _0x285473=_0x9e78a;let _0x1e7b7f=VisuMZ[_0x285473(0x331)][_0x285473(0x64d)]['call'](this,_0x22502d);if(this[_0x285473(0x354)]===Game_Enemy)for(const _0x9ca06 of $gameParty[_0x285473(0x3d9)]()){if(_0x9ca06)_0x1e7b7f+=_0x9ca06['params'][_0x22502d];}return _0x1e7b7f;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x420)]=Game_Enemy[_0x9e78a(0x1e9)]['traitObjects'],Game_Enemy[_0x9e78a(0x1e9)][_0x9e78a(0x47b)]=function(){const _0x5d7a7c=_0x9e78a;let _0x4d2f05=VisuMZ[_0x5d7a7c(0x331)][_0x5d7a7c(0x420)][_0x5d7a7c(0x20e)](this);return _0x4d2f05[_0x5d7a7c(0x29a)]($gameParty[_0x5d7a7c(0x3d9)]());},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x251)]=Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x60c)],Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x60c)]=function(_0x3f1bed,_0x1ad4f8,_0x42f380){const _0x466e47=_0x9e78a;VisuMZ['ItemsEquipsCore']['Game_Party_gainItem_artifact'][_0x466e47(0x20e)](this,_0x3f1bed,_0x1ad4f8,_0x42f380);if(DataManager[_0x466e47(0x4dd)](_0x3f1bed)){if(_0x466e47(0x3e6)===_0x466e47(0x4af))this[_0x466e47(0x375)]();else{let _0xa38a84=$gameParty['allMembers']();if($gameParty[_0x466e47(0x4c4)]())_0xa38a84=_0xa38a84[_0x466e47(0x29a)]($gameTroop['members']());for(const _0x4ee030 of _0xa38a84){if(!_0x4ee030)continue;_0x4ee030[_0x466e47(0x1a9)]={};}}}},Game_Party['prototype']['partyArtifacts']=function(){const _0x5bd80e=_0x9e78a;let _0x201a65=[];const _0x3daeab=VisuMZ[_0x5bd80e(0x331)]['artifactIDs'][_0x5bd80e(0x38c)];if(_0x3daeab){if(_0x5bd80e(0x58a)==='QNdlL'){if(!this['isEquipItem']())return![];const _0xf895f8=_0x3c6797[_0x5bd80e(0x3ff)][this['_item']['etypeId']];return this[_0x5bd80e(0x61a)](_0xf895f8,_0x2134c5,_0x187d7c,_0x13a807,!![]),this['drawItemDarkRect'](_0x571cbc,_0x25adc1,_0x5231b8),this[_0x5bd80e(0x293)](),!![];}else for(const _0x344651 of _0x3daeab){const _0x50dbdd=$dataArmors[_0x344651];if(!_0x50dbdd)continue;if(!this['hasItem'](_0x50dbdd))continue;let _0x5ccb47=0x1;if(DataManager[_0x5bd80e(0x27f)](_0x50dbdd))_0x5ccb47=this[_0x5bd80e(0x1ad)](_0x50dbdd);while(_0x5ccb47--)_0x201a65[_0x5bd80e(0x51d)](_0x50dbdd);}}return _0x201a65;},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x3d9)]=function(){const _0x2e29a2=_0x9e78a;let _0x146315=[];const _0xf9e3bf=VisuMZ[_0x2e29a2(0x331)][_0x2e29a2(0x179)][_0x2e29a2(0x26b)];if(_0xf9e3bf)for(const _0x228d25 of _0xf9e3bf){const _0x4fd272=$dataArmors[_0x228d25];if(!_0x4fd272)continue;if(!this['hasItem'](_0x4fd272))continue;let _0xa9a1dc=0x1;if(DataManager[_0x2e29a2(0x27f)](_0x4fd272))_0xa9a1dc=this[_0x2e29a2(0x1ad)](_0x4fd272);while(_0xa9a1dc--)_0x146315[_0x2e29a2(0x51d)](_0x4fd272);}return _0x146315;},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x161)]=function(){const _0x374513=_0x9e78a;return this['partyArtifacts']()[_0x374513(0x29a)](this['troopArtifacts']());},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x4d2)]=Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x36a)],Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x36a)]=function(){const _0x53884d=_0x9e78a;VisuMZ[_0x53884d(0x331)][_0x53884d(0x4d2)][_0x53884d(0x20e)](this),this[_0x53884d(0x3a9)]();},Game_Party[_0x9e78a(0x1e9)]['removeBattleTestArtifacts']=function(){const _0x5bbf8a=_0x9e78a,_0x1cb162=$gameParty['armors']()['filter'](_0x1fae00=>DataManager[_0x5bbf8a(0x4dd)](_0x1fae00));for(const _0x4b7b29 of _0x1cb162){const _0x5b193f=this[_0x5bbf8a(0x1ad)](_0x4b7b29);if(_0x5b193f)this[_0x5bbf8a(0x266)](_0x4b7b29,_0x5b193f);}},DataManager[_0x9e78a(0x5e5)]=function(_0x3c6f2f,_0x2b9842){const _0x24707f=_0x9e78a;if(this[_0x24707f(0x4d8)](_0x2b9842))return![];if(!_0x3c6f2f)return![];if($gameTemp[_0x24707f(0x304)])return!![];if(BattleManager['isBattleTest']())return!![];const _0x421af8=this[_0x24707f(0x603)](_0x2b9842);if(_0x421af8[_0x24707f(0x458)]<=0x0)return!![];return _0x421af8[_0x24707f(0x285)](_0x3c6f2f[_0x24707f(0x544)]()['id']);},DataManager[_0x9e78a(0x603)]=function(_0x3a08ee){const _0x4134a8=_0x9e78a;if(!_0x3a08ee)return[];this[_0x4134a8(0x56c)]=this[_0x4134a8(0x56c)]||{};const _0xa4a6ef='%1-%2'['format'](this[_0x4134a8(0x613)](_0x3a08ee)?_0x4134a8(0x563):'ARMOR',_0x3a08ee['id']);if(this[_0x4134a8(0x56c)][_0xa4a6ef]!==undefined)return _0x4134a8(0x2f2)!=='kpizd'?this[_0x4134a8(0x21f)](_0x50d937[_0x4134a8(0x180)])&&!this[_0x4134a8(0x42f)](_0x445de7[_0x4134a8(0x589)])&&_0x2a0484[_0x4134a8(0x4c0)](_0x323a62)['every'](_0x380554=>!this[_0x4134a8(0x42f)](_0x380554)):this[_0x4134a8(0x56c)][_0xa4a6ef];let _0x457cec=[];const _0x45a3d1=_0x3a08ee[_0x4134a8(0x173)]||'';if(_0x45a3d1[_0x4134a8(0x3cf)](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){if(_0x4134a8(0x146)===_0x4134a8(0x146)){const _0x26e718=String(RegExp['$1'])[_0x4134a8(0x19d)](',')[_0x4134a8(0x4e5)](_0xe6c83e=>_0xe6c83e[_0x4134a8(0x361)]());for(const _0x1254db of _0x26e718){const _0xb57266=/^\d+$/[_0x4134a8(0x579)](_0x1254db);if(_0xb57266)_0x457cec[_0x4134a8(0x51d)](Number(_0x1254db));else{if('JhtCz'==='JhtCz')_0x457cec['push'](DataManager[_0x4134a8(0x2e7)](_0x1254db));else{this[_0x4134a8(0x5a7)]=!![];const _0x523eee=_0x48a532[_0x4134a8(0x331)][_0x4134a8(0x20a)][_0x4134a8(0x20e)](this,_0x430971);return this[_0x4134a8(0x5a7)]=_0x1b4ad2,_0x523eee;}}}}else{_0x186552[_0x4134a8(0x331)]['Settings'][_0x4134a8(0x444)][_0x4134a8(0x25b)][_0x4134a8(0x20e)](this);return;}}return this[_0x4134a8(0x56c)][_0xa4a6ef]=_0x457cec,this[_0x4134a8(0x56c)][_0xa4a6ef];},DataManager[_0x9e78a(0x44d)]=function(_0x1e991d,_0x9f732a){const _0x198e6d=_0x9e78a;if(this[_0x198e6d(0x4d8)](_0x9f732a))return![];if(!_0x1e991d)return![];if($gameTemp[_0x198e6d(0x304)])return!![];if(BattleManager[_0x198e6d(0x132)]())return!![];const _0x7644f0=this[_0x198e6d(0x4ac)](_0x9f732a);for(const _0x372f5a of _0x7644f0){if(_0x198e6d(0x5d3)!==_0x198e6d(0x5d3))return _0x1e7ce7['ItemsEquipsCore']['Settings'][_0x198e6d(0x4e7)][_0x198e6d(0x19b)];else{if(!this['meetsEquipRequirement'](_0x1e991d,_0x372f5a))return![];}}return!![];},DataManager['getEquipRequirements']=function(_0x2aad19){const _0x60515d=_0x9e78a;if(!_0x2aad19)return[];this[_0x60515d(0x15e)]=this['_getEquipRequirements']||{};const _0x4e28fd=_0x60515d(0x13a)[_0x60515d(0x4a6)](this[_0x60515d(0x613)](_0x2aad19)?_0x60515d(0x563):_0x60515d(0x4e2),_0x2aad19['id']);if(this['_getEquipRequirements'][_0x4e28fd]!==undefined)return this[_0x60515d(0x15e)][_0x4e28fd];let _0x1462d6=[];const _0x394e31=_0x2aad19[_0x60515d(0x173)]||'';if(_0x394e31[_0x60515d(0x3cf)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)){if(_0x60515d(0x133)!=='zhZeD'){const _0x41f9c4=this[_0x60515d(0x3cb)][_0x60515d(0x569)][_0x4db931],_0x4d1f56=_0x153f1a['prototype']['buffIconIndex'](_0x41f9c4,_0x5f573c);if(_0x4d1f56>0x0){_0x11d627+=_0x60515d(0x3ef)[_0x60515d(0x4a6)](_0x4d1f56),_0x5058c4++;if(_0x31cb79>=_0x5ef9fd)return _0x289214;}}else _0x1462d6=String(RegExp['$1'])['split'](/[\r\n]+/);}return this['_getEquipRequirements'][_0x4e28fd]=_0x1462d6,this[_0x60515d(0x15e)][_0x4e28fd];},DataManager[_0x9e78a(0x5d6)]=function(_0x10131d,_0x82b2fb){const _0x2ee2c6=_0x9e78a;if(_0x82b2fb[_0x2ee2c6(0x3cf)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){if(_0x2ee2c6(0x1fd)===_0x2ee2c6(0x54c)){const _0xb28884=this['itemAt'](_0xf53fa0);_0xb28884?_0x1ae25b[_0x2ee2c6(0x1e9)][_0x2ee2c6(0x1d0)][_0x2ee2c6(0x20e)](this,_0x52fa66):this[_0x2ee2c6(0x46f)](_0x5c01ee);}else{const _0x4254d3=String(RegExp['$1'])[_0x2ee2c6(0x361)](),_0x2c985f=Number(RegExp['$2']);switch(_0x4254d3){case'>':return _0x10131d[_0x2ee2c6(0x546)]>_0x2c985f;case'>=':return _0x10131d[_0x2ee2c6(0x546)]>=_0x2c985f;case'===':return _0x10131d[_0x2ee2c6(0x546)]===_0x2c985f;case'<=':return _0x10131d[_0x2ee2c6(0x546)]<=_0x2c985f;case'<':return _0x10131d['level']<_0x2c985f;}return![];}}if(_0x82b2fb[_0x2ee2c6(0x3cf)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){if('HquCi'===_0x2ee2c6(0x1ed)){const _0x513c08=String(RegExp['$1'])[_0x2ee2c6(0x339)]()['trim'](),_0x1b2533=String(RegExp['$2'])[_0x2ee2c6(0x361)](),_0x50e3b5=Number(RegExp['$3']);let _0x12bb7f=0x0;if(['maxmp','mmp'][_0x2ee2c6(0x285)](_0x513c08))_0x12bb7f=0x1;const _0x5e42b2=_0x10131d['_paramPlus'][_0x12bb7f]||0x0;switch(_0x1b2533){case'>':return _0x10131d[_0x2ee2c6(0x507)](_0x12bb7f)+_0x5e42b2>_0x50e3b5;case'>=':return _0x10131d[_0x2ee2c6(0x507)](_0x12bb7f)+_0x5e42b2>=_0x50e3b5;case _0x2ee2c6(0x320):return _0x10131d[_0x2ee2c6(0x507)](_0x12bb7f)+_0x5e42b2===_0x50e3b5;case'<=':return _0x10131d[_0x2ee2c6(0x507)](_0x12bb7f)+_0x5e42b2<=_0x50e3b5;case'<':return _0x10131d[_0x2ee2c6(0x507)](_0x12bb7f)+_0x5e42b2<_0x50e3b5;}return![];}else{if(!_0x4f5203[_0x2ee2c6(0x4d3)](_0xacad5f))return![];}}if(_0x82b2fb[_0x2ee2c6(0x3cf)](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x434aa7=String(RegExp['$1'])[_0x2ee2c6(0x339)]()[_0x2ee2c6(0x361)](),_0x105d01=String(RegExp['$2'])['trim'](),_0x260629=Number(RegExp['$3']),_0xa4b37e=[_0x2ee2c6(0x25f),_0x2ee2c6(0x53f),_0x2ee2c6(0x1a4),_0x2ee2c6(0x4ba),_0x2ee2c6(0x590),_0x2ee2c6(0x424)];let _0xd80ed8=_0xa4b37e[_0x2ee2c6(0x63b)](_0x434aa7)+0x2;if(_0xd80ed8<0x2)return![];const _0x2aec70=_0x10131d['_paramPlus'][_0xd80ed8]||0x0;switch(_0x105d01){case'>':return _0x10131d[_0x2ee2c6(0x507)](_0xd80ed8)+_0x2aec70>_0x260629;case'>=':return _0x10131d[_0x2ee2c6(0x507)](_0xd80ed8)+_0x2aec70>=_0x260629;case'===':return _0x10131d['paramBase'](_0xd80ed8)+_0x2aec70===_0x260629;case'<=':return _0x10131d[_0x2ee2c6(0x507)](_0xd80ed8)+_0x2aec70<=_0x260629;case'<':return _0x10131d[_0x2ee2c6(0x507)](_0xd80ed8)+_0x2aec70<_0x260629;}return![];}if(_0x82b2fb[_0x2ee2c6(0x3cf)](/LEARNED SKILL:[ ](\d+)/i)){const _0x1f2885=Number(RegExp['$1']);return _0x10131d[_0x2ee2c6(0x48f)](_0x1f2885);}else{if(_0x82b2fb[_0x2ee2c6(0x3cf)](/LEARNED SKILL:[ ](.*)/i)){const _0x3f6d59=String(RegExp['$1']),_0x2a8c35=this['getSkillIdWithName'](_0x3f6d59);return _0x10131d[_0x2ee2c6(0x48f)](_0x2a8c35);}}if(_0x82b2fb[_0x2ee2c6(0x3cf)](/SWITCH:[ ](\d+)/i)){const _0x4cbecc=Number(RegExp['$1']);return $gameSwitches[_0x2ee2c6(0x4d3)](_0x4cbecc);}return!![];},DataManager[_0x9e78a(0x4c0)]=function(_0xed886b){const _0x66ff6f=_0x9e78a;if(this[_0x66ff6f(0x525)](_0xed886b))return'uqutk'!==_0x66ff6f(0x414)?this['getEtypeIDsCache'](_0xed886b):_0x2a8e2a(_0x10a5ae['$1']);else{if(_0x66ff6f(0x584)==='ptAKX')return[_0xed886b[_0x66ff6f(0x589)]||0x0];else{if(!this[_0x66ff6f(0x362)])return!![];return this['_tempActor'][_0x66ff6f(0x43e)]()!==_0xdaf931[_0x66ff6f(0x43e)]();}}},DataManager['getEtypeIDsCache']=function(_0x41d5fd){const _0x1b5b6b=_0x9e78a;this['_cache_etypeIDs']=this[_0x1b5b6b(0x46d)]||{};if(this['_cache_etypeIDs'][_0x41d5fd['id']]!==undefined)return _0x1b5b6b(0x454)!==_0x1b5b6b(0x59d)?this[_0x1b5b6b(0x46d)][_0x41d5fd['id']]:!![];this[_0x1b5b6b(0x46d)][_0x41d5fd['id']]=[_0x41d5fd[_0x1b5b6b(0x589)]||0x0];const _0x22173c=_0x41d5fd['note']||'';if(_0x22173c[_0x1b5b6b(0x3cf)](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x28c9f1=String(RegExp['$1'])['split'](',')['map'](_0x45215a=>_0x45215a[_0x1b5b6b(0x361)]());for(const _0x54be29 of _0x28c9f1){if(_0x1b5b6b(0x3a6)!==_0x1b5b6b(0x3a6))return this[_0x1b5b6b(0x351)]();else{const _0x3a35aa=/^\d+$/[_0x1b5b6b(0x579)](_0x54be29);let _0x187891=0x0;_0x3a35aa?_0x187891=Number(_0x54be29):_0x187891=this[_0x1b5b6b(0x389)](_0x54be29);if(_0x187891>0x1){if(_0x1b5b6b(0x52e)===_0x1b5b6b(0x52e))this[_0x1b5b6b(0x46d)][_0x41d5fd['id']][_0x1b5b6b(0x51d)](_0x187891);else return this[_0x1b5b6b(0x410)]();}}}}return this[_0x1b5b6b(0x46d)][_0x41d5fd['id']];},Game_BattlerBase[_0x9e78a(0x1e9)]['canEquipArmor']=function(_0x26a463){const _0x46c349=_0x9e78a;return this[_0x46c349(0x21f)](_0x26a463[_0x46c349(0x180)])&&!this['isEquipTypeSealed'](_0x26a463[_0x46c349(0x589)])&&DataManager[_0x46c349(0x4c0)](_0x26a463)['every'](_0x59c0aa=>!this[_0x46c349(0x42f)](_0x59c0aa));},TextManager[_0x9e78a(0x3d3)]={'helpDesc':{'equip':VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5b0)][_0x9e78a(0x399)][_0x9e78a(0x29f)]??_0x9e78a(0x630),'optimize':VisuMZ['ItemsEquipsCore'][_0x9e78a(0x5b0)][_0x9e78a(0x399)][_0x9e78a(0x5e4)]??'Equip\x20the\x20strongest\x20available\x20equipment.','clear':VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5b0)][_0x9e78a(0x399)][_0x9e78a(0x22c)]??_0x9e78a(0x2ca)}},ColorManager[_0x9e78a(0x5ae)]=function(_0x5cd95f){const _0x63b602=_0x9e78a;if(!_0x5cd95f){if(_0x63b602(0x618)!=='UlliA'){if(!this[_0x63b602(0x52b)]())return![];if(!this[_0x63b602(0x1bf)]())return![];if(!this[_0x63b602(0x1c4)])return![];if(!this[_0x63b602(0x1c4)][_0x63b602(0x30b)])return![];return this[_0x63b602(0x52b)]()&&this['isUseModernControls']();}else return this[_0x63b602(0x351)]();}else{if(_0x5cd95f[_0x63b602(0x173)][_0x63b602(0x3cf)](/<COLOR:[ ](\d+)>/i))return this[_0x63b602(0x4da)](Number(RegExp['$1'])[_0x63b602(0x3ac)](0x0,0x1f));else return _0x5cd95f[_0x63b602(0x173)][_0x63b602(0x3cf)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this['normalColor']();}},ColorManager[_0x9e78a(0x23c)]=function(_0x5b7eff){const _0x59e1f2=_0x9e78a;_0x5b7eff=String(_0x5b7eff);if(_0x5b7eff[_0x59e1f2(0x3cf)](/#(.*)/i)){if(_0x59e1f2(0x17f)!==_0x59e1f2(0x607))return _0x59e1f2(0x447)[_0x59e1f2(0x4a6)](String(RegExp['$1']));else _0x44e169+=_0x35312a[_0x59e1f2(0x2fb)]+0x4;}else return this[_0x59e1f2(0x4da)](Number(_0x5b7eff));},SceneManager[_0x9e78a(0x3c6)]=function(){const _0x35e3f1=_0x9e78a;return this[_0x35e3f1(0x5d1)]&&this[_0x35e3f1(0x5d1)][_0x35e3f1(0x354)]===Scene_Shop;},Game_Temp['prototype'][_0x9e78a(0x32a)]=function(){const _0x604ca=_0x9e78a;if(this[_0x604ca(0x3a4)])return![];return VisuMZ[_0x604ca(0x331)][_0x604ca(0x5b0)][_0x604ca(0x2e5)][_0x604ca(0x36c)];},VisuMZ[_0x9e78a(0x1d6)]=VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5b0)]['StatusWindow']['MultiplierStandard'],VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2a6)]=Game_BattlerBase['prototype'][_0x9e78a(0x432)],Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x432)]=function(_0x41bc8e){const _0x3809e5=_0x9e78a;if(this[_0x3809e5(0x177)]){if(_0x3809e5(0x189)==='gzTwn')_0x55bd30['a']=_0xfc783e,_0x438fde['b']=_0x2c07bb;else return this[_0x3809e5(0x31b)]?VisuMZ['ShopMenuStatusStandard']:0x1;}else return VisuMZ[_0x3809e5(0x331)][_0x3809e5(0x2a6)][_0x3809e5(0x20e)](this,_0x41bc8e);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x3e0)]=Game_BattlerBase[_0x9e78a(0x1e9)]['meetsItemConditions'],Game_BattlerBase[_0x9e78a(0x1e9)]['meetsItemConditions']=function(_0x347b0e){const _0x3405ea=_0x9e78a;if(!_0x347b0e)return![];if(!VisuMZ['ItemsEquipsCore'][_0x3405ea(0x3e0)][_0x3405ea(0x20e)](this,_0x347b0e))return![];if(!this[_0x3405ea(0x557)](_0x347b0e))return![];if(!this[_0x3405ea(0x554)](_0x347b0e))return![];return!![];},Game_BattlerBase[_0x9e78a(0x1e9)]['meetsItemConditionsNotetags']=function(_0x400dd6){const _0x495785=_0x9e78a;if(!this[_0x495785(0x37f)](_0x400dd6))return![];return!![];},Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x37f)]=function(_0x5160ab){const _0x55aef6=_0x9e78a,_0xec167=_0x5160ab[_0x55aef6(0x173)];if(_0xec167[_0x55aef6(0x3cf)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){if(_0x55aef6(0x1fa)===_0x55aef6(0x1fa)){const _0x419031=JSON[_0x55aef6(0x2ab)]('['+RegExp['$1'][_0x55aef6(0x3cf)](/\d+/g)+']');for(const _0x15c9fc of _0x419031){if(!$gameSwitches[_0x55aef6(0x4d3)](_0x15c9fc))return![];}return!![];}else{if(!this[_0x55aef6(0x1bf)]())_0x54a6a8[_0x55aef6(0x1e9)]['playOkSound'][_0x55aef6(0x20e)](this);}}if(_0xec167[_0x55aef6(0x3cf)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0xb805a3=JSON['parse']('['+RegExp['$1'][_0x55aef6(0x3cf)](/\d+/g)+']');for(const _0x432504 of _0xb805a3){if(!$gameSwitches['value'](_0x432504))return![];}return!![];}if(_0xec167['match'](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x5b52ec=JSON[_0x55aef6(0x2ab)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x20e130 of _0x5b52ec){if(_0x55aef6(0x426)===_0x55aef6(0x135))_0x5c86bb[_0x55aef6(0x1d2)]-=this[_0x55aef6(0x4e3)]();else{if($gameSwitches[_0x55aef6(0x4d3)](_0x20e130))return!![];}}return![];}if(_0xec167[_0x55aef6(0x3cf)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4c1bb1=JSON[_0x55aef6(0x2ab)]('['+RegExp['$1'][_0x55aef6(0x3cf)](/\d+/g)+']');for(const _0x3261c0 of _0x4c1bb1){if(!$gameSwitches[_0x55aef6(0x4d3)](_0x3261c0))return!![];}return![];}if(_0xec167[_0x55aef6(0x3cf)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x589818=JSON[_0x55aef6(0x2ab)]('['+RegExp['$1']['match'](/\d+/g)+']');for(const _0x43f2ff of _0x589818){if(_0x55aef6(0x38e)!==_0x55aef6(0x38e))return![];else{if(!$gameSwitches['value'](_0x43f2ff))return!![];}}return![];}if(_0xec167['match'](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2455a6=JSON[_0x55aef6(0x2ab)]('['+RegExp['$1'][_0x55aef6(0x3cf)](/\d+/g)+']');for(const _0x37be9a of _0x2455a6){if($gameSwitches['value'](_0x37be9a))return![];}return!![];}return!![];},Game_BattlerBase[_0x9e78a(0x1e9)][_0x9e78a(0x554)]=function(_0x2102e8){const _0x508948=_0x9e78a,_0x2aed51=_0x2102e8[_0x508948(0x173)],_0x44a478=VisuMZ[_0x508948(0x331)][_0x508948(0x577)];return _0x44a478[_0x2102e8['id']]?_0x44a478[_0x2102e8['id']][_0x508948(0x20e)](this,_0x2102e8):!![];},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x4f3)]=function(_0x26fbc6){const _0x44ea18=_0x9e78a;_0x26fbc6=this[_0x44ea18(0x3ec)](_0x26fbc6);const _0x2ac513=this[_0x44ea18(0x24a)]();this[_0x44ea18(0x27a)]=[];for(let _0x908eac=0x0;_0x908eac<_0x2ac513[_0x44ea18(0x458)];_0x908eac++){if('HpvLM'!==_0x44ea18(0x521))this['_equips'][_0x908eac]=new Game_Item();else{const _0xe497d3=this[_0x44ea18(0x187)];_0xe497d3['drawText'](_0x4ec64f,0x0,_0x37854c['y'],_0xe497d3[_0x44ea18(0x513)],_0x44ea18(0x550));}}for(let _0x2046e3=0x0;_0x2046e3<_0x2ac513[_0x44ea18(0x458)];_0x2046e3++){const _0x4271da=_0x2ac513[_0x2046e3],_0x33768b=this[_0x44ea18(0x3a1)](_0x26fbc6,_0x4271da);if(this[_0x44ea18(0x380)](_0x33768b))this['_equips'][_0x2046e3][_0x44ea18(0x371)](_0x33768b);}this['releaseUnequippableItems'](!![]),this['refresh']();},Game_Actor['prototype'][_0x9e78a(0x3ec)]=function(_0x378055){const _0x3fa93a=_0x9e78a,_0x224115=[];for(let _0x4c43bf=0x0;_0x4c43bf<_0x378055[_0x3fa93a(0x458)];_0x4c43bf++){const _0x57a564=_0x378055[_0x4c43bf];if(_0x57a564<=0x0)continue;const _0x4a55ed=$dataSystem[_0x3fa93a(0x3ff)][_0x4c43bf+0x1];if(_0x4a55ed===$dataSystem[_0x3fa93a(0x3ff)][0x1]||_0x4c43bf===0x1&&this[_0x3fa93a(0x223)]())_0x224115['push']($dataWeapons[_0x57a564]);else{if(BattleManager[_0x3fa93a(0x132)]()){const _0x5d631e=$dataArmors[_0x57a564];_0x5d631e&&_0x5d631e[_0x3fa93a(0x589)]===_0x4c43bf+0x1&&('AuqNK'===_0x3fa93a(0x1c3)?_0x514195[_0x223ffc]=typeof _0xe42f56[_0x295fef]===_0x3fa93a(0x2d0)&&_0xe9321d[_0x55338e]!==null?_0x30f3e0['ItemsEquipsCore']['deepCopy'](_0x338554[_0x168b62]):_0x3acc46[_0x54a563]:_0x224115['push'](_0x5d631e));}else{if(_0x3fa93a(0x5bc)===_0x3fa93a(0x5bc)){const _0x41fd12=$dataArmors[_0x57a564];if(_0x41fd12&&_0x41fd12[_0x3fa93a(0x589)]===_0x4c43bf+0x1){if(_0x3fa93a(0x2ce)===_0x3fa93a(0x2ce))_0x224115[_0x3fa93a(0x51d)](_0x41fd12);else{const _0xa18aae=this[_0x3fa93a(0x3f7)](_0x4adedf),_0x4f5ed0=this[_0x3fa93a(0x50b)](_0x51d814)['width'];return _0x4f5ed0<=_0xa18aae['width']?_0x3fa93a(0x515):_0x3fa93a(0x60a);}}}else return _0x59a6fb[_0x3fa93a(0x331)][_0x3fa93a(0x5b0)][_0x3fa93a(0x399)][_0x3fa93a(0x19b)];}}}return _0x224115;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x3a1)]=function(_0x1cda4a,_0x3e0b25){const _0x5ac747=_0x9e78a;for(const _0x1af39a of _0x1cda4a){if(!_0x1af39a)continue;if(_0x1af39a['etypeId']===_0x3e0b25){if('WdxsF'!==_0x5ac747(0x2f4)){const _0x5d97bc=this[_0x5ac747(0x4fb)]();let _0x5886b0=0x0;_0x2c3abb['VisuMZ_0_CoreEngine']?_0x5886b0=this['_actor']['paramValueByName'](_0x1fc453,!![]):_0x5886b0=this[_0x5ac747(0x49e)][_0x5ac747(0x432)](_0x20f120);const _0x10daee=_0x5886b0;this[_0x5ac747(0x3ce)](_0x5886b0,_0x13ad06,_0x4d757c,_0x3a61df-_0x5d97bc,_0x5ac747(0x5f6));}else return _0x1cda4a[_0x5ac747(0x28b)](_0x1cda4a[_0x5ac747(0x63b)](_0x1af39a),0x1),_0x1af39a;}}return null;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x24a)]=function(){const _0x404815=_0x9e78a,_0x281cdd=VisuMZ[_0x404815(0x331)][_0x404815(0x49c)](this[_0x404815(0x2e6)]||this[_0x404815(0x544)]()[_0x404815(0x24a)]);if(_0x281cdd['length']>=0x2&&this[_0x404815(0x223)]())_0x281cdd[0x1]=0x1;return _0x281cdd;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x17e)]=function(_0x1159a4){const _0x4f3495=_0x9e78a;_0x1159a4['remove'](0x0),_0x1159a4[_0x4f3495(0x46c)](-0x1),this['_forcedSlots']=_0x1159a4,this[_0x4f3495(0x303)](),this['updateChangedSlots']();},Game_Actor['prototype'][_0x9e78a(0x4d6)]=function(){const _0x4b8d62=_0x9e78a;this[_0x4b8d62(0x2e6)]=undefined,this[_0x4b8d62(0x303)](),this[_0x4b8d62(0x637)]();},Game_Actor[_0x9e78a(0x1e9)]['updateChangedSlots']=function(){const _0x48fd72=_0x9e78a;let _0x294fd9=this[_0x48fd72(0x24a)]()[_0x48fd72(0x458)];while(this[_0x48fd72(0x27a)]['length']>_0x294fd9){if(_0x48fd72(0x1ce)===_0x48fd72(0x47a))_0x577bc1[_0x48fd72(0x331)][_0x48fd72(0x498)][_0x48fd72(0x20e)](this),this[_0x48fd72(0x1bf)]()&&(this['_commandWindow'][_0x48fd72(0x564)](0x0),this[_0x48fd72(0x457)]['deactivate']());else{const _0x49ad35=this[_0x48fd72(0x27a)][this[_0x48fd72(0x27a)][_0x48fd72(0x458)]-0x1];_0x49ad35&&_0x49ad35[_0x48fd72(0x2d0)]()&&$gameParty[_0x48fd72(0x60c)](_0x49ad35[_0x48fd72(0x2d0)](),0x1),this['_equips'][_0x48fd72(0x273)]();}}while(_0x294fd9>this[_0x48fd72(0x27a)]['length']){this[_0x48fd72(0x27a)][_0x48fd72(0x51d)](new Game_Item());}},Game_Actor['prototype'][_0x9e78a(0x5b4)]=function(){const _0x44ff42=_0x9e78a,_0x528e26=this['equipSlots']();for(let _0x477dd6=0x0;_0x477dd6<_0x528e26['length'];_0x477dd6++){if(!this['_equips'][_0x477dd6])this['_equips'][_0x477dd6]=new Game_Item();}this[_0x44ff42(0x4dc)](![]),this['refresh']();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5eb)]=Game_Actor['prototype'][_0x9e78a(0x1af)],Game_Actor['prototype'][_0x9e78a(0x1af)]=function(_0x36990a,_0x13b9cc){const _0x280892=_0x9e78a;if(!this[_0x280892(0x362)]){const _0xe1eab6=JsonEx['makeDeepCopy'](this);_0xe1eab6['_tempActor']=!![],this['changeEquipBase'](_0x36990a,_0x13b9cc),this[_0x280892(0x137)](_0xe1eab6);}else{if('MSKiU'!=='MSKiU'){if(this[_0x280892(0x1bf)]())return;_0x202d64[_0x280892(0x1e9)][_0x280892(0x167)][_0x280892(0x20e)](this);}else this[_0x280892(0x2df)](_0x36990a,_0x13b9cc);}},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x2df)]=function(_0x51ed3f,_0x1870d0){const _0x1fb3ba=_0x9e78a;if(!this[_0x1fb3ba(0x591)](_0x1870d0,this[_0x1fb3ba(0x5be)]()[_0x51ed3f]))return;if(_0x1870d0){const _0x219f79=DataManager['getEtypeIDs'](_0x1870d0);if(!_0x219f79[_0x1fb3ba(0x285)](this['equipSlots']()[_0x51ed3f]))return;}this[_0x1fb3ba(0x27a)][_0x51ed3f][_0x1fb3ba(0x371)](_0x1870d0),this[_0x1fb3ba(0x303)]();},VisuMZ[_0x9e78a(0x331)]['Game_Actor_forceChangeEquip']=Game_Actor[_0x9e78a(0x1e9)]['forceChangeEquip'],Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x19f)]=function(_0x58a474,_0xf1d578){const _0x1af114=_0x9e78a;if(!this['_tempActor']){if(_0x1af114(0x26f)!==_0x1af114(0x26f)){if(this[_0x1af114(0x1a7)](_0x389161))return![];if(this[_0x1af114(0x542)](_0x352c60))return![];if(this['isSoleArmorType'](_0x5d48b2))return![];if(!this[_0x1af114(0x49e)][_0x1af114(0x380)](_0x12ed68))return![];}else{const _0xafd004=JsonEx['makeDeepCopy'](this);_0xafd004['_tempActor']=!![],VisuMZ[_0x1af114(0x331)][_0x1af114(0x5c9)][_0x1af114(0x20e)](this,_0x58a474,_0xf1d578),this[_0x1af114(0x137)](_0xafd004);}}else VisuMZ[_0x1af114(0x331)][_0x1af114(0x5c9)][_0x1af114(0x20e)](this,_0x58a474,_0xf1d578);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x232)]=Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x3e8)],Game_Actor[_0x9e78a(0x1e9)]['discardEquip']=function(_0x17fa01){const _0x572c0f=_0x9e78a;if(!this[_0x572c0f(0x362)]){if(_0x572c0f(0x139)===_0x572c0f(0x296)){const _0x286d73=_0x4a73d4['ItemsEquipsCore'][_0x572c0f(0x5b0)]['StatusWindow']['LabelDamageTP'];return _0x286d73['format'](_0x289d16['tp']);}else{const _0x53fbf7=JsonEx[_0x572c0f(0x1a3)](this);_0x53fbf7[_0x572c0f(0x362)]=!![],VisuMZ['ItemsEquipsCore'][_0x572c0f(0x232)]['call'](this,_0x17fa01),this[_0x572c0f(0x137)](_0x53fbf7);}}else VisuMZ['ItemsEquipsCore'][_0x572c0f(0x232)][_0x572c0f(0x20e)](this,_0x17fa01);},Game_Actor[_0x9e78a(0x1e9)]['releaseUnequippableItems']=function(_0x1dae29){const _0x36608f=_0x9e78a;if(this['_bypassReleaseUnequippableItemsItemsEquipsCore'])return;for(;;){if('eGXfX'!=='eGXfX')this[_0x36608f(0x388)](_0xd796d2[_0x36608f(0x3df)]('left'));else{const _0x7a78e1=this[_0x36608f(0x24a)](),_0x2c634e=this['equips'](),_0x372089=_0x2c634e[_0x36608f(0x458)];let _0x221bba=![];for(let _0x357570=0x0;_0x357570<_0x372089;_0x357570++){if(_0x36608f(0x4f6)===_0x36608f(0x4f6)){const _0x3ae8ef=_0x2c634e[_0x357570];if(!_0x3ae8ef)continue;const _0x3591b4=DataManager[_0x36608f(0x4c0)](_0x3ae8ef);if(!this['canEquip'](_0x3ae8ef)||!_0x3591b4[_0x36608f(0x285)](_0x7a78e1[_0x357570])){if(!_0x1dae29){if(_0x36608f(0x41a)!=='ZLhGd')this[_0x36608f(0x591)](null,_0x3ae8ef);else return _0x4f17b5[_0x36608f(0x5ad)][this[_0x36608f(0x262)]['damage'][_0x36608f(0x248)]];}if(!this[_0x36608f(0x362)]){if(_0x36608f(0x383)!=='gFZGf'){const _0x27d569=JsonEx[_0x36608f(0x1a3)](this);_0x27d569['_tempActor']=!![],this['_equips'][_0x357570][_0x36608f(0x371)](null),this[_0x36608f(0x31e)]=!![],this[_0x36608f(0x137)](_0x27d569),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=undefined;}else _0x282273=_0x11537e(_0x4d3cda['$1'])['toLowerCase']()[_0x36608f(0x361)]();}else _0x36608f(0x58b)!=='vSAyt'?(_0x24847d[_0x36608f(0x331)][_0x36608f(0x215)][_0x36608f(0x20e)](this),this[_0x36608f(0x1bf)]()&&this['onCategoryCancel'](),this[_0x36608f(0x1e7)]()&&this[_0x36608f(0x3f1)][_0x36608f(0x151)]()):this[_0x36608f(0x27a)][_0x357570][_0x36608f(0x371)](null);_0x221bba=!![];}}else{const _0x1838ee=_0x14a840[_0x36608f(0x331)][_0x36608f(0x5b0)][_0x36608f(0x444)],_0x77c93f='DamageType%1'['format'](this[_0x36608f(0x262)][_0x36608f(0x3e4)]['type']),_0x325236=[null,_0x2b671b['hp'],_0x477b5e['mp'],_0x52fc79['hp'],_0xf4ae96['mp'],_0x95d9f9['hp'],_0x24f911['mp']][this[_0x36608f(0x262)][_0x36608f(0x3e4)]['type']];return _0x1838ee[_0x77c93f][_0x36608f(0x4a6)](_0x325236);}}if(!_0x221bba)break;}}},Game_Actor['prototype'][_0x9e78a(0x137)]=function(_0x3cb7c8){const _0xa098d5=_0x9e78a;if(this['_tempActor'])return;if(!VisuMZ[_0xa098d5(0x331)]['Settings']['EquipScene']['EquipAdjustHpMp'])return;const _0x598d58=Math[_0xa098d5(0x12f)](_0x3cb7c8[_0xa098d5(0x62b)]()*this[_0xa098d5(0x41b)]),_0x487645=Math[_0xa098d5(0x12f)](_0x3cb7c8['mpRate']()*this[_0xa098d5(0x39c)]);if(this['hp']>0x0)this[_0xa098d5(0x38d)](_0x598d58);if(this['mp']>0x0)this[_0xa098d5(0x63f)](_0x487645);},Game_Actor[_0x9e78a(0x1e9)]['clearEquipments']=function(){const _0x48abaf=_0x9e78a,_0x33f896=this[_0x48abaf(0x24a)]()[_0x48abaf(0x458)];for(let _0x29eae1=0x0;_0x29eae1<_0x33f896;_0x29eae1++){if(_0x48abaf(0x58e)==='ByONv')return this['getItemDamageAmountLabelBattleCore']();else{if(this[_0x48abaf(0x5b3)](_0x29eae1))this[_0x48abaf(0x1af)](_0x29eae1,null);}}},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x5b3)]=function(_0x38217e){const _0x3362fa=_0x9e78a;return this[_0x3362fa(0x5a1)]()['includes'](this['equipSlots']()[_0x38217e])?![]:'LvMUA'===_0x3362fa(0x229)?this[_0x3362fa(0x636)](_0x38217e):_0x45c881[_0x3362fa(0x331)][_0x3362fa(0x5b0)][_0x3362fa(0x4e7)]['MaxItems'];},Game_Actor['prototype'][_0x9e78a(0x5a1)]=function(){const _0x19f2bc=_0x9e78a;return VisuMZ[_0x19f2bc(0x331)]['Settings']['EquipScene']['NonRemoveETypes'];},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x514)]=function(){const _0x2c1dd3=_0x9e78a,_0xfc54f8=this['equipSlots']()['length'];for(let _0x16a78e=0x0;_0x16a78e<_0xfc54f8;_0x16a78e++){if(this['isOptimizeEquipOk'](_0x16a78e))this[_0x2c1dd3(0x1af)](_0x16a78e,null);}for(let _0x1c0237=0x0;_0x1c0237<_0xfc54f8;_0x1c0237++){if(this[_0x2c1dd3(0x24e)](_0x1c0237))this['changeEquip'](_0x1c0237,this[_0x2c1dd3(0x188)](_0x1c0237));}},Game_Actor['prototype']['bestEquipItem']=function(_0x4c5a2f){const _0x46f4a8=_0x9e78a,_0x18e265=this[_0x46f4a8(0x24a)]()[_0x4c5a2f],_0x4eac5d=$gameParty[_0x46f4a8(0x50a)]()[_0x46f4a8(0x218)](_0x3b1d12=>DataManager[_0x46f4a8(0x4c0)](_0x3b1d12)[_0x46f4a8(0x285)](_0x18e265)&&this[_0x46f4a8(0x380)](_0x3b1d12));let _0x575705=null,_0xcd9e8c=-0x3e8;for(let _0x420a32=0x0;_0x420a32<_0x4eac5d[_0x46f4a8(0x458)];_0x420a32++){const _0x5d49f0=this['calcEquipItemPerformance'](_0x4eac5d[_0x420a32]);_0x5d49f0>_0xcd9e8c&&(_0x46f4a8(0x31f)!==_0x46f4a8(0x4f5)?(_0xcd9e8c=_0x5d49f0,_0x575705=_0x4eac5d[_0x420a32]):this[_0x46f4a8(0x1bd)]());}return _0x575705;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x24e)]=function(_0x297021){const _0x2eb883=_0x9e78a;if(this[_0x2eb883(0x5ce)]()['includes'](this[_0x2eb883(0x24a)]()[_0x297021])){if(_0x2eb883(0x271)===_0x2eb883(0x4ad))_0xc7970c[_0x2eb883(0x273)]();else return![];}else{if('zfwCV'==='zfwCV')return this[_0x2eb883(0x636)](_0x297021);else this[_0x2eb883(0x5fe)]();}},Game_Actor[_0x9e78a(0x1e9)]['nonOptimizeEtypes']=function(){const _0x4be275=_0x9e78a;return VisuMZ[_0x4be275(0x331)][_0x4be275(0x5b0)]['EquipScene']['NonOptimizeETypes'];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x4ab)]=Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x591)],Game_Actor['prototype']['tradeItemWithParty']=function(_0x3a0559,_0x49ed06){const _0x3d0fdb=_0x9e78a;if(this[_0x3d0fdb(0x362)])return![];$gameTemp[_0x3d0fdb(0x3a4)]=!![];const _0x2a1674=VisuMZ['ItemsEquipsCore'][_0x3d0fdb(0x4ab)][_0x3d0fdb(0x20e)](this,_0x3a0559,_0x49ed06);return $gameTemp['_bypassNewLabel']=![],_0x2a1674;},Game_Actor['prototype'][_0x9e78a(0x3bc)]=function(_0x18d569,_0x4b68bb){const _0x5e3a0d=_0x9e78a,_0x54e6e9=this[_0x5e3a0d(0x3b5)](_0x18d569);if(_0x54e6e9<0x0)return;const _0x555007=_0x18d569===0x1?$dataWeapons[_0x4b68bb]:$dataArmors[_0x4b68bb];this['changeEquip'](_0x54e6e9,_0x555007);},Game_Actor[_0x9e78a(0x1e9)]['getNextAvailableEtypeId']=function(_0x208ecc){const _0x5921e2=_0x9e78a;let _0x1365d1=0x0;const _0x3fa884=this[_0x5921e2(0x24a)](),_0x4c3e71=this[_0x5921e2(0x5be)]();for(let _0x39582f=0x0;_0x39582f<_0x3fa884['length'];_0x39582f++){if(_0x3fa884[_0x39582f]===_0x208ecc){if(_0x5921e2(0x1e5)!==_0x5921e2(0x169)){_0x1365d1=_0x39582f;if(!_0x4c3e71[_0x39582f])return _0x1365d1;}else{_0x45a2ba[_0x5921e2(0x423)]?(_0x393cf6=this[_0x5921e2(0x49e)]['paramValueByName'](_0x2ba34,![]),_0x358bc6=this['_tempActor'][_0x5921e2(0x4d5)](_0x14e07b,![]),_0x54c458=_0x442007(this[_0x5921e2(0x49e)][_0x5921e2(0x4d5)](_0x14e843,!![]))['match'](/([%％])/i)):(_0x42065a=this[_0x5921e2(0x49e)][_0x5921e2(0x432)](_0x1ba241),_0xd6316=this[_0x5921e2(0x362)][_0x5921e2(0x432)](_0x3a9a1b),_0x59ee6e=_0x5ac7fa%0x1!==0x0||_0x4d4948%0x1!==0x0);const _0x3d0bc1=_0x529cb8,_0x312026=_0x1ab1e9,_0x25f4ad=_0x312026-_0x3d0bc1;let _0x243674=_0x25f4ad;if(_0x39ac9a)_0x243674=_0x5ad4d9['round'](_0x25f4ad*0x64)+'%';_0x25f4ad!==0x0&&(this[_0x5921e2(0x32e)](_0x5e53f9[_0x5921e2(0x235)](_0x25f4ad)),_0x243674=(_0x25f4ad>0x0?'(+%1)':'(%1)')['format'](_0x243674),this[_0x5921e2(0x3ce)](_0x243674,_0x581bb4+_0x497f52,_0x308263,_0x53d1ba,_0x5921e2(0x42d)));}}}return _0x1365d1;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x25e)]=Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x17b)],Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x17b)]=function(_0x5d7d81){const _0x6cf81e=_0x9e78a;let _0x2b6200=VisuMZ['ItemsEquipsCore'][_0x6cf81e(0x25e)][_0x6cf81e(0x20e)](this,_0x5d7d81);for(const _0x13f4f4 of this['equips']()){if(_0x6cf81e(0x1f1)===_0x6cf81e(0x2a7)){if(_0x4e7c13[_0x5e66ac]===_0x370c2d){_0x2fd155=_0x105589;if(!_0x458f5c[_0x4afea7])return _0x61ae08;}}else{if(_0x13f4f4)_0x2b6200+=this[_0x6cf81e(0x1a6)](_0x13f4f4,_0x5d7d81);}}return _0x2b6200;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x1a6)]=function(_0x4d1bc6,_0x1e0c9c){const _0xbebeb9=_0x9e78a;if(this[_0xbebeb9(0x473)])return 0x0;const _0x592a8f=(DataManager['isWeapon'](_0x4d1bc6)?_0xbebeb9(0x157):_0xbebeb9(0x34c))[_0xbebeb9(0x4a6)](_0x4d1bc6['id']),_0x1e0e7e=_0xbebeb9(0x13a)[_0xbebeb9(0x4a6)](_0x592a8f,_0x1e0c9c);if(VisuMZ['ItemsEquipsCore']['paramJS'][_0x1e0e7e]){this['_calculatingJSParameters']=!![];const _0x298fd0=VisuMZ[_0xbebeb9(0x331)][_0xbebeb9(0x279)][_0x1e0e7e][_0xbebeb9(0x20e)](this,_0x4d1bc6,_0x1e0c9c);return this[_0xbebeb9(0x473)]=![],_0x298fd0;}else return 0x0;},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x44f)]=function(_0x1e5e1a){const _0x90eb04=_0x9e78a;this[_0x90eb04(0x177)]=!![],this[_0x90eb04(0x31b)]=_0x1e5e1a;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x439)]=Game_Party['prototype'][_0x9e78a(0x3d0)],Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)]=function(){const _0x58a16e=_0x9e78a;VisuMZ[_0x58a16e(0x331)][_0x58a16e(0x439)][_0x58a16e(0x20e)](this),this[_0x58a16e(0x3f6)](),this[_0x58a16e(0x5fe)]();},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x3f6)]=function(){this['_newItemsList']=[];},Game_Party['prototype']['isNewItem']=function(_0x31d2d4){const _0x3767f1=_0x9e78a;if(!$gameTemp[_0x3767f1(0x32a)]())return![];if(this['_newItemsList']===undefined)this[_0x3767f1(0x3f6)]();let _0x322827='';if(DataManager[_0x3767f1(0x4d8)](_0x31d2d4))_0x322827=_0x3767f1(0x1d8)[_0x3767f1(0x4a6)](_0x31d2d4['id']);else{if(DataManager[_0x3767f1(0x613)](_0x31d2d4)){if(_0x3767f1(0x1f6)===_0x3767f1(0x57c)){_0x12ae06+=0x1;if(_0x278812[_0x3767f1(0x173)][_0x3767f1(0x3cf)](_0x37a084)){const _0x471bb4=_0x1ab17e(_0x2bb369['$1'])||0x1;if(_0x330a16>=_0x471bb4)return!![];}if(_0x285a55[_0x3767f1(0x173)][_0x3767f1(0x3cf)](_0x2b33ca)){const _0x45ef19=_0x4dbead(_0x246ab5['$1'])||0x1;if(_0x22f8f8>=_0x45ef19)return!![];}}else _0x322827=_0x3767f1(0x517)[_0x3767f1(0x4a6)](_0x31d2d4['id']);}else{if(DataManager[_0x3767f1(0x525)](_0x31d2d4))_0x322827=_0x3767f1(0x499)['format'](_0x31d2d4['id']);else{if('cmIzD'!==_0x3767f1(0x5fd))return;else{const _0xbe3766=0x0,_0x1d3748=this[_0x3767f1(0x3b1)](),_0x3d9d0b=_0x39a5c6[_0x3767f1(0x27d)],_0x4be37b=this[_0x3767f1(0x359)]();return new _0x2933d(_0xbe3766,_0x1d3748,_0x3d9d0b,_0x4be37b);}}}}return this[_0x3767f1(0x4fe)][_0x3767f1(0x285)](_0x322827);},Game_Party['prototype'][_0x9e78a(0x63a)]=function(_0x830fb4){const _0x3a2815=_0x9e78a;if(!$gameTemp[_0x3a2815(0x32a)]())return;if(this[_0x3a2815(0x4fe)]===undefined)this['initNewItemsList']();let _0x8e26f1='';if(DataManager['isItem'](_0x830fb4))_0x8e26f1=_0x3a2815(0x1d8)[_0x3a2815(0x4a6)](_0x830fb4['id']);else{if(DataManager[_0x3a2815(0x613)](_0x830fb4))_0x8e26f1=_0x3a2815(0x517)['format'](_0x830fb4['id']);else{if(DataManager[_0x3a2815(0x525)](_0x830fb4))_0x8e26f1=_0x3a2815(0x499)['format'](_0x830fb4['id']);else return;}}if(!this[_0x3a2815(0x4fe)][_0x3a2815(0x285)](_0x8e26f1))this[_0x3a2815(0x4fe)]['push'](_0x8e26f1);},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x490)]=function(_0x5ec872){const _0x5332d6=_0x9e78a;if(!$gameTemp[_0x5332d6(0x32a)]())return;if(this[_0x5332d6(0x4fe)]===undefined)this['initNewItemsList']();let _0x30f13a='';if(DataManager[_0x5332d6(0x4d8)](_0x5ec872)){if(_0x5332d6(0x555)!==_0x5332d6(0x5ff))_0x30f13a='item-%1'[_0x5332d6(0x4a6)](_0x5ec872['id']);else return _0x5aed7e;}else{if(DataManager[_0x5332d6(0x613)](_0x5ec872)){if('SFjxt'===_0x5332d6(0x23a))_0x30f13a=_0x5332d6(0x517)[_0x5332d6(0x4a6)](_0x5ec872['id']);else return![];}else{if(DataManager['isArmor'](_0x5ec872))_0x30f13a=_0x5332d6(0x499)['format'](_0x5ec872['id']);else return;}}this[_0x5332d6(0x4fe)][_0x5332d6(0x285)](_0x30f13a)&&this[_0x5332d6(0x4fe)]['splice'](this[_0x5332d6(0x4fe)][_0x5332d6(0x63b)](_0x30f13a),0x1);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x62f)]=Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x1ad)],Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x1ad)]=function(_0x4e6e48){const _0x4fad9d=_0x9e78a;if(DataManager[_0x4fad9d(0x1e0)](_0x4e6e48))_0x4e6e48=DataManager[_0x4fad9d(0x5bb)](_0x4e6e48);return VisuMZ[_0x4fad9d(0x331)][_0x4fad9d(0x62f)][_0x4fad9d(0x20e)](this,_0x4e6e48);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x559)]=Game_Party['prototype'][_0x9e78a(0x60c)],Game_Party['prototype'][_0x9e78a(0x60c)]=function(_0x26a679,_0x441787,_0x2db369){const _0x2fbcdc=_0x9e78a;if(DataManager['isProxyItem'](_0x26a679))_0x26a679=null;const _0xecbb71=this['numItems'](_0x26a679);VisuMZ['ItemsEquipsCore']['Game_Party_gainItem'][_0x2fbcdc(0x20e)](this,_0x26a679,_0x441787,_0x2db369);if(this[_0x2fbcdc(0x1ad)](_0x26a679)>_0xecbb71)this[_0x2fbcdc(0x63a)](_0x26a679);},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x242)]=function(_0x37f646){const _0x32e505=_0x9e78a;if(DataManager[_0x32e505(0x1e0)](_0x37f646))_0x37f646=DataManager[_0x32e505(0x5bb)](_0x37f646);return DataManager[_0x32e505(0x364)](_0x37f646);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x39f)]=Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x398)],Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x398)]=function(_0xe16a1a){const _0x397c79=_0x9e78a;if(_0xe16a1a){const _0x3c2f06=_0xe16a1a[_0x397c79(0x173)]||'';if(_0x3c2f06[_0x397c79(0x3cf)](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x30cce6=Number(RegExp['$1'])*0.01;if(Math[_0x397c79(0x199)]()<_0x30cce6)return;}}VisuMZ['ItemsEquipsCore']['Game_Party_consumeItem'][_0x397c79(0x20e)](this,_0xe16a1a);},Game_Party[_0x9e78a(0x1e9)]['initShopTrackingData']=function(){this['_shopTrackingData']={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party[_0x9e78a(0x1e9)]['getShopTrackingData']=function(){const _0x4d243b=_0x9e78a;return this[_0x4d243b(0x445)]===undefined&&('EgkcV'!==_0x4d243b(0x23d)?this[_0x4d243b(0x5fe)]():this[_0x4d243b(0x3eb)][_0x4d243b(0x3c1)]()),this['_shopTrackingData'];},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x386)]=function(_0xd0328d,_0x253b4c){const _0x186258=_0x9e78a;if(!_0x253b4c)return 0x0;this[_0x186258(0x445)]===undefined&&this[_0x186258(0x5fe)]();const _0xd104da=this[_0x186258(0x328)]();if(!_0xd104da[_0xd0328d])return 0x0;if(_0x253b4c==='gold')return _0xd104da[_0xd0328d]['gold']=_0xd104da[_0xd0328d]['gold']||0x0,_0xd104da[_0xd0328d]['gold'];else{if(DataManager[_0x186258(0x4d8)](_0x253b4c)){if('KjozD'!==_0x186258(0x316)){const _0x9db21f=_0x5c7776+(this['lineHeight']()-_0x571320['iconHeight'])/0x2,_0x3ac961=_0x32419b[_0x186258(0x2fb)]+0x4,_0x5d67da=_0x10e2f2['max'](0x0,_0x26da73-_0x3ac961);this[_0x186258(0x32e)](_0x51c7ee[_0x186258(0x5ae)](_0x1a9f84)),this[_0x186258(0x1be)](_0x4854fc[_0x186258(0x425)],_0x201cee,_0x9db21f),this[_0x186258(0x3ce)](_0x377735[_0x186258(0x3a7)],_0x121ea3+_0x3ac961,_0x38cdd1,_0x5d67da),this[_0x186258(0x404)]();}else key=_0x186258(0x1d8)[_0x186258(0x4a6)](_0x253b4c['id']);}else{if(DataManager['isWeapon'](_0x253b4c))_0x186258(0x309)===_0x186258(0x54a)?_0x131f81+=_0x2b4b32(_0x298098['$1']):key='weapon-%1'[_0x186258(0x4a6)](_0x253b4c['id']);else{if(DataManager[_0x186258(0x525)](_0x253b4c))key=_0x186258(0x499)[_0x186258(0x4a6)](_0x253b4c['id']);else return 0x0;}}}return _0xd104da[_0xd0328d][_0x186258(0x233)][key]=_0xd104da[_0xd0328d]['items'][key]||0x0,_0xd104da[_0xd0328d][_0x186258(0x233)][key];},Game_Party['prototype'][_0x9e78a(0x5da)]=function(_0xec037e){const _0x20e99e=_0x9e78a;return this[_0x20e99e(0x386)](_0x20e99e(0x3ba),_0xec037e);},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x5e0)]=function(_0x54d067){const _0x42d8e3=_0x9e78a;return this[_0x42d8e3(0x386)]('sell',_0x54d067);},Game_Party[_0x9e78a(0x1e9)]['getShopTrackingGoldBuy']=function(){const _0x2acf35=_0x9e78a;return this['getShopTrackingItem']('buy',_0x2acf35(0x391));},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x300)]=function(){const _0x31d8d0=_0x9e78a;return this[_0x31d8d0(0x386)]('sell',_0x31d8d0(0x391));},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x602)]=function(_0x224fc5,_0x7e7cf0,_0x1de16b){const _0x185188=_0x9e78a;if(!_0x7e7cf0)return;if(_0x1de16b<=0x0)return;this[_0x185188(0x445)]===undefined&&this[_0x185188(0x5fe)]();const _0x4bd6b8=this[_0x185188(0x328)]();if(!_0x4bd6b8[_0x224fc5])return;if(_0x7e7cf0===_0x185188(0x391)){_0x4bd6b8[_0x224fc5][_0x185188(0x391)]=_0x4bd6b8[_0x224fc5]['gold']||0x0,_0x4bd6b8[_0x224fc5][_0x185188(0x391)]+=_0x1de16b;return;}else{if(DataManager[_0x185188(0x4d8)](_0x7e7cf0))key='item-%1'[_0x185188(0x4a6)](_0x7e7cf0['id']);else{if(DataManager[_0x185188(0x613)](_0x7e7cf0))key=_0x185188(0x517)['format'](_0x7e7cf0['id']);else{if(DataManager[_0x185188(0x525)](_0x7e7cf0))key=_0x185188(0x499)['format'](_0x7e7cf0['id']);else return;}}}_0x4bd6b8[_0x224fc5][_0x185188(0x233)][key]=_0x4bd6b8[_0x224fc5]['items'][key]||0x0,_0x4bd6b8[_0x224fc5]['items'][key]+=_0x1de16b;},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x462)]=function(_0x3caf76,_0x5df0ab){const _0x3bdbb7=_0x9e78a;this[_0x3bdbb7(0x602)]('buy',_0x3caf76,_0x5df0ab);},Game_Party['prototype'][_0x9e78a(0x194)]=function(_0x15b2b4,_0x34eb57){const _0x5aa7b2=_0x9e78a;this[_0x5aa7b2(0x602)](_0x5aa7b2(0x415),_0x15b2b4,_0x34eb57);},Game_Party[_0x9e78a(0x1e9)][_0x9e78a(0x4c8)]=function(_0x1170bf){const _0x5af95a=_0x9e78a;this[_0x5af95a(0x602)]('buy',_0x5af95a(0x391),_0x1170bf);},Game_Party['prototype'][_0x9e78a(0x14b)]=function(_0x1a1997){const _0x11fa78=_0x9e78a;this[_0x11fa78(0x602)](_0x11fa78(0x415),_0x11fa78(0x391),_0x1a1997);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1c0)]=Scene_ItemBase[_0x9e78a(0x1e9)]['activateItemWindow'],Scene_ItemBase[_0x9e78a(0x1e9)][_0x9e78a(0x13c)]=function(){const _0x380fb8=_0x9e78a;VisuMZ[_0x380fb8(0x331)]['Scene_ItemBase_activateItemWindow'][_0x380fb8(0x20e)](this),this[_0x380fb8(0x644)][_0x380fb8(0x54f)]();},Scene_Item[_0x9e78a(0x1e9)]['isBottomHelpMode']=function(){const _0x39cc10=_0x9e78a;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x39cc10(0x258)]!==undefined)return ConfigManager[_0x39cc10(0x258)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x39cc10(0x3fe)===_0x39cc10(0x551)){const _0x2bc143=_0x34c0a4(_0x4ab754['$1'])||0x1;if(_0x22d683>=_0x2bc143)return!![];}else return this[_0x39cc10(0x52b)]()[_0x39cc10(0x3cf)](/LOWER/i);}else return Scene_ItemBase[_0x39cc10(0x1e9)]['isBottomHelpMode'][_0x39cc10(0x20e)](this);}},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x138)]=function(){const _0x41682a=_0x9e78a;if(ConfigManager[_0x41682a(0x63d)]&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0x41682a(0x347)];else{if(this[_0x41682a(0x1e7)]()){if(_0x41682a(0x2b8)==='KXXFo')return this[_0x41682a(0x52b)]()['match'](/RIGHT/i);else{const _0xa6018f=_0x41682a(0x333);if(this['_itemData'][_0x41682a(0x646)]===0x0&&!this['_customItemInfo'][_0xa6018f])return![];const _0x36c82c=this[_0x41682a(0x356)]();this[_0x41682a(0x61a)](_0x36c82c,_0x53786d,_0x4d1c28,_0x447771,!![]);const _0xeb504f=this[_0x41682a(0x377)]();return this[_0x41682a(0x3cb)][_0x41682a(0x646)]>0x0?this[_0x41682a(0x32e)](_0x529b4c['powerUpColor']()):this[_0x41682a(0x32e)](_0x486dcf['powerDownColor']()),this[_0x41682a(0x61a)](_0xeb504f,_0x173144,_0x59b135,_0x531920,![],_0x41682a(0x5f6)),this[_0x41682a(0x2f7)](_0x5e2ca6,_0x3dddb2,_0x43824c),this[_0x41682a(0x293)](),!![];}}else return Scene_ItemBase[_0x41682a(0x1e9)][_0x41682a(0x138)][_0x41682a(0x20e)](this);}},Scene_Item['prototype'][_0x9e78a(0x52b)]=function(){const _0x22b603=_0x9e78a;return VisuMZ[_0x22b603(0x331)]['Settings'][_0x22b603(0x4e7)][_0x22b603(0x48a)];},Scene_Item[_0x9e78a(0x1e9)]['isUseModernControls']=function(){const _0x1aa408=_0x9e78a;return this[_0x1aa408(0x3eb)]&&this['_categoryWindow'][_0x1aa408(0x1bf)]();},Scene_Item['prototype'][_0x9e78a(0x1e7)]=function(){const _0x23947=_0x9e78a;return VisuMZ[_0x23947(0x331)][_0x23947(0x5b0)][_0x23947(0x4e7)][_0x23947(0x19b)];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x403)]=Scene_Item[_0x9e78a(0x1e9)]['create'],Scene_Item['prototype'][_0x9e78a(0x492)]=function(){const _0x50ac0a=_0x9e78a;VisuMZ[_0x50ac0a(0x331)][_0x50ac0a(0x403)]['call'](this);if(this[_0x50ac0a(0x1bf)]()){if(_0x50ac0a(0x565)==='fkRTq')this[_0x50ac0a(0x52a)]();else return _0x123d4f[_0x50ac0a(0x5d1)][_0x50ac0a(0x1e7)]()?0x1:0x2;}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x28a)]=Scene_Item[_0x9e78a(0x1e9)]['helpWindowRect'],Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x5f9)]=function(){const _0x128367=_0x9e78a;if(this[_0x128367(0x1e7)]())return this[_0x128367(0x38f)]();else{if('jLfTG'!==_0x128367(0x5c4))return VisuMZ[_0x128367(0x331)][_0x128367(0x28a)][_0x128367(0x20e)](this);else{const _0x47bc04=_0x3ef00e['CannotEquipMarker'];this[_0x128367(0x3ce)](_0x47bc04,_0x414954,_0x91ef38,_0x4fec9e,_0x128367(0x550));}}},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x38f)]=function(){const _0x83909a=_0x9e78a,_0x38f146=0x0,_0x1d4f94=this[_0x83909a(0x3b1)](),_0x307bd0=Graphics[_0x83909a(0x27d)],_0x14a13c=this['helpAreaHeight']();return new Rectangle(_0x38f146,_0x1d4f94,_0x307bd0,_0x14a13c);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x622)]=Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x604)],Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x604)]=function(){const _0x41da39=_0x9e78a;VisuMZ[_0x41da39(0x331)][_0x41da39(0x622)][_0x41da39(0x20e)](this);if(this[_0x41da39(0x1bf)]()){if('bWieS'===_0x41da39(0x512)){let _0x269083=this[_0x41da39(0x3af)]();const _0x4344a9=this[_0x41da39(0x262)];return _0x269083=_0xf5aea7[_0x41da39(0x331)][_0x41da39(0x5b0)][_0x41da39(0x1ab)]['SellPriceJS'][_0x41da39(0x20e)](this,_0x4344a9,_0x269083),_0x269083;}else this[_0x41da39(0x470)]();}},Scene_Item['prototype'][_0x9e78a(0x470)]=function(){const _0xd69fb3=_0x9e78a;delete this['_categoryWindow'][_0xd69fb3(0x274)]['ok'],delete this[_0xd69fb3(0x3eb)][_0xd69fb3(0x274)]['cancel'];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x162)]=Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x5f4)],Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x5f4)]=function(){const _0x476222=_0x9e78a;return this[_0x476222(0x1e7)]()?this[_0x476222(0x410)]():VisuMZ[_0x476222(0x331)]['Scene_Item_categoryWindowRect'][_0x476222(0x20e)](this);},Scene_Item[_0x9e78a(0x1e9)]['categoryWindowRectItemsEquipsCore']=function(){const _0x3ec7df=_0x9e78a,_0x2334ff=0x0,_0x360997=this['mainAreaTop'](),_0xa83621=Graphics['boxWidth'],_0x4573be=this[_0x3ec7df(0x16d)](0x1,!![]);return new Rectangle(_0x2334ff,_0x360997,_0xa83621,_0x4573be);},VisuMZ[_0x9e78a(0x331)]['Scene_Item_createItemWindow']=Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x373)],Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x373)]=function(){const _0x10cf11=_0x9e78a;VisuMZ[_0x10cf11(0x331)]['Scene_Item_createItemWindow'][_0x10cf11(0x20e)](this),this[_0x10cf11(0x1bf)]()&&this['postCreateItemWindowModernControls'](),this['allowCreateStatusWindow']()&&this['createStatusWindow']();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x527)]=Scene_Item['prototype'][_0x9e78a(0x595)],Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x595)]=function(){const _0x1d6d72=_0x9e78a;if(this[_0x1d6d72(0x1e7)]()){if(_0x1d6d72(0x372)===_0x1d6d72(0x261))_0x476960=_0x1d6d72(0x1d8)[_0x1d6d72(0x4a6)](_0x9df754['id']);else return this[_0x1d6d72(0x390)]();}else{if('JdAnz'===_0x1d6d72(0x408)){const _0x2d7179=VisuMZ[_0x1d6d72(0x331)][_0x1d6d72(0x527)][_0x1d6d72(0x20e)](this);if(this['allowCreateStatusWindow']()&&this[_0x1d6d72(0x269)]()){if(_0x1d6d72(0x5fc)===_0x1d6d72(0x37d))return _0x44388a[_0x1d6d72(0x331)][_0x1d6d72(0x2a6)][_0x1d6d72(0x20e)](this,_0x24071e);else _0x2d7179['width']-=this[_0x1d6d72(0x4e3)]();}return _0x2d7179;}else _0x4c9e62[_0x1d6d72(0x331)]['Game_Actor_discardEquip'][_0x1d6d72(0x20e)](this,_0x443cef);}},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x390)]=function(){const _0x1ef931=_0x9e78a,_0x19ad26=this[_0x1ef931(0x138)]()?this['statusWidth']():0x0,_0x54e771=this[_0x1ef931(0x3eb)]['y']+this[_0x1ef931(0x3eb)][_0x1ef931(0x568)],_0x322d3d=Graphics['boxWidth']-this[_0x1ef931(0x4e3)](),_0x558185=this[_0x1ef931(0x397)]()-_0x54e771;return new Rectangle(_0x19ad26,_0x54e771,_0x322d3d,_0x558185);},Scene_Item['prototype']['postCreateItemWindowModernControls']=function(){const _0x3a9ea7=_0x9e78a;this[_0x3a9ea7(0x644)][_0x3a9ea7(0x1c6)](_0x3a9ea7(0x1a8),this['popScene']['bind'](this));},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x497)]=function(){const _0x2c89ee=_0x9e78a;return this['isUseItemsEquipsCoreUpdatedLayout']()?!![]:VisuMZ[_0x2c89ee(0x331)]['Settings'][_0x2c89ee(0x4e7)][_0x2c89ee(0x57f)];},Scene_Item['prototype'][_0x9e78a(0x269)]=function(){const _0x337936=_0x9e78a;return VisuMZ[_0x337936(0x331)]['Settings'][_0x337936(0x4e7)]['ItemSceneAdjustItemList'];},Scene_Item['prototype'][_0x9e78a(0x178)]=function(){const _0x39e77c=_0x9e78a,_0x5b8862=this['statusWindowRect']();this[_0x39e77c(0x4d4)]=new Window_ShopStatus(_0x5b8862),this[_0x39e77c(0x5ab)](this[_0x39e77c(0x4d4)]),this[_0x39e77c(0x644)]['setStatusWindow'](this[_0x39e77c(0x4d4)]);const _0x5f1c82=VisuMZ['ItemsEquipsCore'][_0x39e77c(0x5b0)][_0x39e77c(0x4e7)]['ItemMenuStatusBgType'];this[_0x39e77c(0x4d4)][_0x39e77c(0x163)](_0x5f1c82||0x0);},Scene_Item['prototype']['statusWindowRect']=function(){const _0x357ba4=_0x9e78a;return this[_0x357ba4(0x1e7)]()?this[_0x357ba4(0x368)]():VisuMZ[_0x357ba4(0x331)][_0x357ba4(0x5b0)]['ItemScene'][_0x357ba4(0x560)]['call'](this);},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x368)]=function(){const _0x4a696a=_0x9e78a,_0x4f1075=this[_0x4a696a(0x4e3)](),_0x1e9ca9=this['_itemWindow'][_0x4a696a(0x568)],_0x54835c=this['isRightInputMode']()?0x0:Graphics[_0x4a696a(0x27d)]-this[_0x4a696a(0x4e3)](),_0x112b63=this[_0x4a696a(0x644)]['y'];return new Rectangle(_0x54835c,_0x112b63,_0x4f1075,_0x1e9ca9);},Scene_Item['prototype'][_0x9e78a(0x4e3)]=function(){const _0x8a56e9=_0x9e78a;return Scene_Shop[_0x8a56e9(0x1e9)]['statusWidth']();},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x3d2)]=function(){const _0x301e28=_0x9e78a;if(!this[_0x301e28(0x52b)]())return![];if(!this[_0x301e28(0x1bf)]())return![];if(!this[_0x301e28(0x644)])return![];if(!this[_0x301e28(0x644)][_0x301e28(0x30b)])return![];return this[_0x301e28(0x52b)]()&&this['isUseModernControls']();},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x40f)]=function(){const _0x48491f=_0x9e78a;if(this['buttonAssistItemListRequirement']())return _0x48491f(0x148)===_0x48491f(0x295)?0x0:this[_0x48491f(0x644)]['maxCols']()===0x1?TextManager['getInputMultiButtonStrings']('left',_0x48491f(0x5f6)):TextManager[_0x48491f(0x2bc)](_0x48491f(0x5d2),_0x48491f(0x160));return Scene_ItemBase[_0x48491f(0x1e9)][_0x48491f(0x40f)][_0x48491f(0x20e)](this);},Scene_Item[_0x9e78a(0x1e9)][_0x9e78a(0x1f3)]=function(){const _0xda9ed5=_0x9e78a;if(this[_0xda9ed5(0x3d2)]())return VisuMZ[_0xda9ed5(0x331)][_0xda9ed5(0x5b0)][_0xda9ed5(0x4e7)][_0xda9ed5(0x616)];return Scene_ItemBase[_0xda9ed5(0x1e9)][_0xda9ed5(0x1f3)]['call'](this);},Scene_Equip['prototype'][_0x9e78a(0x2bb)]=function(){const _0xbbc8a7=_0x9e78a;if(ConfigManager[_0xbbc8a7(0x63d)]&&ConfigManager['uiHelpPosition']!==undefined)return ConfigManager[_0xbbc8a7(0x258)];else{if(this[_0xbbc8a7(0x1e7)]()){if(_0xbbc8a7(0x522)!=='PbYfo'){_0x49d156=_0x3af625||'',_0x248816=_0x689095||'left',this[_0xbbc8a7(0x1ff)]=this[_0xbbc8a7(0x1a2)](),this[_0xbbc8a7(0x419)]=_0x5eaf72?_0x5ed67e['systemColor']():this['contents']['textColor'],_0x3507e9+=this[_0xbbc8a7(0x4fb)](),_0x1191aa-=this['itemPadding']()*0x2;const _0x4b742c=this[_0xbbc8a7(0x50b)](_0x183440);if(_0x46ee45===_0xbbc8a7(0x550))_0x41e444=_0x33661b+_0x59de7e[_0xbbc8a7(0x207)]((_0x62d428-_0x4b742c[_0xbbc8a7(0x1d2)])/0x2);else _0x10b9e6===_0xbbc8a7(0x5f6)&&(_0x388ae9=_0x4839ae+_0x383066-_0x4b742c[_0xbbc8a7(0x1d2)]);_0x574d3a+=(this[_0xbbc8a7(0x1ee)]()-_0x4b742c['height'])/0x2,this[_0xbbc8a7(0x42c)](_0x32ab87,_0x53c9c4,_0x5c1754,_0x5adc54),this[_0xbbc8a7(0x1ff)]=_0x1d7aee,this[_0xbbc8a7(0x419)]=_0x146522,this['resetFontSettings']();}else return this[_0xbbc8a7(0x52b)]()[_0xbbc8a7(0x3cf)](/LOWER/i);}else Scene_MenuBase['prototype'][_0xbbc8a7(0x138)]['call'](this);}},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x138)]=function(){const _0x4c61a9=_0x9e78a;if(ConfigManager[_0x4c61a9(0x63d)]&&ConfigManager[_0x4c61a9(0x347)]!==undefined)return ConfigManager[_0x4c61a9(0x347)];else{if(this[_0x4c61a9(0x1e7)]())return'WcDzB'!=='onfbC'?this[_0x4c61a9(0x52b)]()[_0x4c61a9(0x3cf)](/RIGHT/i):_0x4e587b[_0x4c61a9(0x331)][_0x4c61a9(0x5b0)][_0x4c61a9(0x444)][_0x4c61a9(0x3a2)];else Scene_MenuBase[_0x4c61a9(0x1e9)]['isRightInputMode']['call'](this);}},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x52b)]=function(){const _0x47f41c=_0x9e78a;return VisuMZ[_0x47f41c(0x331)][_0x47f41c(0x5b0)][_0x47f41c(0x399)]['LayoutStyle'];},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x1bf)]=function(){const _0x3cf520=_0x9e78a;return this[_0x3cf520(0x57b)]&&this[_0x3cf520(0x57b)]['isUseModernControls']();},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x1e7)]=function(){const _0x5ca71b=_0x9e78a;return VisuMZ[_0x5ca71b(0x331)]['Settings'][_0x5ca71b(0x399)]['EnableLayout'];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x335)]=Scene_Equip[_0x9e78a(0x1e9)]['create'],Scene_Equip['prototype'][_0x9e78a(0x492)]=function(){const _0x32f1cc=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x32f1cc(0x335)][_0x32f1cc(0x20e)](this);if(this[_0x32f1cc(0x1bf)]()){if(_0x32f1cc(0x198)===_0x32f1cc(0x198))this[_0x32f1cc(0x5e3)]();else return _0x3df1dc[_0x32f1cc(0x28b)](_0x1cefab[_0x32f1cc(0x63b)](_0x1d6ead),0x1),_0x4384d0;}},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x184)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x5f9)],Scene_Equip['prototype'][_0x9e78a(0x5f9)]=function(){const _0x99e6ef=_0x9e78a;return this[_0x99e6ef(0x1e7)]()?this[_0x99e6ef(0x38f)]():VisuMZ[_0x99e6ef(0x331)][_0x99e6ef(0x184)][_0x99e6ef(0x20e)](this);},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x38f)]=function(){const _0x1f6565=_0x9e78a,_0x9c1775=0x0,_0x1283d1=this[_0x1f6565(0x3b1)](),_0x1d8d65=Graphics['boxWidth'],_0x2e8cee=this[_0x1f6565(0x359)]();return new Rectangle(_0x9c1775,_0x1283d1,_0x1d8d65,_0x2e8cee);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x531)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x35d)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x35d)]=function(){const _0x279817=_0x9e78a;return this[_0x279817(0x1e7)]()?this[_0x279817(0x368)]():VisuMZ[_0x279817(0x331)][_0x279817(0x531)][_0x279817(0x20e)](this);},Scene_Equip['prototype']['statusWindowRectItemsEquipsCore']=function(){const _0x511feb=_0x9e78a,_0x40201e=this[_0x511feb(0x138)]()?0x0:Graphics[_0x511feb(0x27d)]-this[_0x511feb(0x4e3)](),_0x3b9bec=this['mainAreaTop'](),_0x126941=this[_0x511feb(0x4e3)](),_0x37457a=this[_0x511feb(0x283)]();return new Rectangle(_0x40201e,_0x3b9bec,_0x126941,_0x37457a);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x13f)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x62d)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x62d)]=function(){const _0x331507=_0x9e78a;VisuMZ[_0x331507(0x331)]['Scene_Equip_createCommandWindow'][_0x331507(0x20e)](this);if(this['_helpWindow'])this[_0x331507(0x57b)]['setHelpWindow'](this['_helpWindow']);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x5f1)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x619)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x619)]=function(){const _0xcc436d=_0x9e78a;return this[_0xcc436d(0x1e7)]()?this[_0xcc436d(0x5e2)]():VisuMZ[_0xcc436d(0x331)][_0xcc436d(0x5f1)]['call'](this);},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x573)]=function(){const _0x445bbb=_0x9e78a,_0x58e4c3=VisuMZ[_0x445bbb(0x331)]['Settings'][_0x445bbb(0x399)];return _0x58e4c3['CommandAddOptimize']||_0x58e4c3['CommandAddClear'];},Scene_Equip['prototype'][_0x9e78a(0x5e2)]=function(){const _0x4f3f56=_0x9e78a,_0x33f37=this['shouldCommandWindowExist'](),_0x1ea972=this['isRightInputMode']()?this['statusWidth']():0x0,_0x4116a4=this[_0x4f3f56(0x3d1)](),_0x3d1385=Graphics[_0x4f3f56(0x27d)]-this[_0x4f3f56(0x4e3)](),_0x42fc66=_0x33f37?this[_0x4f3f56(0x16d)](0x1,!![]):0x0;return new Rectangle(_0x1ea972,_0x4116a4,_0x3d1385,_0x42fc66);},VisuMZ[_0x9e78a(0x331)]['Scene_Equip_createSlotWindow']=Scene_Equip[_0x9e78a(0x1e9)]['createSlotWindow'],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x3a0)]=function(){const _0xaddff8=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0xaddff8(0x64c)]['call'](this),this[_0xaddff8(0x1bf)]()&&('ImRIU'===_0xaddff8(0x643)?this[_0xaddff8(0x57a)]():(this[_0xaddff8(0x3cb)][_0xaddff8(0x646)]=this[_0xaddff8(0x262)][_0xaddff8(0x1de)],_0x401561=!![]));},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x3e5)]=Scene_Equip['prototype'][_0x9e78a(0x352)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x352)]=function(){const _0x25182f=_0x9e78a;if(this[_0x25182f(0x1e7)]())return this[_0x25182f(0x319)]();else{if(_0x25182f(0x4c1)===_0x25182f(0x4c1))return VisuMZ[_0x25182f(0x331)][_0x25182f(0x3e5)][_0x25182f(0x20e)](this);else this[_0x25182f(0x14c)]();}},Scene_Equip['prototype']['slotWindowRectItemsEquipsCore']=function(){const _0x4cd96c=_0x9e78a,_0x50fef0=this[_0x4cd96c(0x619)](),_0x2b6b5b=this[_0x4cd96c(0x138)]()?this[_0x4cd96c(0x4e3)]():0x0,_0x5dfae9=_0x50fef0['y']+_0x50fef0[_0x4cd96c(0x568)],_0x92c423=Graphics['boxWidth']-this[_0x4cd96c(0x4e3)](),_0x10a49f=this[_0x4cd96c(0x283)]()-_0x50fef0[_0x4cd96c(0x568)];return new Rectangle(_0x2b6b5b,_0x5dfae9,_0x92c423,_0x10a49f);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x558)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x595)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x595)]=function(){const _0x47d777=_0x9e78a;return this[_0x47d777(0x1e7)]()?_0x47d777(0x136)===_0x47d777(0x461)?(_0x30e8aa[_0x47d777(0x58d)]()&&(_0x531e77['log'](_0x47d777(0x534)['format'](this['_item'][_0x47d777(0x3a7)])),_0x5626f8[_0x47d777(0x53b)](_0x54c0d7)),this[_0x47d777(0x472)](),_0x47d777(0x290)):this[_0x47d777(0x352)]():_0x47d777(0x1cb)===_0x47d777(0x1cb)?VisuMZ[_0x47d777(0x331)][_0x47d777(0x558)]['call'](this):this['getItemDamageAmountLabelOriginal']();},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x4e3)]=function(){const _0x5da95d=_0x9e78a;return this[_0x5da95d(0x1e7)]()?this[_0x5da95d(0x5c7)]():_0x5da95d(0x349)==='bxYTS'?_0x33f4eb[_0x5da95d(0x423)]&&_0x499268['prototype'][_0x5da95d(0x1bf)]['call'](this):VisuMZ['ItemsEquipsCore'][_0x5da95d(0x5b0)][_0x5da95d(0x399)][_0x5da95d(0x392)];},Scene_Equip['prototype']['geUpdatedLayoutStatusWidth']=function(){const _0x11be1c=_0x9e78a;return Math[_0x11be1c(0x207)](Graphics[_0x11be1c(0x27d)]/0x2);},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x57a)]=function(){const _0x3bfe93=_0x9e78a;this[_0x3bfe93(0x457)][_0x3bfe93(0x1c6)](_0x3bfe93(0x1a8),this[_0x3bfe93(0x2c9)][_0x3bfe93(0x376)](this)),this[_0x3bfe93(0x457)][_0x3bfe93(0x1c6)](_0x3bfe93(0x160),this['nextActor'][_0x3bfe93(0x376)](this)),this[_0x3bfe93(0x457)][_0x3bfe93(0x1c6)](_0x3bfe93(0x5d2),this[_0x3bfe93(0x524)][_0x3bfe93(0x376)](this));},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x4cf)]=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x5e3)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x5e3)]=function(){const _0xbc98f4=_0x9e78a;this[_0xbc98f4(0x1bf)]()&&('YnRXX'!=='YnRXX'?_0x26ea49=_0x13c2b6[_0xbc98f4(0x1c8)]:(this[_0xbc98f4(0x57b)]['deselect'](),this[_0xbc98f4(0x57b)][_0xbc98f4(0x2e1)]())),VisuMZ[_0xbc98f4(0x331)][_0xbc98f4(0x4cf)][_0xbc98f4(0x20e)](this);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x256)]=Scene_Equip[_0x9e78a(0x1e9)]['onSlotOk'],Scene_Equip['prototype'][_0x9e78a(0x25d)]=function(){const _0x454636=_0x9e78a;if(this['_slotWindow']['index']()>=0x0){if('iFytI'!==_0x454636(0x639))return!this[_0x454636(0x1bf)]();else VisuMZ[_0x454636(0x331)][_0x454636(0x256)]['call'](this),this[_0x454636(0x41f)]();}else this[_0x454636(0x457)]['smoothSelect'](0x0),this['_slotWindow'][_0x454636(0x3c9)]();},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x41f)]=function(){const _0x5336c4=_0x9e78a;this[_0x5336c4(0x644)][_0x5336c4(0x303)]();const _0x59abdb=this[_0x5336c4(0x457)][_0x5336c4(0x5ee)](),_0x3ca07c=this[_0x5336c4(0x644)]['_data'][_0x5336c4(0x63b)](_0x59abdb),_0x459ace=Math['floor'](this[_0x5336c4(0x644)][_0x5336c4(0x237)]()/0x2)-0x1;this[_0x5336c4(0x644)]['smoothSelect'](_0x3ca07c>=0x0?_0x3ca07c:0x0),this[_0x5336c4(0x644)][_0x5336c4(0x5f3)]>0x1&&(this[_0x5336c4(0x644)][_0x5336c4(0x5f3)]=0x1,this[_0x5336c4(0x644)][_0x5336c4(0x22a)]()),this['_itemWindow'][_0x5336c4(0x305)](this[_0x5336c4(0x644)][_0x5336c4(0x4a2)]()-_0x459ace);},VisuMZ[_0x9e78a(0x331)]['Scene_Equip_onSlotCancel']=Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x2d8)],Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x2d8)]=function(){const _0x37cd86=_0x9e78a;VisuMZ[_0x37cd86(0x331)][_0x37cd86(0x498)]['call'](this),this[_0x37cd86(0x1bf)]()&&(this[_0x37cd86(0x57b)][_0x37cd86(0x564)](0x0),this[_0x37cd86(0x457)][_0x37cd86(0x2e1)]());},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x16a)]=Scene_Equip['prototype'][_0x9e78a(0x278)],Scene_Equip['prototype'][_0x9e78a(0x278)]=function(){const _0x2b5b90=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x2b5b90(0x16a)][_0x2b5b90(0x20e)](this),this[_0x2b5b90(0x1bf)]()&&(this[_0x2b5b90(0x57b)][_0x2b5b90(0x2e1)](),this[_0x2b5b90(0x57b)][_0x2b5b90(0x37c)](),this[_0x2b5b90(0x457)]['smoothSelect'](0x0),this[_0x2b5b90(0x457)][_0x2b5b90(0x3c9)]());},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x576)]=function(){const _0x3387b9=_0x9e78a;if(!this[_0x3387b9(0x457)])return![];if(!this[_0x3387b9(0x457)][_0x3387b9(0x30b)])return![];return this[_0x3387b9(0x457)][_0x3387b9(0x2a4)]();},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x54d)]=function(){const _0x4e58fc=_0x9e78a;if(this[_0x4e58fc(0x576)]())return TextManager[_0x4e58fc(0x556)](_0x4e58fc(0x4a3));return Scene_MenuBase[_0x4e58fc(0x1e9)][_0x4e58fc(0x54d)]['call'](this);},Scene_Equip[_0x9e78a(0x1e9)][_0x9e78a(0x44c)]=function(){const _0x4a741f=_0x9e78a;if(this[_0x4a741f(0x576)]()){if(_0x4a741f(0x4b4)==='WNNWR')return VisuMZ[_0x4a741f(0x331)]['Settings'][_0x4a741f(0x399)][_0x4a741f(0x2ae)];else this['onBuyCancelItemsEquipsCore']();}return Scene_MenuBase[_0x4a741f(0x1e9)][_0x4a741f(0x44c)][_0x4a741f(0x20e)](this);},Scene_Equip[_0x9e78a(0x1e9)]['buttonAssistOffset3']=function(){const _0x1bea52=_0x9e78a;if(this[_0x1bea52(0x576)]())return this[_0x1bea52(0x532)]['width']/0x5/-0x3;return Scene_MenuBase[_0x1bea52(0x1e9)]['buttonAssistOffset3']['call'](this);},Scene_Equip['prototype'][_0x9e78a(0x2c9)]=function(){const _0x5d63f1=_0x9e78a;SceneManager[_0x5d63f1(0x273)]();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x4fc)]=Scene_Load['prototype'][_0x9e78a(0x566)],Scene_Load[_0x9e78a(0x1e9)][_0x9e78a(0x566)]=function(){const _0x1098a1=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x1098a1(0x4fc)]['call'](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x9e78a(0x1e9)]['refreshActorEquipSlotsIfUpdated']=function(){const _0x346dc7=_0x9e78a;if($gameSystem[_0x346dc7(0x226)]()!==$dataSystem[_0x346dc7(0x226)])for(const _0x270fe2 of $gameActors[_0x346dc7(0x228)]){if(_0x346dc7(0x212)===_0x346dc7(0x59a)){const _0x152321=_0x5ac658['ItemsEquipsCore'][_0x346dc7(0x5b0)][_0x346dc7(0x444)][_0x346dc7(0x592)];return _0x152321[_0x346dc7(0x4a6)](_0x263cb2['tp']);}else{if(_0x270fe2)_0x270fe2['prepareNewEquipSlotsOnLoad']();}}},Scene_Shop[_0x9e78a(0x1e9)]['isBottomHelpMode']=function(){const _0x4bccd2=_0x9e78a;if(ConfigManager[_0x4bccd2(0x63d)]&&ConfigManager[_0x4bccd2(0x258)]!==undefined)return ConfigManager[_0x4bccd2(0x258)];else{if(this[_0x4bccd2(0x1e7)]())return this[_0x4bccd2(0x52b)]()[_0x4bccd2(0x3cf)](/LOWER/i);else Scene_MenuBase['prototype']['isRightInputMode'][_0x4bccd2(0x20e)](this);}},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x138)]=function(){const _0x1fa84d=_0x9e78a;if(ConfigManager[_0x1fa84d(0x63d)]&&ConfigManager[_0x1fa84d(0x347)]!==undefined)return ConfigManager[_0x1fa84d(0x347)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this['updatedLayoutStyle']()['match'](/RIGHT/i);else Scene_MenuBase[_0x1fa84d(0x1e9)]['isRightInputMode'][_0x1fa84d(0x20e)](this);}},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x52b)]=function(){const _0x263d6a=_0x9e78a;return VisuMZ[_0x263d6a(0x331)][_0x263d6a(0x5b0)][_0x263d6a(0x1ab)]['LayoutStyle'];},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x1bf)]=function(){const _0x425040=_0x9e78a;return this[_0x425040(0x3eb)]&&this['_categoryWindow'][_0x425040(0x1bf)]();},Scene_Shop[_0x9e78a(0x1e9)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x4bc3ef=_0x9e78a;return VisuMZ[_0x4bc3ef(0x331)]['Settings'][_0x4bc3ef(0x1ab)][_0x4bc3ef(0x19b)];},VisuMZ[_0x9e78a(0x331)]['Scene_Shop_prepare']=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x610)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x610)]=function(_0x520bc2,_0xc7ad73){const _0x4cc76a=_0x9e78a;_0x520bc2=VisuMZ[_0x4cc76a(0x331)][_0x4cc76a(0x49c)](_0x520bc2),VisuMZ[_0x4cc76a(0x331)][_0x4cc76a(0x4ff)][_0x4cc76a(0x20e)](this,_0x520bc2,_0xc7ad73),this['adjustHiddenShownGoods']();},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x4f4)]=function(){const _0x2e9687=_0x9e78a;this[_0x2e9687(0x405)]=0x0;const _0x1226f9=[];for(const _0x4f9375 of this[_0x2e9687(0x216)]){this['isGoodShown'](_0x4f9375)?this['_goodsCount']++:_0x1226f9['push'](_0x4f9375);}for(const _0x4b23ee of _0x1226f9){this['_goods']['remove'](_0x4b23ee);}},Scene_Shop['prototype']['isGoodShown']=function(_0xaa605c){if(_0xaa605c[0x0]>0x2||_0xaa605c[0x0]<0x0)return![];const _0x4f81f8=[$dataItems,$dataWeapons,$dataArmors][_0xaa605c[0x0]][_0xaa605c[0x1]];if(!_0x4f81f8)return![];return!![];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x340)]=Scene_Shop['prototype'][_0x9e78a(0x492)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x492)]=function(){const _0x2bbc79=_0x9e78a;VisuMZ[_0x2bbc79(0x331)]['Scene_Shop_create'][_0x2bbc79(0x20e)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x2bbc79(0x14c)](),this[_0x2bbc79(0x33a)]();},Scene_Shop[_0x9e78a(0x1e9)]['postCreateItemsEquipsCore']=function(){const _0x53d728=_0x9e78a;this[_0x53d728(0x3f1)][_0x53d728(0x151)](),this[_0x53d728(0x2f8)][_0x53d728(0x3c1)](),this[_0x53d728(0x2f8)]['deselect'](),this[_0x53d728(0x4d4)]['show']();},VisuMZ[_0x9e78a(0x331)]['Scene_Shop_helpWindowRect']=Scene_Shop[_0x9e78a(0x1e9)]['helpWindowRect'],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x5f9)]=function(){const _0x4aa615=_0x9e78a;if(this[_0x4aa615(0x1e7)]()){if(_0x4aa615(0x588)!==_0x4aa615(0x588)){const _0x479d05='HP\x20RECOVERY';if(this[_0x4aa615(0x287)][_0x479d05])return this['_customItemInfo'][_0x479d05];let _0x12d1df='';if(this['_itemData'][_0x4aa615(0x2b2)]>0x0)_0x12d1df+=_0x4aa615(0x4de)[_0x4aa615(0x4a6)](_0x154aee['floor'](this[_0x4aa615(0x3cb)][_0x4aa615(0x2b2)]*0x64));if(this[_0x4aa615(0x3cb)]['rateHP']>0x0&&this[_0x4aa615(0x3cb)][_0x4aa615(0x2b3)]>0x0)_0x12d1df+='\x20';if(this[_0x4aa615(0x3cb)][_0x4aa615(0x2b3)]>0x0)_0x12d1df+='+%1'['format'](this[_0x4aa615(0x3cb)]['flatHP']);return _0x12d1df;}else return this['helpWindowRectItemsEquipsCore']();}else return VisuMZ['ItemsEquipsCore']['Scene_Shop_helpWindowRect'][_0x4aa615(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x38f)]=function(){const _0x577cca=_0x9e78a,_0x281dd1=0x0,_0xe70e97=this[_0x577cca(0x3b1)](),_0x59cadc=Graphics[_0x577cca(0x27d)],_0x12ad7c=this[_0x577cca(0x359)]();return new Rectangle(_0x281dd1,_0xe70e97,_0x59cadc,_0x12ad7c);},VisuMZ[_0x9e78a(0x331)]['Scene_Shop_goldWindowRect']=Scene_Shop['prototype'][_0x9e78a(0x4d7)],Scene_Shop[_0x9e78a(0x1e9)]['goldWindowRect']=function(){const _0x3299fe=_0x9e78a;return this[_0x3299fe(0x1e7)]()?this[_0x3299fe(0x326)]():VisuMZ['ItemsEquipsCore'][_0x3299fe(0x3bd)][_0x3299fe(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x326)]=function(){const _0x517d16=_0x9e78a,_0x32a381=this['mainCommandWidth'](),_0x4ebf18=this['calcWindowHeight'](0x1,!![]),_0x1fe988=this[_0x517d16(0x138)]()?0x0:Graphics[_0x517d16(0x27d)]-_0x32a381,_0x46749b=this[_0x517d16(0x3d1)]();return new Rectangle(_0x1fe988,_0x46749b,_0x32a381,_0x4ebf18);},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x1bc)]=Scene_Shop[_0x9e78a(0x1e9)]['commandWindowRect'],Scene_Shop['prototype'][_0x9e78a(0x619)]=function(){const _0x18c38e=_0x9e78a;return this[_0x18c38e(0x1e7)]()?this[_0x18c38e(0x5e2)]():VisuMZ[_0x18c38e(0x331)][_0x18c38e(0x1bc)]['call'](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x5e2)]=function(){const _0x4aa60f=_0x9e78a,_0x133981=this['isRightInputMode']()?this[_0x4aa60f(0x33b)]():0x0,_0x5ef5f5=this[_0x4aa60f(0x3d1)](),_0x542e3d=Graphics['boxWidth']-this[_0x4aa60f(0x33b)](),_0xb3692d=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x133981,_0x5ef5f5,_0x542e3d,_0xb3692d);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x474)]=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x2ff)],Scene_Shop['prototype']['numberWindowRect']=function(){const _0x2af058=_0x9e78a;return this[_0x2af058(0x1e7)]()?this[_0x2af058(0x3b7)]():VisuMZ[_0x2af058(0x331)][_0x2af058(0x474)]['call'](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3b7)]=function(){const _0x514abf=_0x9e78a,_0x22ebca=this['_commandWindow']['y']+this['_commandWindow'][_0x514abf(0x568)],_0x2326d2=Graphics[_0x514abf(0x27d)]-this[_0x514abf(0x4e3)](),_0x1c88a3=this['isRightInputMode']()?Graphics[_0x514abf(0x27d)]-_0x2326d2:0x0,_0x282680=this['mainAreaHeight']()-this[_0x514abf(0x57b)][_0x514abf(0x568)];return new Rectangle(_0x1c88a3,_0x22ebca,_0x2326d2,_0x282680);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1e2)]=Scene_Shop[_0x9e78a(0x1e9)]['statusWindowRect'],Scene_Shop['prototype'][_0x9e78a(0x35d)]=function(){const _0x1d1061=_0x9e78a;return this[_0x1d1061(0x1e7)]()?this[_0x1d1061(0x368)]():VisuMZ[_0x1d1061(0x331)][_0x1d1061(0x1e2)][_0x1d1061(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)]['statusWindowRectItemsEquipsCore']=function(){const _0x23e1a7=_0x9e78a,_0x1104fd=this['statusWidth'](),_0x1c2f13=this[_0x23e1a7(0x283)]()-this['_commandWindow'][_0x23e1a7(0x568)],_0x3bd664=this[_0x23e1a7(0x138)]()?0x0:Graphics[_0x23e1a7(0x27d)]-_0x1104fd,_0x1ebd8d=this[_0x23e1a7(0x57b)]['y']+this[_0x23e1a7(0x57b)]['height'];return new Rectangle(_0x3bd664,_0x1ebd8d,_0x1104fd,_0x1c2f13);},VisuMZ[_0x9e78a(0x331)]['Scene_Shop_buyWindowRect']=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3d8)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3d8)]=function(){const _0x3a5604=_0x9e78a;if(this[_0x3a5604(0x1e7)]()){if(_0x3a5604(0x2dd)===_0x3a5604(0x5af)){_0x37682a+=_0x3a5604(0x3ef)['format'](_0x5744aa[_0x3a5604(0x425)]),_0x495c1d++;if(_0x554870>=_0x4162ef)return _0x6ba0b;}else return this[_0x3a5604(0x2d4)]();}else return VisuMZ[_0x3a5604(0x331)][_0x3a5604(0x4e4)][_0x3a5604(0x20e)](this);},Scene_Shop['prototype'][_0x9e78a(0x2d4)]=function(){const _0x1f6140=_0x9e78a,_0x44da48=this[_0x1f6140(0x57b)]['y']+this[_0x1f6140(0x57b)][_0x1f6140(0x568)],_0x1b86a1=Graphics[_0x1f6140(0x27d)]-this[_0x1f6140(0x4e3)](),_0x17f977=this[_0x1f6140(0x283)]()-this[_0x1f6140(0x57b)][_0x1f6140(0x568)],_0x3f8943=this[_0x1f6140(0x138)]()?Graphics['boxWidth']-_0x1b86a1:0x0;return new Rectangle(_0x3f8943,_0x44da48,_0x1b86a1,_0x17f977);},VisuMZ[_0x9e78a(0x331)]['Scene_Shop_createCategoryWindow']=Scene_Shop['prototype'][_0x9e78a(0x604)],Scene_Shop['prototype']['createCategoryWindow']=function(){const _0x4f303c=_0x9e78a;VisuMZ[_0x4f303c(0x331)]['Scene_Shop_createCategoryWindow'][_0x4f303c(0x20e)](this);if(this[_0x4f303c(0x1bf)]()){if('HlICM'==='guChd'){const _0x385286=_0x2eb789?_0x5968de(_0x34a100['$1']):_0x392e5d[_0x4f303c(0x172)](_0x4e6fce);return _0xcb06e2[_0x385286]||_0x2917a2;}else this[_0x4f303c(0x470)]();}},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x2c0)]=Scene_Shop['prototype'][_0x9e78a(0x5f4)],Scene_Shop[_0x9e78a(0x1e9)]['categoryWindowRect']=function(){const _0x215808=_0x9e78a;if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x215808(0x140)===_0x215808(0x648))_0x1066e5[_0x215808(0x1e9)][_0x215808(0x367)]['call'](this),this[_0x215808(0x599)][_0x215808(0x4cd)](this[_0x215808(0x5f8)]());else return this[_0x215808(0x410)]();}else{if(_0x215808(0x48e)!==_0x215808(0x48e)){_0x260e6c['isTriggered']()&&this[_0x215808(0x182)](!![]);if(_0x57db79[_0x215808(0x625)]())this['onTouchOk']();else _0x2a300e['isCancelled']()&&this['onTouchCancel']();}else return VisuMZ[_0x215808(0x331)]['Scene_Shop_categoryWindowRect'][_0x215808(0x20e)](this);}},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x410)]=function(){const _0x6bae32=_0x9e78a,_0x4c391e=this['_commandWindow']['y'],_0x335be4=this[_0x6bae32(0x57b)][_0x6bae32(0x1d2)],_0x53e00e=this[_0x6bae32(0x16d)](0x1,!![]),_0x3cc404=this['isRightInputMode']()?Graphics[_0x6bae32(0x27d)]-_0x335be4:0x0;return new Rectangle(_0x3cc404,_0x4c391e,_0x335be4,_0x53e00e);},Scene_Shop['prototype'][_0x9e78a(0x470)]=function(){const _0x3a2a38=_0x9e78a;delete this['_categoryWindow'][_0x3a2a38(0x274)]['ok'],delete this[_0x3a2a38(0x3eb)][_0x3a2a38(0x274)][_0x3a2a38(0x1a8)];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2ef)]=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x645)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x645)]=function(){const _0x29dbea=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x29dbea(0x2ef)][_0x29dbea(0x20e)](this);if(this[_0x29dbea(0x1e7)]()){if(_0x29dbea(0x5fa)!=='SqNKl'){const _0x16fb3d=_0x407f19['parse']('['+_0x44ad8e['$1']['match'](/\d+/g)+']');for(const _0x1d4192 of _0x16fb3d){if(!_0x5b6bb0[_0x29dbea(0x4d3)](_0x1d4192))return![];}}else this[_0x29dbea(0x1ca)]();}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x628)]=Scene_Shop['prototype']['sellWindowRect'],Scene_Shop[_0x9e78a(0x1e9)]['sellWindowRect']=function(){const _0x2545c8=_0x9e78a;if(this['isUseItemsEquipsCoreUpdatedLayout']())return this['sellWindowRectItemsEquipsCore']();else{if('ZbMfm'!==_0x2545c8(0x5b6))return VisuMZ[_0x2545c8(0x331)]['Scene_Shop_sellWindowRect']['call'](this);else this[_0x2545c8(0x2b9)](),_0x31679b['ItemsEquipsCore']['Window_Selectable_refresh'][_0x2545c8(0x20e)](this);}},Scene_Shop[_0x9e78a(0x1e9)]['sellWindowRectItemsEquipsCore']=function(){const _0x7747d=_0x9e78a,_0x5a2a6b=this[_0x7747d(0x3eb)]['y']+this['_categoryWindow'][_0x7747d(0x568)],_0x5439a7=Graphics[_0x7747d(0x27d)]-this['statusWidth'](),_0x38799c=this['mainAreaHeight']()-this[_0x7747d(0x3eb)]['height'],_0x51779d=this[_0x7747d(0x138)]()?Graphics[_0x7747d(0x27d)]-_0x5439a7:0x0;return new Rectangle(_0x51779d,_0x5a2a6b,_0x5439a7,_0x38799c);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x1ca)]=function(){const _0x5a9d8c=_0x9e78a;this[_0x5a9d8c(0x1c4)][_0x5a9d8c(0x55b)](this['_statusWindow']);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x4e3)]=function(){const _0x6a981b=_0x9e78a;return VisuMZ[_0x6a981b(0x331)][_0x6a981b(0x5b0)]['StatusWindow'][_0x6a981b(0x3a2)];},VisuMZ['ItemsEquipsCore']['Scene_Shop_activateSellWindow']=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x299)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x299)]=function(){const _0xd36a48=_0x9e78a;VisuMZ[_0xd36a48(0x331)][_0xd36a48(0x48b)]['call'](this),this[_0xd36a48(0x1e7)]()&&this[_0xd36a48(0x4d4)][_0xd36a48(0x3c1)](),this['_sellWindow']['updateHelp']();},VisuMZ['ItemsEquipsCore']['Scene_Shop_commandBuy']=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3c0)],Scene_Shop['prototype'][_0x9e78a(0x3c0)]=function(){const _0x599e1a=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x599e1a(0x430)]['call'](this),this[_0x599e1a(0x1e7)]()&&this[_0x599e1a(0x35a)]();},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x35a)]=function(){const _0xd6bd97=_0x9e78a;this[_0xd6bd97(0x306)]=this[_0xd6bd97(0x306)]||0x0,this[_0xd6bd97(0x2f8)][_0xd6bd97(0x564)](this[_0xd6bd97(0x306)]);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1dd)]=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x4d0)],Scene_Shop['prototype'][_0x9e78a(0x4d0)]=function(){const _0x2b5bb9=_0x9e78a;VisuMZ[_0x2b5bb9(0x331)][_0x2b5bb9(0x1dd)]['call'](this),this[_0x2b5bb9(0x1e7)]()&&this[_0x2b5bb9(0x322)](),this[_0x2b5bb9(0x1bf)]()&&(_0x2b5bb9(0x412)!==_0x2b5bb9(0x412)?_0x43740e=_0x2b5bb9(0x499)[_0x2b5bb9(0x4a6)](_0x41df4d['id']):(this['_categoryWindow'][_0x2b5bb9(0x564)](0x0),this[_0x2b5bb9(0x52a)]()));},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x322)]=function(){const _0xcf846b=_0x9e78a;this[_0xcf846b(0x2f8)][_0xcf846b(0x151)](),this[_0xcf846b(0x57b)][_0xcf846b(0x151)]();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onBuyCancel']=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x39a)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x39a)]=function(){const _0x3f6e92=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x3f6e92(0x5b5)][_0x3f6e92(0x20e)](this);if(this['isUseItemsEquipsCoreUpdatedLayout']()){if(_0x3f6e92(0x508)===_0x3f6e92(0x508))this[_0x3f6e92(0x5d4)]();else{const _0x1ea312=this[_0x3f6e92(0x3b5)](_0x2c0597);if(_0x1ea312<0x0)return;const _0x5c9107=_0x436824===0x1?_0x261b6a[_0x168f2b]:_0x27b6be[_0xc6fe2a];this[_0x3f6e92(0x1af)](_0x1ea312,_0x5c9107);}}},Scene_Shop['prototype'][_0x9e78a(0x5d4)]=function(){const _0x396339=_0x9e78a;this[_0x396339(0x306)]=this[_0x396339(0x2f8)][_0x396339(0x4a2)](),this[_0x396339(0x2f8)][_0x396339(0x3c1)](),this[_0x396339(0x2f8)][_0x396339(0x37c)](),this[_0x396339(0x2f8)]['smoothScrollTo'](0x0,0x0),this[_0x396339(0x4d4)][_0x396339(0x3c1)](),this['_dummyWindow'][_0x396339(0x151)]();},VisuMZ['ItemsEquipsCore']['Scene_Shop_onCategoryCancel']=Scene_Shop['prototype'][_0x9e78a(0x181)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x181)]=function(){const _0x318898=_0x9e78a;VisuMZ['ItemsEquipsCore']['Scene_Shop_onCategoryCancel'][_0x318898(0x20e)](this),this[_0x318898(0x1e7)]()&&this[_0x318898(0x55f)]();},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x55f)]=function(){const _0x564e2e=_0x9e78a;this[_0x564e2e(0x2f8)][_0x564e2e(0x3c1)](),this[_0x564e2e(0x57b)][_0x564e2e(0x3c1)]();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x640)]=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x416)],Scene_Shop[_0x9e78a(0x1e9)]['onBuyOk']=function(){const _0x5402a2=_0x9e78a;$gameTemp[_0x5402a2(0x501)]=!![],VisuMZ[_0x5402a2(0x331)][_0x5402a2(0x640)][_0x5402a2(0x20e)](this),$gameTemp[_0x5402a2(0x501)]=![],this[_0x5402a2(0x262)]=this[_0x5402a2(0x2f8)]['item']();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x3ae)]=Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x209)],Scene_Shop[_0x9e78a(0x1e9)]['buyingPrice']=function(){const _0x2c0f25=_0x9e78a;$gameTemp[_0x2c0f25(0x501)]=!![],this['_item']=this[_0x2c0f25(0x2f8)][_0x2c0f25(0x5ee)]();const _0x24122b=VisuMZ[_0x2c0f25(0x331)][_0x2c0f25(0x3ae)][_0x2c0f25(0x20e)](this);return $gameTemp[_0x2c0f25(0x501)]=![],this[_0x2c0f25(0x262)]=this[_0x2c0f25(0x2f8)]['item'](),_0x24122b;},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x332)]=Scene_Shop['prototype'][_0x9e78a(0x5a8)],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x5a8)]=function(){const _0x9502f4=_0x9e78a;VisuMZ[_0x9502f4(0x331)][_0x9502f4(0x332)][_0x9502f4(0x20e)](this);if(this[_0x9502f4(0x1e7)]()){if('EkdZb'===_0x9502f4(0x452))this[_0x9502f4(0x475)]();else for(const _0x220561 of _0x544d5a['troopArtifacts']()){if(_0x220561)_0x56f9e0+=_0x220561['params'][_0x92cafd];}}},Scene_Shop['prototype'][_0x9e78a(0x475)]=function(){const _0x4afb92=_0x9e78a;this[_0x4afb92(0x3eb)][_0x4afb92(0x3c1)]();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x215)]=Scene_Shop[_0x9e78a(0x1e9)]['onSellCancel'],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x2b5)]=function(){const _0x3ce791=_0x9e78a;VisuMZ[_0x3ce791(0x331)][_0x3ce791(0x215)][_0x3ce791(0x20e)](this),this[_0x3ce791(0x1bf)]()&&this[_0x3ce791(0x181)](),this[_0x3ce791(0x1e7)]()&&this[_0x3ce791(0x3f1)][_0x3ce791(0x151)]();},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x15f)]=function(_0x5bba61){const _0x3511cf=_0x9e78a,_0x5f217c=this[_0x3511cf(0x262)];this['_item']=_0x5bba61;const _0x443665=this[_0x3511cf(0x1a1)]();return this['_item']=_0x5f217c,_0x443665;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x24c)]=Scene_Shop[_0x9e78a(0x1e9)]['sellingPrice'],Scene_Shop['prototype'][_0x9e78a(0x1a1)]=function(){const _0x4a4141=_0x9e78a;let _0x11dca9=this[_0x4a4141(0x3af)]();const _0x460d10=this[_0x4a4141(0x262)];return _0x11dca9=VisuMZ[_0x4a4141(0x331)][_0x4a4141(0x5b0)]['ShopScene'][_0x4a4141(0x3f4)][_0x4a4141(0x20e)](this,_0x460d10,_0x11dca9),_0x11dca9;},Scene_Shop[_0x9e78a(0x1e9)]['determineBaseSellingPrice']=function(){const _0x2ba039=_0x9e78a;let _0xc6b665=this[_0x2ba039(0x262)][_0x2ba039(0x13e)];if(!this[_0x2ba039(0x262)]){if(_0x2ba039(0x593)!==_0x2ba039(0x593))this[_0x2ba039(0x42c)](_0x1dab55,_0x23d093['x']+_0x1f6cae[_0x2ba039(0x1d2)]-_0x51da36,_0x3796b9['y'],_0x58f0ec);else return 0x0;}else{if(this[_0x2ba039(0x262)][_0x2ba039(0x173)][_0x2ba039(0x3cf)](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x219868=String(RegExp['$1']);let _0x3695f5=this[_0x2ba039(0x262)],_0x21210e=_0xc6b665*this[_0x2ba039(0x5c0)]();try{eval(_0x219868);}catch(_0x2966ac){if($gameTemp[_0x2ba039(0x58d)]())console[_0x2ba039(0x53b)](_0x2966ac);}if(isNaN(_0x21210e))_0x21210e=0x0;return Math[_0x2ba039(0x207)](_0x21210e);}else return this[_0x2ba039(0x262)]['note'][_0x2ba039(0x3cf)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math['floor'](this[_0x2ba039(0x297)]());}},Scene_Shop[_0x9e78a(0x1e9)]['baseSellingPrice']=function(){const _0x594da5=_0x9e78a;return this[_0x594da5(0x262)][_0x594da5(0x13e)]*this[_0x594da5(0x5c0)]();},Scene_Shop[_0x9e78a(0x1e9)]['sellPriceRate']=function(){const _0x162b35=_0x9e78a;return VisuMZ[_0x162b35(0x331)][_0x162b35(0x5b0)][_0x162b35(0x1ab)][_0x162b35(0x1da)];},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3d2)]=function(){const _0xd7a3a4=_0x9e78a;if(!this['updatedLayoutStyle']())return![];if(!this[_0xd7a3a4(0x1bf)]())return![];if(!this['_sellWindow'])return![];if(!this[_0xd7a3a4(0x1c4)][_0xd7a3a4(0x30b)])return![];return this[_0xd7a3a4(0x52b)]()&&this['isUseModernControls']();},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x40f)]=function(){const _0x61caf1=_0x9e78a;if(this[_0x61caf1(0x3d2)]()){if(_0x61caf1(0x53c)===_0x61caf1(0x53c))return this['_sellWindow'][_0x61caf1(0x276)]()===0x1?TextManager[_0x61caf1(0x2bc)](_0x61caf1(0x42d),_0x61caf1(0x5f6)):TextManager[_0x61caf1(0x2bc)](_0x61caf1(0x5d2),_0x61caf1(0x160));else _0x5423e2=_0x4f16c3['CoreEngine']['Settings'][_0x61caf1(0x571)][_0x61caf1(0x5cc)];}else{if(this['_numberWindow']&&this[_0x61caf1(0x22e)]['active'])return TextManager[_0x61caf1(0x2bc)](_0x61caf1(0x42d),_0x61caf1(0x5f6));}return Scene_MenuBase[_0x61caf1(0x1e9)][_0x61caf1(0x40f)][_0x61caf1(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x47e)]=function(){const _0x4e8c91=_0x9e78a;if(this[_0x4e8c91(0x22e)]&&this[_0x4e8c91(0x22e)][_0x4e8c91(0x30b)])return'qKVAw'==='oJZhJ'?_0x48f4f0[_0x4e8c91(0x613)](_0x46038f)&&_0x5b910c['wtypeId']===_0x39c536(_0x19a095['$1']):TextManager['getInputMultiButtonStrings']('up',_0x4e8c91(0x1f7));return Scene_MenuBase[_0x4e8c91(0x1e9)][_0x4e8c91(0x47e)]['call'](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x1f3)]=function(){const _0x1fe432=_0x9e78a;if(this[_0x1fe432(0x3d2)]())return VisuMZ[_0x1fe432(0x331)][_0x1fe432(0x5b0)][_0x1fe432(0x4e7)][_0x1fe432(0x616)];else{if(this['_numberWindow']&&this[_0x1fe432(0x22e)]['active'])return VisuMZ[_0x1fe432(0x331)][_0x1fe432(0x5b0)]['ShopScene'][_0x1fe432(0x5dc)];}return Scene_MenuBase[_0x1fe432(0x1e9)]['buttonAssistText1'][_0x1fe432(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x329)]=function(){const _0xdfbf37=_0x9e78a;if(this[_0xdfbf37(0x22e)]&&this[_0xdfbf37(0x22e)]['active']){if(_0xdfbf37(0x510)!==_0xdfbf37(0x2a2))return VisuMZ[_0xdfbf37(0x331)][_0xdfbf37(0x5b0)][_0xdfbf37(0x1ab)][_0xdfbf37(0x27b)];else{if(this[_0xdfbf37(0x39b)]()&&_0x393649[_0xdfbf37(0x3f0)]())this[_0xdfbf37(0x267)](![]);else _0x193060[_0xdfbf37(0x3df)]()&&this['onTouchSelectModernControls'](!![]);_0x37f192[_0xdfbf37(0x625)]()&&this[_0xdfbf37(0x59e)]();}}return Scene_MenuBase[_0xdfbf37(0x1e9)][_0xdfbf37(0x329)][_0xdfbf37(0x20e)](this);},Scene_Shop[_0x9e78a(0x1e9)]['resetShopSwitches']=function(){const _0x12d0ed=_0x9e78a;if(!SceneManager[_0x12d0ed(0x3c6)]())return;const _0x29814f=VisuMZ[_0x12d0ed(0x331)][_0x12d0ed(0x5b0)][_0x12d0ed(0x1ab)];_0x29814f[_0x12d0ed(0x247)]&&$gameSwitches[_0x12d0ed(0x4e6)](_0x29814f[_0x12d0ed(0x247)],![]),_0x29814f[_0x12d0ed(0x5c6)]&&$gameSwitches[_0x12d0ed(0x4e6)](_0x29814f[_0x12d0ed(0x5c6)],![]);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x2d2)]=Scene_Shop[_0x9e78a(0x1e9)]['doBuy'],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3ca)]=function(_0x20c216){const _0x913ebb=_0x9e78a;VisuMZ[_0x913ebb(0x331)][_0x913ebb(0x2d2)]['call'](this,_0x20c216),this['onBuyItem'](this[_0x913ebb(0x262)],_0x20c216);if(_0x20c216<=0x0)return;const _0x59c6a6=VisuMZ[_0x913ebb(0x331)]['Settings'][_0x913ebb(0x1ab)];_0x59c6a6[_0x913ebb(0x247)]&&$gameSwitches[_0x913ebb(0x4e6)](_0x59c6a6['SwitchBuy'],!![]),this['_buyWindow']['refresh'](),this[_0x913ebb(0x1c4)][_0x913ebb(0x303)]();},Scene_Shop[_0x9e78a(0x1e9)]['onBuyItem']=function(_0x2030db,_0x3f5309){const _0x3200aa=_0x9e78a;this['processShopCondListingOnBuyItem'](_0x2030db,_0x3f5309),$gameParty[_0x3200aa(0x462)](_0x2030db,_0x3f5309),$gameParty[_0x3200aa(0x4c8)](_0x3f5309*this[_0x3200aa(0x209)]());},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x471)]=function(_0x223835,_0x47f1b9){const _0x1793d4=_0x9e78a;if(!_0x223835)return;if(!_0x47f1b9)return;const _0x318e04=VisuMZ['ItemsEquipsCore'][_0x1793d4(0x42b)],_0x35bd5a=_0x223835[_0x1793d4(0x173)]||'';if(_0x35bd5a[_0x1793d4(0x3cf)](_0x318e04[_0x1793d4(0x241)])){if('UBmcs'!==_0x1793d4(0x288)){if(_0x6ac38c[_0x1793d4(0x501)])return _0x2f82ef[_0x1793d4(0x331)][_0x1793d4(0x239)]['call'](this);return _0x4a87f6['getProxyItem'](_0x636cc7['ItemsEquipsCore'][_0x1793d4(0x239)]['call'](this));}else{const _0x2c4b4e=String(RegExp['$1'])[_0x1793d4(0x19d)](',')['map'](_0x33bf27=>Number(_0x33bf27));for(const _0x893272 of _0x2c4b4e){if(_0x1793d4(0x5ba)===_0x1793d4(0x5ba))$gameSwitches[_0x1793d4(0x4e6)](_0x893272,!![]);else return _0x31746e[_0x1793d4(0x331)][_0x1793d4(0x5b0)][_0x1793d4(0x4e7)][_0x1793d4(0x57f)];}}}if(_0x35bd5a['match'](_0x318e04[_0x1793d4(0x50c)])){if(_0x1793d4(0x581)!==_0x1793d4(0x581))this[_0x1793d4(0x57b)][_0x1793d4(0x2e1)](),this[_0x1793d4(0x57b)][_0x1793d4(0x37c)](),this[_0x1793d4(0x457)][_0x1793d4(0x564)](0x0),this['_slotWindow']['activate']();else{const _0x5ae35b=String(RegExp['$1'])[_0x1793d4(0x19d)](',')[_0x1793d4(0x4e5)](_0x2b1bad=>Number(_0x2b1bad));for(const _0x3daf73 of _0x5ae35b){$gameSwitches[_0x1793d4(0x4e6)](_0x3daf73,![]);}}}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x291)]=Scene_Shop['prototype']['doSell'],Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x3fb)]=function(_0x372f6d){const _0x45ff59=_0x9e78a;VisuMZ[_0x45ff59(0x331)]['Scene_Shop_doSell'][_0x45ff59(0x20e)](this,_0x372f6d),this[_0x45ff59(0x4ca)](this[_0x45ff59(0x262)],_0x372f6d);if(_0x372f6d<=0x0)return;const _0x26fda1=VisuMZ[_0x45ff59(0x331)][_0x45ff59(0x5b0)][_0x45ff59(0x1ab)];_0x26fda1[_0x45ff59(0x247)]&&$gameSwitches[_0x45ff59(0x4e6)](_0x26fda1[_0x45ff59(0x5c6)],!![]),this[_0x45ff59(0x2f8)][_0x45ff59(0x303)](),this[_0x45ff59(0x1c4)]['refresh']();},Scene_Shop[_0x9e78a(0x1e9)]['onSellItem']=function(_0xf07b8d,_0x34ea19){const _0x167a8f=_0x9e78a;this[_0x167a8f(0x2ac)](_0xf07b8d,_0x34ea19),$gameParty[_0x167a8f(0x194)](_0xf07b8d,_0x34ea19),$gameParty['addShopTrackingGoldSell'](_0x34ea19*this['sellingPrice']());},Scene_Shop[_0x9e78a(0x1e9)][_0x9e78a(0x2ac)]=function(_0x2952b2,_0x3db094){const _0x2a71d6=_0x9e78a;if(!_0x2952b2)return;if(!_0x3db094)return;const _0x2aa067=VisuMZ[_0x2a71d6(0x331)]['ShopListingRegExp'],_0x5eb3a4=_0x2952b2[_0x2a71d6(0x173)]||'';if(_0x5eb3a4[_0x2a71d6(0x3cf)](_0x2aa067['SellTurnSwitchOn'])){const _0x374a87=String(RegExp['$1'])['split'](',')[_0x2a71d6(0x4e5)](_0x4de65a=>Number(_0x4de65a));for(const _0xff1b1 of _0x374a87){$gameSwitches['setValue'](_0xff1b1,!![]);}}if(_0x5eb3a4[_0x2a71d6(0x3cf)](_0x2aa067[_0x2a71d6(0x19e)])){const _0x529bd2=String(RegExp['$1'])[_0x2a71d6(0x19d)](',')[_0x2a71d6(0x4e5)](_0xa59069=>Number(_0xa59069));for(const _0x2ef6b3 of _0x529bd2){$gameSwitches[_0x2a71d6(0x4e6)](_0x2ef6b3,![]);}}};function Sprite_NewLabel(){const _0x5852bd=_0x9e78a;this[_0x5852bd(0x3d0)](...arguments);}function _0x5abe(){const _0x55bad1=['AvmVN','inBattle','NexlX','bzhgt','HP\x20RECOVERY','addShopTrackingGoldBuy','yJExC','onSellItem','drawItemEquipType','drawItemRepeats','setText','getItemsEquipsCoreBackColor1','Scene_Equip_commandEquip','commandSell','commandNameWindowDrawBackground','Game_Party_setupBattleTestItems_artifact','value','_statusWindow','paramValueByName','forceResetEquipSlots','goldWindowRect','isItem','aCgbt','textColor','myaFn','releaseUnequippableItems','isArtifact','+%1%','fontSize','isPressed','_classIDs','ARMOR','statusWidth','Scene_Shop_buyWindowRect','map','setValue','ItemScene','battleMembers','categoryList','currentSymbol','createBitmap','refreshItemsEquipsCoreNoMenuImage','Game_Item_setObject','placeNewLabel','ADDED\x20EFFECTS','initNewLabelSprites','getItemEffectsAddedStatesBuffsText','jQDjG','initEquips','adjustHiddenShownGoods','TDBqp','kTjej','Speed1000','Game_Actor_equips_artifacts','mainFontFace','Style','itemPadding','Scene_Load_reloadMapIfUpdated','QPmrc','_newItemsList','Scene_Shop_prepare','NeverUsable','_bypassProxy','CmJRY','top','ceil','Parse_Notetags_EnableJS','VkiWv','paramBase','nNfAE','SQchI','equipItems','textSizeEx','BuyTurnSwitchOff','+%1','ARRAYNUM','translucentOpacity','cuuBv','AllItems','kKGVB','innerWidth','optimizeEquipments','iconText','armorTypes','weapon-%1','MOheM','ARRAYSTR','CmdHideDisabled','7034545uSTszP','getItemEffectsMpDamageLabel','push','updateMoneyAmount','Step3End','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','qwPsP','PbYfo','currentExt','previousActor','isArmor','mainFontSize','Scene_Item_itemWindowRect','ARRAYEVAL','paramId','onCategoryOk','updatedLayoutStyle','ItemQuantityFmt','FUNC','Mdiot','OffsetY','addCancelCommand','Scene_Equip_statusWindowRect','_buttonAssistWindow','refreshDelay','Damage\x20Formula\x20Error\x20for\x20%1','QUANTITY','isNewItem','cursorRight','%1%','Actors','REOMb','log','myxTP','flatMP','RemoveEquipText','def','modifiedBuyPriceItemsEquipsCore','fill','isSoleWeaponType','updateCommandNameWindow','currentClass','characterName','level','Game_Actor_artifact','Window_Selectable_refresh','currencyUnit','vuuJg','isEquipped','xYFFg','buttonAssistKey3','Hyzzl','callUpdateHelp','center','jXlUs','isSellCommandEnabled','Speed0','meetsItemConditionsJS','GmfLq','getInputButtonString','meetsItemConditionsNotetags','Scene_Equip_itemWindowRect','Game_Party_gainItem','_doubleTouch','setStatusWindow','_paramPlus','DrawParamJS','processCursorSpecialCheckModernControls','onCategoryCancelItemsEquipsCore','ItemMenuStatusRect','getItemEffectsTpDamageLabel','clearNewLabelFromItem','WEAPON','smoothSelect','fkRTq','reloadMapIfUpdated','cursorUp','height','changeBuff','canShiftRemoveEquipment','BAGea','_getClassRequirements','LabelElement','checkShiftRemoveShortcut','DrawIcons','iVgQF','Param','setHelpWindowItem','shouldCommandWindowExist','drawItemEffects','_itemIDs','buttonAssistSlotWindowShift','itemEnableJS','foreground','test','postCreateSlotWindowItemsEquipsCore','_commandWindow','TnGdc','aSGEq','addEquipCommand','ShowShopStatus','opacity','nVFLD','ZAgaS','pCDiy','ptAKX','\x5cb%1\x5cb','powerUpColor','middle','lXTGJ','etypeId','dXPAV','vSAyt','addLoadListener','isPlaytest','lWiIG','srAFX','agi','tradeItemWithParty','LabelSelfGainTP','DnSUy','getItemHitTypeText','itemWindowRect','RZaAA','ATK','TNDFK','_helpWindow','TXEeL','DmHjQ','clear','zvbTE','onTouchOk','getItemDamageAmountText','ElementWeapon','nonRemovableEtypes','ConvertParams','alterSkillName','wrtZD','createTempActorEquips','getItemEffects','_allowArtifactParamBase','onSellOk','every','money','addWindow','addItemCategories','elements','getItemColor','mqWho','Settings','BattleUsable','ParamChangeFontSize','isClearEquipOk','prepareNewEquipSlotsOnLoad','Scene_Shop_onBuyCancel','fDbKj','kIKcZ','exit','prepareRefreshItemsEquipsCoreLayout','tNrSd','getProxyItem','tBlxD','Whitelist','equips','NUM','sellPriceRate','isDrawItemNumber','(%1)','Scope%1','YqYPY','LUK','SwitchSell','geUpdatedLayoutStatusWidth','_tempActorA','Game_Actor_forceChangeEquip','move','categoryNameWindowCenter','ExtDisplayedParams','REMOVED\x20EFFECTS','nonOptimizeEtypes','tkHKc','playOkSound','_scene','pageup','bxLie','onBuyCancelItemsEquipsCore','ZuIKC','meetsEquipRequirement','EquipAdjustHpMp','Window_ShopBuy_refresh','equip2','getShopTrackingItemBuy','ocSRb','buttonAssistSmallIncrement','efHGz','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','INixe','getShopTrackingItemSell','BorderRegExp','commandWindowRectItemsEquipsCore','commandEquip','optimizeCmdDesc','meetsClassRequirements','GDatZ','itemTextAlign','canConsumeItem','FontFace','lnGyV','Game_Actor_changeEquip','isCommandEnabled','possession','item','ARRAYFUNC','Categories','Scene_Equip_commandWindowRect','AGI','_scrollDuration','categoryWindowRect','weaponTypes','right','PccNm','helpDescriptionText','helpWindowRect','SqNKl','partyArtifacts','IhpBN','ACvCp','initShopTrackingData','PaNOP','getItemSpeedLabel','drawItemStyleIcon','addShopTrackingItem','getClassRequirements','createCategoryWindow','ConvertNumberToString','Window_EquipCommand_initialize','eBqtY','EFFECT_REMOVE_STATE','Window_ItemList_drawItem','icon','NSEGu','gainItem','MANUAL','removeDebuff','commandNameWindowCenter','prepare','Ksjwo','params','isWeapon','oPHWD','isRepeated','buttonAssistCategory','Window_Selectable_update','UlliA','commandWindowRect','drawItemKeyData','Lwwkm','tjhEl','FFcey','drawItemStyleIconText','process_VisuMZ_ItemsEquipsCore_RegExp','\x5cI[%1]%2','hasOwnProperty','Scene_Item_createCategoryWindow','HOHoJ','xPmYZ','isClicked','Occasion%1','getItemEffectsRemovedStatesBuffsText','Scene_Shop_sellWindowRect','xKRoG','Window_ItemCategory_setItemWindow','hpRate','List','createCommandWindow','Slots','Game_Party_numItems','Pick\x20and\x20choose\x20equipment\x20to\x20change.','zAVPB','drawItemName','drawParamsItemsEquipsCore','VisuMZ_1_SkillsStatesCore','QHoVo','isEquipChangeOk','updateChangedSlots','170980YEfDZv','iFytI','setNewItem','indexOf','commandName','uiMenuStyle','isPartyArtifact','setMp','Scene_Shop_onBuyOk','getItemEffectsRemovedStatesBuffsLabel','SpeedNeg2000','ImRIU','_itemWindow','createSellWindow','selfTP','ShowAllSwitches','QFHCk','drawItemNumber','EQVrQ','MP\x20DAMAGE','Scene_Equip_createSlotWindow','Game_BattlerBase_paramPlus_artifact','round','playBuzzerSound','vbsNl','isBattleTest','zhZeD','Window_ItemList_colSpacing','OhLIS','dPZDI','equipAdjustHpMp','isRightInputMode','MWZNk','%1-%2','ejIkq','activateItemWindow','DEF','price','Scene_Equip_createCommandWindow','XGqoR','SPEED','getItemsEquipsCoreBackColor2','Window_Selectable_setHelpWindowItem','_newLabelOpacityChange','lHfCM','yevkG','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','swGkg','4048176HVffzL','addSellCommand','addShopTrackingGoldSell','postCreateItemsEquipsCore','HP\x20DAMAGE','hitType','Window_EquipItem_isEnabled','ShowAnySwitches','hide','getItemDamageElementLabel','xrjpV','GARPi','RegExp','isEnabled','W%1','prepareNextScene','innerHeight','getTextColor','REPEAT','OffsetX','UxoDl','_getEquipRequirements','sellPriceOfItem','pagedown','artifacts','Scene_Item_categoryWindowRect','setBackgroundType','values','dataId','AlwaysUsable','processHandling','weapon','AEeNv','Scene_Equip_onActorChange','isArray','MenuPortraits','calcWindowHeight','isSoleArmorType','oUkZX','EFFECT_REMOVE_BUFF','Step1End','getItemIdWithName','note','cursorPageup','Window_ShopStatus_setItem','JaCjJ','_shopStatusMenuMode','createStatusWindow','artifactIDs','MaxItems','paramPlus','drawItemSuccessRate','Ojshz','forceChangeEquipSlots','kfNub','atypeId','onCategoryCancel','onTouchSelect','getItemOccasionText','Scene_Equip_helpWindowRect','drawItemEffectsTpDamage','smallParamFontSize','_commandNameWindow','bestEquipItem','ixyCb','removeState','CnGKA','MP\x20RECOVERY','PnuYX','code','zVbon','vngEq','getItemDamageAmountLabel','CmdIconBuy','optKeyItemsNumber','addShopTrackingItemSell','oXhTo','getItemEffectsAddedStatesBuffsLabel','Window_ItemCategory_initialize','dlpOR','random','CoreEngine','EnableLayout','SCOPE','split','SellTurnSwitchOff','forceChangeEquip','MKVpC','sellingPrice','itemDataFontSize','makeDeepCopy','mat','KeyItemProtect','paramPlusItemsEquipsCoreCustomJS','itemHasEquipLimit','cancel','_cache','kowZa','ShopScene','3530382CzpsPR','numItems','WzYnp','changeEquip','ELEMENT','drawItemActorMenuImage','dVFiQ','process_VisuMZ_ItemsEquipsCore_Notetags','lohJz','version','background','apXea','itemAt','categoryNameWindowDrawText','drawCustomShopGraphic','upjDC','Scene_Shop_commandWindowRect','postCreateItemWindowModernControls','drawIcon','isUseModernControls','Scene_ItemBase_activateItemWindow','evPsW','Wigsp','jZKIa','_sellWindow','LyJDY','setHandler','isOpen','armor','FontColor','postCreateSellWindowItemsEquipsCore','Apkzt','HiddenItemA','getItemEffectsTpDamageText','bkSNM','_skillIDs','drawItem','blt','width','LabelDamageMP','zDVym','isEquipCommandAdded','ShopMenuStatusStandard','mAdoT','item-%1','CONSUMABLE','SellPriceRate','processCursorHomeEndTrigger','biCZK','Scene_Shop_commandSell','tpGain','isShowNew','isProxyItem','QoL','Scene_Shop_statusWindowRect','Window_ItemList_updateHelp','fontFace','trKag','value2','isUseItemsEquipsCoreUpdatedLayout','consumable','prototype','uhQDd','drawActorCharacter','hitIndex','HquCi','lineHeight','process_VisuMZ_ItemsEquipsCore_EquipSlots','dyeXq','ZTOKx','EFFECT_REMOVE_DEBUFF','buttonAssistText1','rateMP','ParseItemNotetags','JsvaZ','down','Window_ShopCommand_initialize','drawUpdatedBeforeParamValue','sDfCU','setupItemDamageTempActors','zENmO','XPMeJ','ListWindowCols','_resetFontSize','drawItemData','Window_ShopBuy_goodsToItem','getItemQuantityText','replace','description','oTtzy','ZwhDu','floor','gwULP','buyingPrice','Game_BattlerBase_param_artifact','qKlrW','drawItemEffectsTpRecovery','GcHgj','call','HvNYh','CxkUg','occasion','lAydQ','isUseParamNamesWithIcons','removeBuff','Scene_Shop_onSellCancel','_goods','toDUd','filter','Consumable','PVkLW','Window_ShopSell_isEnabled','CommandAddClear','drawUpdatedParamName','damageColor','isEquipAtypeOk','setItemWindow','actorParams','CIVAl','isDualWield','×%1','bMadj','versionId','textWidth','_data','LvMUA','updateSmoothScroll','Scene_Boot_onDatabaseLoaded','clearCmdDesc','STRUCT','_numberWindow','_tempActorB','wKZyz','onMenuImageLoad','Game_Actor_discardEquip','items','Parse_Notetags_Prices','paramchangeTextColor','_list','maxVisibleItems','xjaMn','Window_ItemList_item','SFjxt','setItem','getColor','LFvwF','drawActorParamDifference','changePaintOpacity','zbojo','BuyTurnSwitchOn','maxItems','fillRect','GggnW','AllWeapons','KTVfR','SwitchBuy','elementId','ybTDp','equipSlots','HideAnySwitches','Scene_Shop_sellingPrice','getItemEffectsTpRecoveryLabel','isOptimizeEquipOk','goodsToItem','onTouchCancel','Game_Party_gainItem_artifact','ParamValueFontSize','ScopeRandomAny','ARRAYSTRUCT','dTBNM','Scene_Equip_onSlotOk','QYgGP','uiHelpPosition','wANKI','isEquipCommandEnabled','DrawEquipData','Zlise','onSlotOk','Game_Actor_paramPlus','atk','drawEquipData','SRvFA','_item','TextAlign','getItemSpeedText','prepareItemCustomData','loseItem','onTouchSelectModernControls','refreshCursor','adjustItemWidthByStatus','lNDNf','troopArtifactIDs','AllArmors','(+%1)','max','thICR','_etypeIDs','iYUPB','MaxHP','pop','_handlers','hideAdditionalSprites','maxCols','isOptimizeCommandEnabled','onActorChange','paramJS','_equips','buttonAssistLargeIncrement','getItemEffectsMpRecoveryLabel','boxWidth','Window_EquipItem_includes','isStackableArtifact','PBnvO','contents','RROcr','mainAreaHeight','Step1Start','includes','LabelRemove','_customItemInfo','UBmcs','toUpperCase','Scene_Item_helpWindowRect','splice','dhqmf','xlhKy','processCursorMoveModernControls','Zflkf','?????','Scene_Shop_doSell','AKyvE','resetFontSettings','ParseAllNotetags','OdFbU','hUcrD','baseSellingPrice','ItemQuantityFontSize','activateSellWindow','concat','isEquipItem','GqSzq','Kxqmg','wFQgq','equipCmdDesc','Step2End','CmdIconCancel','xAEjr','getDamageStyle','isShiftRemoveShortcutEnabled','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Game_BattlerBase_param','KFpUs','IVDZo','ParseClassNotetags','type','parse','processShopCondListingOnSellItem','removeStateBuffChanges','buttonAssistRemove','successRate','_newLabelOpacityUpperLimit','IGllb','rateHP','flatHP','IncludeShopItem','onSellCancel','getEmptyEquipSlotOfSameEtype','VisuMZ_1_BattleCore','KXXFo','hideNewLabelSprites','repeats','isBottomHelpMode','getInputMultiButtonStrings','EJTzr','HideAllSwitches','SetupProxyItemGroup','Scene_Shop_categoryWindowRect','kwNGP','ribkW','switchProxyItem','_allowArtifactTraitObjects','drawParamName','getItemDamageAmountTextBattleCore','DrawItemData','systemColor','popScene','Remove\x20all\x20available\x20equipment.','Window_EquipStatus_refresh','Scene_Shop_helpWindowRect','isPageChangeRequested','yUSPc','helpDesc','object','getItemDamageAmountLabelBattleCore','Scene_Shop_doBuy','user','buyWindowRectItemsEquipsCore','drawItemHitType','update','12KtDETu','onSlotCancel','HXIAL','keyItem','defaultItemMax','drawParamText','oGxet','getItemSuccessRateText','changeEquipBase','CmdIconOptimize','deactivate','NDYqL','equip','text','New','_forcedSlots','getClassIdWithName','categoryStyleCheck','Parse_Notetags_ParamValues','VisuMZ_1_MainMenuCore','DrawBackRect','placeItemNewLabel','STR','orEEJ','Scene_Shop_createSellWindow','150XMhDmK','drawItemEffectsAddedStatesBuffs','kpizd','etTVW','WdxsF','commandStyleCheck','getItemRepeatsLabel','drawItemDarkRect','_buyWindow','CmdCancelRename','allowShiftScrolling','iconWidth','ljdfb','OCCASION','isKeyItem','numberWindowRect','getShopTrackingGoldSell','getItemEffectsHpDamageLabel','playEquip','refresh','_checkEquipRequirements','setTopRow','_buyWindowLastIndex','Window_ShopBuy_price','paramValueFontSize','PqYmH','addCommand','active','POlPL','WGnYi','getItemEffectsTpRecoveryText','AlreadyEquipMarker','mcdlf','TP\x20DAMAGE','contentsBack','2400147tRUXkM','1956312tazrpC','scope','KjozD','drawItemEffectsMpRecovery','hbYDm','slotWindowRectItemsEquipsCore','drawItemOccasion','_shopStatusMenuAlly','loadFaceImages','visible','_bypassReleaseUnequippableItemsItemsEquipsCore','VhYlI','===','FbTDs','commandSellItemsEquipsCore','PtsQd','formula','windowPadding','goldWindowRectItemsEquipsCore','Jtmrs','getShopTrackingData','buttonAssistText2','newLabelEnabled','EquipDelayMS','drawing','MaxMP','changeTextColor','addState','SetupArtifactItemIDs','ItemsEquipsCore','Scene_Shop_onSellOk','USER\x20TP\x20GAIN','CmdStyle','Scene_Equip_create','drawNewLabelIcon','ivmWr','auto','toLowerCase','resetShopSwitches','mainCommandWidth','drawItemEffectsMpDamage','DEyIx','mMQOI','drawItemConsumable','Scene_Shop_create','hCNnX','rzIZw','ZWFPR','HiddenItemB','_category','Game_BattlerBase_canEquip_artifact','uiInputPosition','TP\x20RECOVERY','omQct','anyEmptyEquipSlotsOfSameEtype','PtwuA','A%1','Window_ShopBuy_item','setCategory','getItemDamageElementText','onTouchSelectModern','normalColor','slotWindowRect','KwKbq','constructor','VnfCJ','getItemEffectsSelfTpGainLabel','CmdTextAlign','BatchShop','helpAreaHeight','commandBuyItemsEquipsCore','JhmnU','addBuyCommand','statusWindowRect','addInnerChild','drawItemDamage','SwitchID','trim','_tempActor','gaugeBackColor','maxItemAmount','_slotId','drawItemCost','updateHelp','statusWindowRectItemsEquipsCore','categoryItemTypes','setupBattleTestItems','jgpoB','Enable','isClearCommandAdded','Xlwar','isClearCommandEnabled','IwSBY','setObject','LXvMh','createItemWindow','gaugeLineHeight','cursorPagedown','bind','getItemEffectsSelfTpGainText','allowCommandWindowCursorUp','ParseWeaponNotetags','getItemEffectsMpDamageText','bitmap','deselect','mDVOr','category','checkItemConditionsSwitchNotetags','canEquip','MAT','uXsuZ','KArpm','buffIconIndex','gjlRR','getShopTrackingItem','getItemEffectsHpDamageText','cursorLeft','getEtypeIdWithName','HIT\x20TYPE','commandNameWindowDrawText','partyArtifactIDs','setHp','LzDDi','helpWindowRectItemsEquipsCore','itemWindowRectItemsEquipsCore','gold','StatusWindowWidth','MaxArmors','MaxWeapons','drawItemEffectsHpDamage','getMenuImage','mainAreaBottom','consumeItem','EquipScene','onBuyCancel','isHoverEnabled','mmp','addChild','loadSystem','Game_Party_consumeItem','createSlotWindow','getMatchingInitEquip','Width','sellWindowRectItemsEquipsCore','_bypassNewLabel','actor','eSGTT','name','commandStyle','removeBattleTestArtifacts','some','rcgbF','clamp','OxneR','Scene_Shop_buyingPrice','determineBaseSellingPrice','Nonconsumable','helpAreaTop','getItemDamageAmountTextOriginal','drawCurrencyValue','msBWj','getNextAvailableEtypeId','canUse','numberWindowRectItemsEquipsCore','KeyItems','hideDisabledCommands','buy','addStateBuffChanges','changeEquipById','Scene_Shop_goldWindowRect','MDF','status','commandBuy','show','categoryStyle','CommandAddOptimize','drawItemDamageElement','wtypeId','isSceneShop','Window_ItemList_maxCols','updateNewLabelOpacity','activate','doBuy','_itemData','Window_Selectable_initialize','KACQO','drawText','match','initialize','mainAreaTop','buttonAssistItemListRequirement','ITEMS_EQUIPS_CORE','_purchaseOnly','equipSlotIndex','colSpacing','0000','buyWindowRect','troopArtifacts','Parse_Notetags_EquipSlots','_weaponIDs','vKqEt','meetsShopListingConditions','createCategoryNameWindow','isTriggered','Game_BattlerBase_meetsItemConditions','FieldUsable','drawNewLabelText','playCursorSound','damage','Scene_Equip_slotWindowRect','TLIeX','drawItemDamageAmount','discardEquip','SCknH','itypeId','_categoryWindow','convertInitEquipsToItems','addItemCategory','pzEqS','\x5cI[%1]','isHovered','_dummyWindow','_newLabelSprites','ShiftShortcutKey','SellPriceJS','KYxeJ','initNewItemsList','itemLineRect','_newLabelOpacity','ScopeAlliesButUser','RemoveEquipIcon','doSell','createCommandNameWindow','Parse_Notetags_Batch','cNNMC','equipTypes','LNktE','CmdIconClear','updateCategoryNameWindow','Scene_Item_create','resetTextColor','_goodsCount','LabelApply','select','JdAnz','drawItemEffectsHpRecovery','processCursorMove','isHandled','HitType%1','gainTP','getItemScopeText','buttonAssistKey1','categoryWindowRectItemsEquipsCore','return\x200','dWdCz','100%','nCRap','sell','onBuyOk','BackRectColor','RAxlO','_resetFontColor','qyexp','mhp','oFPUv','VgKQg','ZacJs','onSlotOkAutoSelect','Game_Enemy_traitObjects_artifact','eWnxR','iconHeight','VisuMZ_0_CoreEngine','luk','iconIndex','YZvqK','rHHbt','NwbhJ','getSkillIdWithName','RegularItems','ShopListingRegExp','drawTextEx','left','zRkoA','isEquipTypeSealed','Scene_Shop_commandBuy','IconSet','param','EQUIP_DELAY_MS','1037215NfuLhI','SUCCESS\x20RATE','Step2Start','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','powerDownColor','Game_Party_initialize','SxgoW','mpRate','ActorResetEquipSlots','HsSQm','actorId','_categoryNameWindow','isShiftShortcutKeyForRemove','_money','addClearCommand','paintOpacity','StatusWindow','_shopTrackingData','EHNJP','#%1','drawCustomShopGraphicLoad','SetupProxyItemGroups','getArmorIdWithName','meJTL','buttonAssistText3','meetsEquipRequirements','LabelRecoverMP','setShopStatusWindowMode','LabelConsume','speed','EkdZb','JvfHo','Pbags','isCursorMovable','YoyHe','_slotWindow','length','drawItemCustomEntryLine','ejQgM','registerCommand','MaxIcons','CFXKl','awbnS','XDXxj','getWeaponIdWithName','ENNCU','addShopTrackingItemBuy','proxyItem','Speed2000','DamageType%1','onBuyItem','pFFBV','xzGcu','DrawPortraitJS','EFFECT_ADD_BUFF','optimize','remove','_cache_etypeIDs','getItemHitTypeLabel','drawRemoveItem','postCreateCategoryWindowItemsEquipsCore','processShopCondListingOnBuyItem','revertGlobalNamespaceVariables','_calculatingJSParameters','Scene_Shop_numberWindowRect','onSellOkItemsEquipsCore','LxyKs','KnLaw','Text','hzhcA','VqcPK','traitObjects','getItemRepeatsText','fNadc','buttonAssistKey2','fontSizeRatio','EquipParams','getItemEffectsMpRecoveryText','members','createNewLabelSprite','Step3Start','isCancelled','Parse_Notetags_Category','NoChangeMarker','VzGcv','EUvpV','LayoutStyle','Scene_Shop_activateSellWindow','EVAL','limitedPageUpDownSceneCheck','ehHga','isLearnedSkill','clearNewItem','drawItemCustomEntries','create','categoryNameWindowDrawBackground','getItemConsumableText','EFFECT_RECOVER_HP','isTroopArtifact','allowCreateStatusWindow','Scene_Equip_onSlotCancel','armor-%1','ARRAYJSON','eBgBP','deepCopy','makeCommandList','_actor','mEbFU','11waNlOR','getItemConsumableLabel','index','shift','ParseArmorNotetags','_armorIDs','format','WzVkt','bolyZ','processShiftRemoveShortcut','addOptimizeCommand','Game_Actor_tradeItemWithParty','getEquipRequirements','nhrCF','FINOd','ZcOns','needsNewTempActor','EGeIn','XMabs','drawPossession','WNNWR','LabelDamageTP','isOpenAndActive','loadPicture','Icon','aIabs','mdf','AoqRO','Parse_Notetags_ParamJS','SpeedNeg1999','getItemEffectsHpRecoveryText','categories','getEtypeIDs','msvOl','parameters'];_0x5abe=function(){return _0x55bad1;};return _0x5abe();}Sprite_NewLabel[_0x9e78a(0x1e9)]=Object['create'](Sprite[_0x9e78a(0x1e9)]),Sprite_NewLabel[_0x9e78a(0x1e9)][_0x9e78a(0x354)]=Sprite_NewLabel,Sprite_NewLabel[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)]=function(){const _0x2ad917=_0x9e78a;Sprite[_0x2ad917(0x1e9)][_0x2ad917(0x3d0)][_0x2ad917(0x20e)](this),this['createBitmap']();},Sprite_NewLabel['prototype'][_0x9e78a(0x4eb)]=function(){const _0x373684=_0x9e78a,_0x23f529=ImageManager[_0x373684(0x2fb)],_0xd7074e=ImageManager['iconHeight'];this['bitmap']=new Bitmap(_0x23f529,_0xd7074e),this['drawNewLabelIcon'](),this[_0x373684(0x3e2)]();},Sprite_NewLabel[_0x9e78a(0x1e9)][_0x9e78a(0x336)]=function(){const _0xe3e7af=_0x9e78a,_0x2923ec=VisuMZ[_0xe3e7af(0x331)][_0xe3e7af(0x5b0)]['New'][_0xe3e7af(0x4b8)];if(_0x2923ec<=0x0)return;const _0x4b58d4=ImageManager[_0xe3e7af(0x39e)]('IconSet'),_0x120c82=ImageManager[_0xe3e7af(0x2fb)],_0x5b8eeb=ImageManager['iconHeight'],_0x540e60=_0x2923ec%0x10*_0x120c82,_0x2547b6=Math[_0xe3e7af(0x207)](_0x2923ec/0x10)*_0x5b8eeb;this['bitmap'][_0xe3e7af(0x1d1)](_0x4b58d4,_0x540e60,_0x2547b6,_0x120c82,_0x5b8eeb,0x0,0x0);},Sprite_NewLabel['prototype'][_0x9e78a(0x3e2)]=function(){const _0x5baa72=_0x9e78a,_0x4ade57=VisuMZ[_0x5baa72(0x331)][_0x5baa72(0x5b0)][_0x5baa72(0x2e5)],_0x2b8364=_0x4ade57[_0x5baa72(0x478)];if(_0x2b8364==='')return;const _0x6f0dec=ImageManager[_0x5baa72(0x2fb)],_0x3cdca2=ImageManager['iconHeight'];this[_0x5baa72(0x37b)][_0x5baa72(0x1e4)]=_0x4ade57[_0x5baa72(0x5e9)]||$gameSystem[_0x5baa72(0x4f9)](),this[_0x5baa72(0x37b)][_0x5baa72(0x4da)]=this['getTextColor'](),this[_0x5baa72(0x37b)][_0x5baa72(0x4df)]=_0x4ade57['FontSize'],this['bitmap'][_0x5baa72(0x3ce)](_0x2b8364,0x0,_0x3cdca2/0x2,_0x6f0dec,_0x3cdca2/0x2,_0x5baa72(0x550));},Sprite_NewLabel[_0x9e78a(0x1e9)][_0x9e78a(0x15a)]=function(){const _0x53efc1=_0x9e78a,_0x30267e=VisuMZ[_0x53efc1(0x331)]['Settings'][_0x53efc1(0x2e5)][_0x53efc1(0x1c9)];return _0x30267e[_0x53efc1(0x3cf)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x53efc1(0x4da)](_0x30267e);},Window_Base[_0x9e78a(0x1e9)][_0x9e78a(0x632)]=function(_0x305d9b,_0x2c14e5,_0x2c4b71,_0x2b2187){const _0x35070b=_0x9e78a;if(_0x305d9b){const _0x7e599d=_0x2c4b71+(this[_0x35070b(0x1ee)]()-ImageManager[_0x35070b(0x422)])/0x2,_0x1dcb8c=ImageManager['iconWidth']+0x4,_0x57ea23=Math[_0x35070b(0x26e)](0x0,_0x2b2187-_0x1dcb8c);this[_0x35070b(0x32e)](ColorManager[_0x35070b(0x5ae)](_0x305d9b)),this[_0x35070b(0x1be)](_0x305d9b[_0x35070b(0x425)],_0x2c14e5,_0x7e599d),this[_0x35070b(0x3ce)](_0x305d9b[_0x35070b(0x3a7)],_0x2c14e5+_0x1dcb8c,_0x2c4b71,_0x57ea23),this[_0x35070b(0x404)]();}},Window_Base[_0x9e78a(0x1e9)][_0x9e78a(0x649)]=function(_0x5620f2,_0x41799a,_0x475b6f,_0x589122){const _0x4867d8=_0x9e78a;if(this['isDrawItemNumber'](_0x5620f2)){this[_0x4867d8(0x293)]();const _0x2903c0=VisuMZ[_0x4867d8(0x331)]['Settings'][_0x4867d8(0x4e7)],_0x1b3135=_0x2903c0[_0x4867d8(0x52c)],_0x45a546=_0x1b3135[_0x4867d8(0x4a6)]($gameParty[_0x4867d8(0x1ad)](_0x5620f2));this[_0x4867d8(0x281)][_0x4867d8(0x4df)]=_0x2903c0[_0x4867d8(0x298)],this[_0x4867d8(0x3ce)](_0x45a546,_0x41799a,_0x475b6f,_0x589122,'right'),this['resetFontSettings']();}},Window_Base[_0x9e78a(0x1e9)][_0x9e78a(0x5c1)]=function(_0x40e36c){const _0x5b3a04=_0x9e78a;if(DataManager['isKeyItem'](_0x40e36c))return $dataSystem[_0x5b3a04(0x193)];return!![];},Window_Base[_0x9e78a(0x1e9)][_0x9e78a(0x2f7)]=function(_0x2063d9,_0x1f58ae,_0x9b4518,_0x78df0c,_0x54da99){const _0x3583f7=_0x9e78a;_0x54da99=Math[_0x3583f7(0x26e)](_0x54da99||0x1,0x1);while(_0x54da99--){if(_0x3583f7(0x3ab)==='rcgbF'){_0x78df0c=_0x78df0c||this[_0x3583f7(0x1ee)](),this['contentsBack'][_0x3583f7(0x443)]=0xa0;const _0x404e47=ColorManager[_0x3583f7(0x363)]();this['contentsBack'][_0x3583f7(0x243)](_0x2063d9+0x1,_0x1f58ae+0x1,_0x9b4518-0x2,_0x78df0c-0x2,_0x404e47),this[_0x3583f7(0x312)][_0x3583f7(0x443)]=0xff;}else{const _0x40277e=_0x3583f7(0x13a)[_0x3583f7(0x4a6)](_0x3b115b,_0xa3f87a);_0x1e16d3[_0x3583f7(0x331)][_0x3583f7(0x279)][_0x40277e]=new _0x2fc353(_0x3583f7(0x5ee),'paramId',_0x4cf95e);}}},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x3cc)]=Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)],Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)]=function(_0xbc1f83){const _0x1ab051=_0x9e78a;this[_0x1ab051(0x4f0)](),VisuMZ[_0x1ab051(0x331)][_0x1ab051(0x3cc)][_0x1ab051(0x20e)](this,_0xbc1f83);},Window_Selectable[_0x9e78a(0x1e9)]['initNewLabelSprites']=function(){const _0x300483=_0x9e78a;this[_0x300483(0x3f2)]={},this[_0x300483(0x3f8)]=0xff,this[_0x300483(0x144)]=VisuMZ[_0x300483(0x331)][_0x300483(0x5b0)][_0x300483(0x2e5)]['FadeSpeed'],this[_0x300483(0x2b0)]=VisuMZ['ItemsEquipsCore'][_0x300483(0x5b0)][_0x300483(0x2e5)]['FadeLimit'];},Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x1df)]=function(){return![];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x143)]=Window_Selectable[_0x9e78a(0x1e9)]['setHelpWindowItem'],Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x572)]=function(_0x3a29ba){const _0x8d850e=_0x9e78a;VisuMZ[_0x8d850e(0x331)]['Window_Selectable_setHelpWindowItem'][_0x8d850e(0x20e)](this,_0x3a29ba);if(this['isShowNew']())this['clearNewLabelFromItem'](_0x3a29ba);},Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x562)]=function(_0x2cc1d3){const _0x522343=_0x9e78a;if(!_0x2cc1d3)return;$gameParty[_0x522343(0x490)](_0x2cc1d3);let _0x11b87b='';if(DataManager[_0x522343(0x4d8)](_0x2cc1d3)){if(_0x522343(0x343)!==_0x522343(0x18d))_0x11b87b=_0x522343(0x1d8)[_0x522343(0x4a6)](_0x2cc1d3['id']);else return _0x5012a6['ItemsEquipsCore'][_0x522343(0x5b0)][_0x522343(0x444)][_0x522343(0x4f7)];}else{if(DataManager[_0x522343(0x613)](_0x2cc1d3))_0x11b87b=_0x522343(0x517)[_0x522343(0x4a6)](_0x2cc1d3['id']);else{if(DataManager['isArmor'](_0x2cc1d3))_0x11b87b=_0x522343(0x499)[_0x522343(0x4a6)](_0x2cc1d3['id']);else return;}}const _0x1985ee=this[_0x522343(0x3f2)][_0x11b87b];if(_0x1985ee)_0x1985ee[_0x522343(0x151)]();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x548)]=Window_Selectable['prototype']['refresh'],Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x303)]=function(){const _0x13a825=_0x9e78a;this['hideNewLabelSprites'](),VisuMZ[_0x13a825(0x331)][_0x13a825(0x548)][_0x13a825(0x20e)](this);},Window_Selectable[_0x9e78a(0x1e9)]['hideNewLabelSprites']=function(){const _0x17f90f=_0x9e78a;for(const _0x19ca02 of Object[_0x17f90f(0x164)](this[_0x17f90f(0x3f2)])){_0x17f90f(0x4b2)!=='mSqDf'?_0x19ca02['hide']():_0x58ec84=this[_0x17f90f(0x49e)][_0x17f90f(0x4d5)](_0x427936,!![]);}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x617)]=Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x2d6)],Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x2d6)]=function(){const _0x1bf853=_0x9e78a;this[_0x1bf853(0x3c8)](),VisuMZ[_0x1bf853(0x331)][_0x1bf853(0x617)][_0x1bf853(0x20e)](this);},Window_Selectable[_0x9e78a(0x1e9)]['updateNewLabelOpacity']=function(){const _0x3b90e3=_0x9e78a;if(!this[_0x3b90e3(0x1df)]())return;const _0x2a0ca6=this[_0x3b90e3(0x2b0)];this[_0x3b90e3(0x3f8)]+=this[_0x3b90e3(0x144)];(this[_0x3b90e3(0x3f8)]>=_0x2a0ca6||this[_0x3b90e3(0x3f8)]<=0x0)&&(this[_0x3b90e3(0x144)]*=-0x1);this[_0x3b90e3(0x3f8)]=this[_0x3b90e3(0x3f8)][_0x3b90e3(0x3ac)](0x0,_0x2a0ca6);for(const _0x2361a of Object['values'](this[_0x3b90e3(0x3f2)])){if('fCbQX'==='DuJvd'){const _0x1bc563=this[_0x3b90e3(0x187)];_0x1bc563[_0x3b90e3(0x281)][_0x3b90e3(0x59c)]();const _0x18f817=this[_0x3b90e3(0x2f5)](this[_0x3b90e3(0x4a2)]());if(_0x18f817===_0x3b90e3(0x60a)){const _0x24c589=this['itemLineRect'](this[_0x3b90e3(0x4a2)]());let _0xeb752e=this[_0x3b90e3(0x63c)](this[_0x3b90e3(0x4a2)]());_0xeb752e=_0xeb752e['replace'](/\\I\[(\d+)\]/gi,''),_0x1bc563[_0x3b90e3(0x293)](),this['commandNameWindowDrawBackground'](_0xeb752e,_0x24c589),this[_0x3b90e3(0x38b)](_0xeb752e,_0x24c589),this[_0x3b90e3(0x60f)](_0xeb752e,_0x24c589);}}else _0x2361a[_0x3b90e3(0x580)]=this[_0x3b90e3(0x3f8)];}},Window_Selectable[_0x9e78a(0x1e9)]['createNewLabelSprite']=function(_0x21d53e){const _0x5480f3=_0x9e78a,_0x5f0e1e=this['_newLabelSprites'];if(_0x5f0e1e[_0x21d53e])return _0x5f0e1e[_0x21d53e];else{const _0xa31250=new Sprite_NewLabel();return _0x5f0e1e[_0x21d53e]=_0xa31250,this[_0x5480f3(0x35e)](_0xa31250),_0xa31250;}},Window_Selectable[_0x9e78a(0x1e9)][_0x9e78a(0x4ee)]=function(_0x4b605b,_0x406bf1,_0x5ef14b){const _0xd41f65=_0x9e78a;let _0x542241='';if(DataManager['isItem'](_0x4b605b))_0xd41f65(0x4c6)===_0xd41f65(0x583)?(_0x239ed8+=_0x5b1844(_0x3fb816['$1']),_0x3e8b70+=_0x1745e6(_0x193a77['$2'])):_0x542241='item-%1'[_0xd41f65(0x4a6)](_0x4b605b['id']);else{if(DataManager[_0xd41f65(0x613)](_0x4b605b))_0x542241='weapon-%1'[_0xd41f65(0x4a6)](_0x4b605b['id']);else{if(DataManager['isArmor'](_0x4b605b)){if(_0xd41f65(0x30d)!==_0xd41f65(0x428))_0x542241=_0xd41f65(0x499)[_0xd41f65(0x4a6)](_0x4b605b['id']);else{const _0x2e5f6f='ADDED\x20EFFECTS';if(!this[_0xd41f65(0x3cb)][_0xd41f65(0x3bb)]&&!this[_0xd41f65(0x287)][_0x2e5f6f])return![];const _0x5d4099=this[_0xd41f65(0x196)]();this[_0xd41f65(0x61a)](_0x5d4099,_0x2a58fe,_0x158093,_0x2085e3,!![]);const _0x32590d=this['getItemEffectsAddedStatesBuffsText']();return this[_0xd41f65(0x61a)](_0x32590d,_0x223505,_0x4bac8b,_0x3ed28e,![],_0xd41f65(0x5f6)),this[_0xd41f65(0x2f7)](_0x3fd43,_0x2963b7,_0x3f6a90),this[_0xd41f65(0x293)](),!![];}}else return;}}const _0x47405f=this[_0xd41f65(0x483)](_0x542241);_0x47405f[_0xd41f65(0x5ca)](_0x406bf1,_0x5ef14b),_0x47405f[_0xd41f65(0x3c1)](),_0x47405f[_0xd41f65(0x580)]=this[_0xd41f65(0x3f8)];},Window_ItemCategory[_0x9e78a(0x4e9)]=VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5b0)]['Categories'][_0x9e78a(0x62c)],Window_ItemCategory[_0x9e78a(0x369)]=['HiddenItemA',_0x9e78a(0x344),_0x9e78a(0x3b0),_0x9e78a(0x219),_0x9e78a(0x166),_0x9e78a(0x5b1),_0x9e78a(0x3e1),_0x9e78a(0x500)],VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x197)]=Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)],Window_ItemCategory['prototype'][_0x9e78a(0x3d0)]=function(_0x1aa829){const _0xc95a3e=_0x9e78a;VisuMZ[_0xc95a3e(0x331)]['Window_ItemCategory_initialize'][_0xc95a3e(0x20e)](this,_0x1aa829),this[_0xc95a3e(0x3de)](_0x1aa829);},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x3de)]=function(_0x1cfe65){const _0xaa12b4=_0x9e78a,_0x25e8fe=new Rectangle(0x0,0x0,_0x1cfe65['width'],_0x1cfe65[_0xaa12b4(0x568)]);this[_0xaa12b4(0x43f)]=new Window_Base(_0x25e8fe),this[_0xaa12b4(0x43f)]['opacity']=0x0,this[_0xaa12b4(0x39d)](this[_0xaa12b4(0x43f)]),this[_0xaa12b4(0x402)]();},Window_ItemCategory['prototype'][_0x9e78a(0x1bf)]=function(){const _0x5e765b=_0x9e78a;return Imported[_0x5e765b(0x423)]&&Window_HorzCommand[_0x5e765b(0x1e9)][_0x5e765b(0x1bf)][_0x5e765b(0x20e)](this);},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x1db)]=function(){},Window_ItemCategory['prototype']['playOkSound']=function(){const _0x5dd240=_0x9e78a;if(!this['isUseModernControls']())Window_HorzCommand[_0x5dd240(0x1e9)][_0x5dd240(0x5d0)]['call'](this);},Window_ItemCategory['prototype'][_0x9e78a(0x276)]=function(){const _0x3cb7cd=_0x9e78a;return this[_0x3cb7cd(0x236)]?this['maxItems']():0x4;},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x2d6)]=function(){const _0x46f9d5=_0x9e78a;Window_HorzCommand[_0x46f9d5(0x1e9)]['update'][_0x46f9d5(0x20e)](this);if(this[_0x46f9d5(0x644)]){if('QgmVJ'==='KmZic')return this[_0x46f9d5(0x56c)][_0x2106b1];else this['_itemWindow'][_0x46f9d5(0x34e)](this[_0x46f9d5(0x523)]());}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x28e)]=function(){const _0x1c06e0=_0x9e78a;if(this[_0x1c06e0(0x455)]()){const _0x4e68a1=this[_0x1c06e0(0x4a2)]();if(this[_0x1c06e0(0x644)]&&this['_itemWindow']['maxCols']()<=0x1){if(_0x1c06e0(0x25c)!==_0x1c06e0(0x28f)){Input[_0x1c06e0(0x615)](_0x1c06e0(0x5f6))&&this[_0x1c06e0(0x537)](Input['isTriggered'](_0x1c06e0(0x5f6)));if(Input[_0x1c06e0(0x615)](_0x1c06e0(0x42d))){if(_0x1c06e0(0x29d)!==_0x1c06e0(0x29d)){const _0x33cfe7=/^\d+$/[_0x1c06e0(0x579)](_0x4a8243);let _0x32f433=0x0;_0x33cfe7?_0x32f433=_0x38d7d2(_0x278e99):_0x32f433=this[_0x1c06e0(0x389)](_0x81eac5),_0x32f433>0x1&&this['_cache_etypeIDs'][_0xcea847['id']][_0x1c06e0(0x51d)](_0x32f433);}else this[_0x1c06e0(0x388)](Input[_0x1c06e0(0x3df)](_0x1c06e0(0x42d)));}}else _0x156dcc=this[_0x1c06e0(0x49e)][_0x1c06e0(0x432)](_0x1c2b2a),_0x423ea7=this[_0x1c06e0(0x362)][_0x1c06e0(0x432)](_0x5a68a2),_0x1ca431=_0x347e00%0x1!==0x0||_0x139a5e%0x1!==0x0;}else{if(this['_itemWindow']&&this[_0x1c06e0(0x644)][_0x1c06e0(0x276)]()>0x1){if('kowZa'===_0x1c06e0(0x1aa)){if(Input[_0x1c06e0(0x615)](_0x1c06e0(0x160))&&!Input[_0x1c06e0(0x4e0)](_0x1c06e0(0x4a3))){if('DxKyq'!==_0x1c06e0(0x2a8))this[_0x1c06e0(0x537)](Input[_0x1c06e0(0x3df)](_0x1c06e0(0x160)));else{const _0x2b19ff=_0xd09d48(_0x229102['$1'])['split'](',')['map'](_0x573825=>_0x573825[_0x1c06e0(0x361)]());for(const _0x12e377 of _0x2b19ff){const _0x411605=/^\d+$/[_0x1c06e0(0x579)](_0x12e377);_0x411605?_0x561b7b[_0x1c06e0(0x51d)](_0x29e94b(_0x12e377)):_0x363995[_0x1c06e0(0x51d)](_0x2172cd[_0x1c06e0(0x2e7)](_0x12e377));}}}Input['isRepeated'](_0x1c06e0(0x5d2))&&!Input['isPressed']('shift')&&(_0x1c06e0(0x26a)!==_0x1c06e0(0x26a)?this[_0x1c06e0(0x46d)][_0x2a455d['id']]['push'](_0x31cc60):this[_0x1c06e0(0x388)](Input['isTriggered'](_0x1c06e0(0x5d2))));}else _0x31aecf=this[_0x1c06e0(0x389)](_0x1451bf);}}this[_0x1c06e0(0x4a2)]()!==_0x4e68a1&&this[_0x1c06e0(0x3e3)]();}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x167)]=function(){const _0x52fab1=_0x9e78a;if(this[_0x52fab1(0x1bf)]())return;Window_HorzCommand[_0x52fab1(0x1e9)][_0x52fab1(0x167)][_0x52fab1(0x20e)](this);},Window_ItemCategory[_0x9e78a(0x1e9)]['isHoverEnabled']=function(){const _0x5eaf12=_0x9e78a;if(this[_0x5eaf12(0x1bf)]()){if(_0x5eaf12(0x3ad)!=='OxneR')this[_0x5eaf12(0x61e)](_0x1e7de7);else return![];}else return Window_HorzCommand[_0x5eaf12(0x1e9)][_0x5eaf12(0x39b)][_0x5eaf12(0x20e)](this);},Window_ItemCategory[_0x9e78a(0x1e9)]['processTouchModernControls']=function(){const _0x188b9c=_0x9e78a;if(this[_0x188b9c(0x4b6)]()){TouchInput[_0x188b9c(0x3df)]()&&this[_0x188b9c(0x182)](!![]);if(TouchInput[_0x188b9c(0x625)]())'BAGea'===_0x188b9c(0x56b)?this[_0x188b9c(0x59e)]():this[_0x188b9c(0x250)]();else{if(TouchInput[_0x188b9c(0x485)]()){if('orEEJ'===_0x188b9c(0x2ee))this['onTouchCancel']();else{const _0xe2399b=this[_0x188b9c(0x4ea)]();switch(_0xe2399b){case _0x188b9c(0x2e3):return _0x2cb5bf[_0x188b9c(0x3d3)][_0x188b9c(0x2cf)][_0x188b9c(0x2e3)];case _0x188b9c(0x46b):return _0x5632a1[_0x188b9c(0x3d3)][_0x188b9c(0x2cf)][_0x188b9c(0x46b)];case'clear':return _0x15918[_0x188b9c(0x3d3)][_0x188b9c(0x2cf)][_0x188b9c(0x59c)];default:return'';}}}}}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x182)]=function(_0x21109f){const _0x12386d=_0x9e78a;this['isUseModernControls']()?this[_0x12386d(0x350)](!![]):Window_HorzCommand[_0x12386d(0x1e9)][_0x12386d(0x182)]['call'](this,_0x21109f);},Window_ItemCategory[_0x9e78a(0x1e9)]['onTouchSelectModern']=function(_0x522401){const _0x234fb4=_0x9e78a;this[_0x234fb4(0x55a)]=![];if(this[_0x234fb4(0x455)]()){const _0x5dc0ce=this[_0x234fb4(0x4a2)](),_0x4a225b=this[_0x234fb4(0x1ec)]();_0x4a225b>=0x0&&_0x4a225b!==this[_0x234fb4(0x4a2)]()&&this[_0x234fb4(0x407)](_0x4a225b),_0x522401&&this['index']()!==_0x5dc0ce&&(_0x234fb4(0x342)===_0x234fb4(0x342)?this[_0x234fb4(0x3e3)]():_0x356de7='foreground');}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x49d)]=function(){const _0x39350b=_0x9e78a;this[_0x39350b(0x5ac)](),this[_0x39350b(0x407)](this[_0x39350b(0x4a2)]());},Window_ItemCategory[_0x9e78a(0x1e9)]['addItemCategories']=function(){const _0x1858c5=_0x9e78a;for(const _0x4d81ca of Window_ItemCategory[_0x1858c5(0x4e9)]){if('nokmM'===_0x1858c5(0x259)){const _0x2a0d9d=_0x42592b(_0x1d05c9['$1'])[_0x1858c5(0x339)]()[_0x1858c5(0x361)](),_0x4314aa=_0x4dc034(_0xe8ffd7['$2'])['trim'](),_0x742caa=_0x312289(_0x317b76['$3']),_0x3ac8c3=[_0x1858c5(0x25f),_0x1858c5(0x53f),_0x1858c5(0x1a4),'mdf',_0x1858c5(0x590),_0x1858c5(0x424)];let _0x14df77=_0x3ac8c3['indexOf'](_0x2a0d9d)+0x2;if(_0x14df77<0x2)return![];const _0x42cb71=_0x444f25[_0x1858c5(0x55c)][_0x14df77]||0x0;switch(_0x4314aa){case'>':return _0x1744c6[_0x1858c5(0x507)](_0x14df77)+_0x42cb71>_0x742caa;case'>=':return _0x2ba104[_0x1858c5(0x507)](_0x14df77)+_0x42cb71>=_0x742caa;case _0x1858c5(0x320):return _0x2984fa[_0x1858c5(0x507)](_0x14df77)+_0x42cb71===_0x742caa;case'<=':return _0x410edb[_0x1858c5(0x507)](_0x14df77)+_0x42cb71<=_0x742caa;case'<':return _0x621c7a[_0x1858c5(0x507)](_0x14df77)+_0x42cb71<_0x742caa;}return![];}else this[_0x1858c5(0x3ed)](_0x4d81ca);}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x3ed)]=function(_0x48c62d){const _0x43cd54=_0x9e78a,_0x51995d=_0x48c62d['Type'],_0x43ec06=_0x48c62d[_0x43cd54(0x4b8)],_0xae847f=_0x48c62d[_0x43cd54(0x360)]||0x0;if(_0xae847f>0x0&&!$gameSwitches[_0x43cd54(0x4d3)](_0xae847f))return;let _0x2946a0='',_0x23e28f=_0x43cd54(0x37e),_0x322ff2=_0x51995d;if(_0x51995d[_0x43cd54(0x3cf)](/Category:(.*)/i))_0x2946a0=String(RegExp['$1'])[_0x43cd54(0x361)]();else{if(Window_ItemCategory[_0x43cd54(0x369)][_0x43cd54(0x285)](_0x51995d)){if(_0x43cd54(0x310)===_0x43cd54(0x64a))return _0xc25290[_0x43cd54(0x19a)]&&_0x43b8c5[_0x43cd54(0x19a)]['Settings'][_0x43cd54(0x1e1)][_0x43cd54(0x1a5)]&&_0x38fde1[_0x43cd54(0x2fe)](this['_item'])?![]:this[_0x43cd54(0x262)][_0x43cd54(0x1e8)];else _0x2946a0=VisuMZ[_0x43cd54(0x331)]['Settings'][_0x43cd54(0x5f0)][_0x51995d];}else{if([_0x43cd54(0x511),_0x43cd54(0x42a)]['includes'](_0x51995d))_0x2946a0=TextManager[_0x43cd54(0x5ee)];else{if(_0x51995d===_0x43cd54(0x3b8)){if(_0x43cd54(0x3ee)!==_0x43cd54(0x3ee))return!this['nonRemovableEtypes']()[_0x43cd54(0x285)](this['etypeId']());else _0x2946a0=TextManager[_0x43cd54(0x2da)];}else{if(_0x51995d==='AllWeapons'){if(_0x43cd54(0x3b4)!=='msBWj')return _0x5b92dc['VisuMZ_0_CoreEngine']&&_0x3e53b6[_0x43cd54(0x1e9)][_0x43cd54(0x1bf)]['call'](this);else _0x2946a0=TextManager[_0x43cd54(0x168)];}else{if(_0x51995d==='AllArmors')_0x2946a0=TextManager[_0x43cd54(0x1c8)];else{if(_0x51995d['match'](/WTYPE:(\d+)/i))_0x43cd54(0x5dd)!==_0x43cd54(0x5dd)?(_0x260667['ItemsEquipsCore'][_0x43cd54(0x606)][_0x43cd54(0x20e)](this,_0x5285ec),this[_0x43cd54(0x3fc)](_0x5f2347)):_0x2946a0=$dataSystem[_0x43cd54(0x5f5)][Number(RegExp['$1'])]||'';else{if(_0x51995d[_0x43cd54(0x3cf)](/ATYPE:(\d+)/i)){if(_0x43cd54(0x1bb)===_0x43cd54(0x1bb))_0x2946a0=$dataSystem[_0x43cd54(0x516)][Number(RegExp['$1'])]||'';else{const _0x243732=_0x1d014a(_0x18467a['$1'])[_0x43cd54(0x361)](),_0x155060=_0x56a7dc(_0x41e6fc['$2']);switch(_0x243732){case'>':return _0x5c65e8['level']>_0x155060;case'>=':return _0x440d99[_0x43cd54(0x546)]>=_0x155060;case _0x43cd54(0x320):return _0x283545[_0x43cd54(0x546)]===_0x155060;case'<=':return _0x4f3de4[_0x43cd54(0x546)]<=_0x155060;case'<':return _0x2f19de[_0x43cd54(0x546)]<_0x155060;}return![];}}else{if(_0x51995d['match'](/ETYPE:(\d+)/i)){if('lnGyV'!==_0x43cd54(0x5ea))return _0x3cd1b4[_0x43cd54(0x331)][_0x43cd54(0x5b0)]['EquipScene'][_0x43cd54(0x3f3)];else _0x2946a0=$dataSystem[_0x43cd54(0x3ff)][Number(RegExp['$1'])]||'';}}}}}}}}}_0x43ec06>0x0&&this['categoryStyle']()!==_0x43cd54(0x2e4)&&(_0x43cd54(0x61b)!==_0x43cd54(0x41e)?_0x2946a0='\x5cI[%1]%2'[_0x43cd54(0x4a6)](_0x43ec06,_0x2946a0):this['_goods'][_0x43cd54(0x46c)](_0x2891c5)),this[_0x43cd54(0x30a)](_0x2946a0,_0x23e28f,!![],_0x322ff2);},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x5e7)]=function(){const _0x14ac71=_0x9e78a;return VisuMZ[_0x14ac71(0x331)]['Settings'][_0x14ac71(0x5f0)][_0x14ac71(0x263)];},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x1d0)]=function(_0x560ffb){const _0x1b415a=_0x9e78a,_0x551a65=this['categoryStyleCheck'](_0x560ffb);if(_0x551a65==='iconText')this[_0x1b415a(0x61e)](_0x560ffb);else _0x551a65===_0x1b415a(0x60a)?this[_0x1b415a(0x601)](_0x560ffb):Window_HorzCommand[_0x1b415a(0x1e9)][_0x1b415a(0x1d0)][_0x1b415a(0x20e)](this,_0x560ffb);},Window_ItemCategory[_0x9e78a(0x1e9)]['categoryStyle']=function(){const _0x4c1a48=_0x9e78a;return VisuMZ[_0x4c1a48(0x331)][_0x4c1a48(0x5b0)][_0x4c1a48(0x5f0)][_0x4c1a48(0x4fa)];},Window_ItemCategory[_0x9e78a(0x1e9)]['categoryStyleCheck']=function(_0x312b78){const _0x34a9dc=_0x9e78a;if(_0x312b78<0x0)return _0x34a9dc(0x2e4);const _0x365b4b=this[_0x34a9dc(0x3c2)]();if(_0x365b4b!==_0x34a9dc(0x338)){if(_0x34a9dc(0x614)===_0x34a9dc(0x614))return _0x365b4b;else this[_0x34a9dc(0x56a)](this['index']())?(this[_0x34a9dc(0x4a9)](),this['updateHelp']()):this[_0x34a9dc(0x130)]();}else{const _0x39dcb5=this[_0x34a9dc(0x63c)](_0x312b78);if(_0x39dcb5[_0x34a9dc(0x3cf)](/\\I\[(\d+)\]/i)){if('yisPz'==='yisPz'){const _0x1d48ce=this['itemLineRect'](_0x312b78),_0x15784e=this['textSizeEx'](_0x39dcb5)['width'];return _0x15784e<=_0x1d48ce[_0x34a9dc(0x1d2)]?_0x34a9dc(0x515):'icon';}else return!!_0x3babb2&&_0x1275c5[_0x34a9dc(0x4bf)][_0x34a9dc(0x285)](_0x10f79e(_0x4afb90['$1'])[_0x34a9dc(0x289)]()[_0x34a9dc(0x361)]());}else return _0x34a9dc(0x2e4);}},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x61e)]=function(_0x42797a){const _0x557296=_0x9e78a,_0x22ab78=this[_0x557296(0x3f7)](_0x42797a),_0x8fbe02=this[_0x557296(0x63c)](_0x42797a),_0x10e5a8=this['textSizeEx'](_0x8fbe02)[_0x557296(0x1d2)];this[_0x557296(0x23f)](this[_0x557296(0x5ec)](_0x42797a));const _0x263086=this[_0x557296(0x5e7)]();if(_0x263086===_0x557296(0x5f6))this[_0x557296(0x42c)](_0x8fbe02,_0x22ab78['x']+_0x22ab78['width']-_0x10e5a8,_0x22ab78['y'],_0x10e5a8);else{if(_0x263086===_0x557296(0x550)){const _0x18a611=_0x22ab78['x']+Math[_0x557296(0x207)]((_0x22ab78[_0x557296(0x1d2)]-_0x10e5a8)/0x2);this[_0x557296(0x42c)](_0x8fbe02,_0x18a611,_0x22ab78['y'],_0x10e5a8);}else _0x557296(0x29c)===_0x557296(0x29c)?this[_0x557296(0x42c)](_0x8fbe02,_0x22ab78['x'],_0x22ab78['y'],_0x10e5a8):this['artifactIDs'][_0x557296(0x38c)][_0x557296(0x51d)](_0x53efbb['id']);}},Window_ItemCategory['prototype'][_0x9e78a(0x601)]=function(_0x133858){const _0x5472b9=_0x9e78a,_0x7f4374=this[_0x5472b9(0x63c)](_0x133858);if(_0x7f4374[_0x5472b9(0x3cf)](/\\I\[(\d+)\]/i)){if(_0x5472b9(0x44b)==='JPPQR')this[_0x5472b9(0x27a)][_0x1c3c2d]['setObject'](null);else{const _0x580ca3=Number(RegExp['$1'])||0x0,_0x52e40f=this[_0x5472b9(0x3f7)](_0x133858),_0x330520=_0x52e40f['x']+Math[_0x5472b9(0x207)]((_0x52e40f['width']-ImageManager['iconWidth'])/0x2),_0x28c6ff=_0x52e40f['y']+(_0x52e40f[_0x5472b9(0x568)]-ImageManager[_0x5472b9(0x422)])/0x2;this[_0x5472b9(0x1be)](_0x580ca3,_0x330520,_0x28c6ff);}}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x62a)]=Window_ItemCategory['prototype'][_0x9e78a(0x220)],Window_ItemCategory['prototype'][_0x9e78a(0x220)]=function(_0x3184df){const _0x4f02b0=_0x9e78a;VisuMZ[_0x4f02b0(0x331)][_0x4f02b0(0x62a)][_0x4f02b0(0x20e)](this,_0x3184df),_0x3184df[_0x4f02b0(0x3eb)]=this;},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x54f)]=function(){const _0x4dd8b3=_0x9e78a;Window_HorzCommand['prototype']['callUpdateHelp'][_0x4dd8b3(0x20e)](this);if(this[_0x4dd8b3(0x43f)])this[_0x4dd8b3(0x402)]();},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x402)]=function(){const _0x216252=_0x9e78a,_0x19ce4f=this[_0x216252(0x43f)];_0x19ce4f[_0x216252(0x281)][_0x216252(0x59c)]();const _0x7a8d19=this[_0x216252(0x2e8)](this[_0x216252(0x4a2)]());if(_0x7a8d19===_0x216252(0x60a)){if(_0x216252(0x20d)===_0x216252(0x49f))return this[_0x216252(0x3e3)](),_0x5975af[_0x216252(0x59c)](),_0x246c2e[_0x216252(0x5d1)][_0x216252(0x2d8)](),![];else{const _0x1c7d6a=this[_0x216252(0x3f7)](this['index']());let _0x5ea0b0=this[_0x216252(0x63c)](this['index']());_0x5ea0b0=_0x5ea0b0[_0x216252(0x203)](/\\I\[(\d+)\]/gi,''),_0x19ce4f[_0x216252(0x293)](),this[_0x216252(0x493)](_0x5ea0b0,_0x1c7d6a),this[_0x216252(0x1b9)](_0x5ea0b0,_0x1c7d6a),this[_0x216252(0x5cb)](_0x5ea0b0,_0x1c7d6a);}}},Window_ItemCategory[_0x9e78a(0x1e9)]['categoryNameWindowDrawBackground']=function(_0x1b74f3,_0x429157){},Window_ItemCategory['prototype'][_0x9e78a(0x1b9)]=function(_0x649edb,_0x1a54ff){const _0x4a248e=_0x9e78a,_0x106e9c=this[_0x4a248e(0x43f)];_0x106e9c[_0x4a248e(0x3ce)](_0x649edb,0x0,_0x1a54ff['y'],_0x106e9c[_0x4a248e(0x513)],_0x4a248e(0x550));},Window_ItemCategory[_0x9e78a(0x1e9)][_0x9e78a(0x5cb)]=function(_0x5b1961,_0x1cd25b){const _0x112339=_0x9e78a,_0xfe28f1=this['_categoryNameWindow'],_0x372cd5=$gameSystem[_0x112339(0x325)](),_0x47c7aa=_0x1cd25b['x']+Math['floor'](_0x1cd25b[_0x112339(0x1d2)]/0x2)+_0x372cd5;_0xfe28f1['x']=_0xfe28f1[_0x112339(0x1d2)]/-0x2+_0x47c7aa,_0xfe28f1['y']=Math[_0x112339(0x207)](_0x1cd25b[_0x112339(0x568)]/0x2);},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x28e)]=function(){const _0x30326d=_0x9e78a;if(this[_0x30326d(0x455)]()){const _0x46b09f=this['index']();if(this[_0x30326d(0x276)]()<=0x1)!this[_0x30326d(0x40b)](_0x30326d(0x160))&&Input[_0x30326d(0x3df)](_0x30326d(0x160))&&(_0x30326d(0x13b)===_0x30326d(0x13b)?this[_0x30326d(0x375)]():_0x461383[_0x30326d(0x1e9)][_0x30326d(0x649)][_0x30326d(0x20e)](this,_0x779302,_0x3f44f5,_0x5426c5,_0x252002)),!this[_0x30326d(0x40b)]('pageup')&&Input[_0x30326d(0x3df)](_0x30326d(0x5d2))&&this[_0x30326d(0x174)]();else this['maxCols']()>0x1&&(Input[_0x30326d(0x615)](_0x30326d(0x5f6))&&this[_0x30326d(0x537)](Input[_0x30326d(0x3df)](_0x30326d(0x5f6))),Input[_0x30326d(0x615)](_0x30326d(0x42d))&&this[_0x30326d(0x388)](Input[_0x30326d(0x3df)](_0x30326d(0x42d))),this[_0x30326d(0x48d)]()?(Input[_0x30326d(0x3df)](_0x30326d(0x160))&&Input['isPressed'](_0x30326d(0x4a3))&&this[_0x30326d(0x375)](),Input['isTriggered'](_0x30326d(0x5d2))&&Input[_0x30326d(0x4e0)](_0x30326d(0x4a3))&&this[_0x30326d(0x174)]()):(Input['isTriggered'](_0x30326d(0x160))&&this[_0x30326d(0x375)](),Input[_0x30326d(0x3df)](_0x30326d(0x5d2))&&this[_0x30326d(0x174)]()));Input['isRepeated'](_0x30326d(0x1f7))&&(Input[_0x30326d(0x4e0)]('shift')&&this[_0x30326d(0x2fa)]()?this[_0x30326d(0x375)]():this['cursorDown'](Input['isTriggered'](_0x30326d(0x1f7))));if(Input[_0x30326d(0x615)]('up')){if(_0x30326d(0x18f)!==_0x30326d(0x18f)){if(!this[_0x30326d(0x1df)]())return;const _0x570d59=this['_newLabelOpacityUpperLimit'];this[_0x30326d(0x3f8)]+=this[_0x30326d(0x144)];(this[_0x30326d(0x3f8)]>=_0x570d59||this[_0x30326d(0x3f8)]<=0x0)&&(this[_0x30326d(0x144)]*=-0x1);this[_0x30326d(0x3f8)]=this[_0x30326d(0x3f8)][_0x30326d(0x3ac)](0x0,_0x570d59);for(const _0x46ddb8 of _0x3b4356[_0x30326d(0x164)](this[_0x30326d(0x3f2)])){_0x46ddb8[_0x30326d(0x580)]=this[_0x30326d(0x3f8)];}}else{if(Input[_0x30326d(0x4e0)](_0x30326d(0x4a3))&&this[_0x30326d(0x2fa)]())this['cursorPageup']();else{if('SCknH'===_0x30326d(0x3e9))this[_0x30326d(0x567)](Input[_0x30326d(0x3df)]('up'));else{this[_0x30326d(0x63c)](_0x36ccca)['match'](/\\I\[(\d+)\]/i);const _0x583d15=_0x27cc51(_0x4b32f1['$1'])||0x0,_0x1ac5af=this[_0x30326d(0x3f7)](_0x4f5526),_0x4b606f=_0x1ac5af['x']+_0x2bcbe0[_0x30326d(0x207)]((_0x1ac5af[_0x30326d(0x1d2)]-_0x842443[_0x30326d(0x2fb)])/0x2),_0x1bbeaa=_0x1ac5af['y']+(_0x1ac5af[_0x30326d(0x568)]-_0x24ab3c[_0x30326d(0x422)])/0x2;this[_0x30326d(0x1be)](_0x583d15,_0x4b606f,_0x1bbeaa);}}}}if(Imported[_0x30326d(0x423)]){if('AAjmA'===_0x30326d(0x4b9))return _0x32f5cf[_0x30326d(0x331)][_0x30326d(0x28a)][_0x30326d(0x20e)](this);else this['processCursorHomeEndTrigger']();}this[_0x30326d(0x4a2)]()!==_0x46b09f&&this['playCursorSound']();}},Window_ItemList[_0x9e78a(0x1e9)]['limitedPageUpDownSceneCheck']=function(){const _0x947642=_0x9e78a,_0x1dd6a0=SceneManager[_0x947642(0x5d1)],_0x24d2d4=[Scene_Item,Scene_Shop];return _0x24d2d4['includes'](_0x1dd6a0['constructor']);},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x3c9)]=function(){const _0x9c89de=_0x9e78a;Window_Selectable[_0x9c89de(0x1e9)][_0x9c89de(0x3c9)][_0x9c89de(0x20e)](this),this['_categoryWindow']&&this[_0x9c89de(0x3eb)][_0x9c89de(0x1bf)]()&&this[_0x9c89de(0x3eb)][_0x9c89de(0x3c9)]();},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x2e1)]=function(){const _0x3b68d8=_0x9e78a;Window_Selectable[_0x3b68d8(0x1e9)][_0x3b68d8(0x2e1)][_0x3b68d8(0x20e)](this),this[_0x3b68d8(0x3eb)]&&this[_0x3b68d8(0x3eb)]['isUseModernControls']()&&this['_categoryWindow'][_0x3b68d8(0x2e1)]();},Window_ItemList[_0x9e78a(0x1e9)]['setCategory']=function(_0x548a20){const _0x586aa2=_0x9e78a;if(this[_0x586aa2(0x345)]!==_0x548a20){this['_category']=_0x548a20,this['refresh']();if(this[_0x586aa2(0x3eb)]&&this[_0x586aa2(0x3eb)][_0x586aa2(0x1bf)]()){if(_0x586aa2(0x635)==='QHoVo')this[_0x586aa2(0x564)](0x0);else{if(!_0xe68089)return 0x63;else return _0x214fe7[_0x586aa2(0x173)]['match'](/<MAX:[ ](\d+)>/i)?_0x193531(_0x2295cc['$1']):this[_0x586aa2(0x2db)](_0x59017a);}}else{if(_0x586aa2(0x1f0)!==_0x586aa2(0x45d))this['scrollTo'](0x0,0x0);else{_0x132373+=_0x586aa2(0x3ef)['format'](_0x226cd6),_0x3b73c5++;if(_0x2af8c3>=_0x1c5fed)return _0x1a6be4;}}}},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x3c7)]=Window_ItemList[_0x9e78a(0x1e9)]['maxCols'],Window_ItemList['prototype'][_0x9e78a(0x276)]=function(){const _0x2147fb=_0x9e78a;if(SceneManager['_scene']['constructor']===Scene_Battle)return VisuMZ[_0x2147fb(0x331)][_0x2147fb(0x3c7)][_0x2147fb(0x20e)](this);else return SceneManager[_0x2147fb(0x5d1)]['constructor']===Scene_Map?VisuMZ[_0x2147fb(0x331)][_0x2147fb(0x3c7)][_0x2147fb(0x20e)](this):_0x2147fb(0x240)!==_0x2147fb(0x240)?'%1%'[_0x2147fb(0x4a6)](_0x24173d(_0x5b7ba8['$1'])):VisuMZ[_0x2147fb(0x331)]['Settings']['ItemScene'][_0x2147fb(0x1fe)];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x134)]=Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x3d6)],Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x3d6)]=function(){const _0x1fec75=_0x9e78a;if(this[_0x1fec75(0x276)]()<=0x1)return Window_Selectable['prototype'][_0x1fec75(0x3d6)]['call'](this);else{if(_0x1fec75(0x477)==='KnLaw')return VisuMZ[_0x1fec75(0x331)][_0x1fec75(0x134)][_0x1fec75(0x20e)](this);else _0x52706b[_0x1fec75(0x1e9)][_0x1fec75(0x2e1)][_0x1fec75(0x20e)](this),this['_categoryWindow']&&this[_0x1fec75(0x3eb)][_0x1fec75(0x1bf)]()&&this['_categoryWindow']['deactivate']();}},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x285)]=function(_0x42358c){const _0xc30c3f=_0x9e78a;switch(this[_0xc30c3f(0x345)]){case _0xc30c3f(0x511):return DataManager[_0xc30c3f(0x4d8)](_0x42358c);case _0xc30c3f(0x42a):return DataManager['isItem'](_0x42358c)&&_0x42358c[_0xc30c3f(0x3ea)]===0x1;case _0xc30c3f(0x3b8):return DataManager[_0xc30c3f(0x4d8)](_0x42358c)&&_0x42358c[_0xc30c3f(0x3ea)]===0x2;case _0xc30c3f(0x1cc):return DataManager['isItem'](_0x42358c)&&_0x42358c['itypeId']===0x3;case _0xc30c3f(0x344):return DataManager[_0xc30c3f(0x4d8)](_0x42358c)&&_0x42358c[_0xc30c3f(0x3ea)]===0x4;case _0xc30c3f(0x219):return DataManager['isItem'](_0x42358c)&&_0x42358c['consumable'];case'Nonconsumable':return DataManager['isItem'](_0x42358c)&&!_0x42358c[_0xc30c3f(0x1e8)];case _0xc30c3f(0x166):return DataManager[_0xc30c3f(0x4d8)](_0x42358c)&&[0x0][_0xc30c3f(0x285)](_0x42358c[_0xc30c3f(0x211)]);case _0xc30c3f(0x5b1):return DataManager['isItem'](_0x42358c)&&[0x0,0x1][_0xc30c3f(0x285)](_0x42358c[_0xc30c3f(0x211)]);case _0xc30c3f(0x3e1):return DataManager[_0xc30c3f(0x4d8)](_0x42358c)&&[0x0,0x2]['includes'](_0x42358c[_0xc30c3f(0x211)]);case _0xc30c3f(0x500):return DataManager[_0xc30c3f(0x4d8)](_0x42358c)&&[0x3][_0xc30c3f(0x285)](_0x42358c['occasion']);case _0xc30c3f(0x245):return DataManager['isWeapon'](_0x42358c);case _0xc30c3f(0x26c):return DataManager['isArmor'](_0x42358c);default:if(this[_0xc30c3f(0x345)][_0xc30c3f(0x3cf)](/WTYPE:(\d+)/i))return DataManager['isWeapon'](_0x42358c)&&_0x42358c[_0xc30c3f(0x3c5)]===Number(RegExp['$1']);else{if(this[_0xc30c3f(0x345)][_0xc30c3f(0x3cf)](/WTYPE:(.*)/i)){const _0x589352=$dataSystem[_0xc30c3f(0x5f5)][_0xc30c3f(0x63b)](String(RegExp['$1'])[_0xc30c3f(0x361)]());return DataManager['isWeapon'](_0x42358c)&&_0x42358c[_0xc30c3f(0x3c5)]===_0x589352;}else{if(this['_category'][_0xc30c3f(0x3cf)](/ATYPE:(\d+)/i)){if(_0xc30c3f(0x323)!==_0xc30c3f(0x323)){if(_0x5de7a2['id']===_0x2b55d0['id'])_0x59f0fe+=0x1;}else return DataManager[_0xc30c3f(0x525)](_0x42358c)&&_0x42358c[_0xc30c3f(0x180)]===Number(RegExp['$1']);}else{if(this[_0xc30c3f(0x345)][_0xc30c3f(0x3cf)](/ATYPE:(.*)/i)){const _0x1648e5=$dataSystem[_0xc30c3f(0x516)][_0xc30c3f(0x63b)](String(RegExp['$1'])[_0xc30c3f(0x361)]());return DataManager['isArmor'](_0x42358c)&&_0x42358c[_0xc30c3f(0x180)]===_0x1648e5;}else{if(this[_0xc30c3f(0x345)][_0xc30c3f(0x3cf)](/ETYPE:(\d+)/i))return!!_0x42358c&&_0x42358c[_0xc30c3f(0x589)]===Number(RegExp['$1']);else{if(this[_0xc30c3f(0x345)]['match'](/ETYPE:(.*)/i)){const _0xf82671=$dataSystem[_0xc30c3f(0x3ff)][_0xc30c3f(0x63b)](String(RegExp['$1'])['trim']());return DataManager[_0xc30c3f(0x525)](_0x42358c)&&_0x42358c[_0xc30c3f(0x589)]===_0xf82671;}else{if(this[_0xc30c3f(0x345)][_0xc30c3f(0x3cf)](/Category:(.*)/i))return!!_0x42358c&&_0x42358c[_0xc30c3f(0x4bf)]['includes'](String(RegExp['$1'])[_0xc30c3f(0x289)]()[_0xc30c3f(0x361)]());}}}}}}}return![];},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x1df)]=function(){return!![];},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x609)]=Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x1d0)],Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x1d0)]=function(_0x44f6a8){const _0x39d582=_0x9e78a;VisuMZ[_0x39d582(0x331)][_0x39d582(0x609)][_0x39d582(0x20e)](this,_0x44f6a8),this[_0x39d582(0x2ec)](_0x44f6a8);},Window_ItemList['prototype']['drawItemNumber']=function(_0x1b0ead,_0x281699,_0x3af12e,_0x5ace4f){const _0x2bf8e6=_0x9e78a;Window_Selectable[_0x2bf8e6(0x1e9)][_0x2bf8e6(0x649)][_0x2bf8e6(0x20e)](this,_0x1b0ead,_0x281699,_0x3af12e,_0x5ace4f);},Window_ItemList['prototype'][_0x9e78a(0x2ec)]=function(_0x2fbaf5){const _0x25b10d=_0x9e78a,_0xf1f7f3=this[_0x25b10d(0x1b8)](_0x2fbaf5);if(!_0xf1f7f3||!this['isShowNew']())return;if(!$gameParty[_0x25b10d(0x536)](_0xf1f7f3))return;const _0x218a20=this[_0x25b10d(0x3f7)](_0x2fbaf5),_0x63b292=_0x218a20['x'],_0x2ed465=_0x218a20['y']+(this[_0x25b10d(0x1ee)]()-ImageManager['iconHeight'])/0x2,_0x1da28e=VisuMZ['ItemsEquipsCore'][_0x25b10d(0x5b0)][_0x25b10d(0x2e5)][_0x25b10d(0x15c)],_0x3b8f31=VisuMZ[_0x25b10d(0x331)]['Settings'][_0x25b10d(0x2e5)][_0x25b10d(0x52f)];this[_0x25b10d(0x4ee)](_0xf1f7f3,_0x63b292+_0x1da28e,_0x2ed465+_0x3b8f31);},Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x55b)]=function(_0x13deb2){const _0x51c95e=_0x9e78a;this[_0x51c95e(0x4d4)]=_0x13deb2,this[_0x51c95e(0x54f)]();},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1e3)]=Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x367)],Window_ItemList[_0x9e78a(0x1e9)][_0x9e78a(0x367)]=function(){const _0x5ebeb4=_0x9e78a;VisuMZ[_0x5ebeb4(0x331)][_0x5ebeb4(0x1e3)][_0x5ebeb4(0x20e)](this),this[_0x5ebeb4(0x4d4)]&&this[_0x5ebeb4(0x4d4)][_0x5ebeb4(0x354)]===Window_ShopStatus&&this['_statusWindow'][_0x5ebeb4(0x23b)](this[_0x5ebeb4(0x5ee)]());},Window_BattleItem[_0x9e78a(0x1e9)][_0x9e78a(0x156)]=function(_0x4d9be2){const _0x1a311b=_0x9e78a;return BattleManager['actor']()?BattleManager['actor']()[_0x1a311b(0x3b6)](_0x4d9be2):Window_ItemList['prototype'][_0x1a311b(0x156)][_0x1a311b(0x20e)](this,_0x4d9be2);},Window_EventItem[_0x9e78a(0x1e9)][_0x9e78a(0x1df)]=function(){return![];},Window_EquipStatus['prototype'][_0x9e78a(0x1e7)]=function(){const _0x12a778=_0x9e78a;return VisuMZ[_0x12a778(0x331)][_0x12a778(0x5b0)][_0x12a778(0x399)]['EnableLayout'];},VisuMZ[_0x9e78a(0x331)]['Window_EquipStatus_refresh']=Window_EquipStatus[_0x9e78a(0x1e9)]['refresh'],Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x303)]=function(){const _0x18a786=_0x9e78a;this[_0x18a786(0x275)](),this[_0x18a786(0x293)]();if(this[_0x18a786(0x49e)])this[_0x18a786(0x49e)]['refresh']();if(this[_0x18a786(0x1e7)]())this[_0x18a786(0x5b9)]();else{if(_0x18a786(0x257)!==_0x18a786(0x257)){if(!_0x3e17d5)return![];if(!_0x1c1ba6[_0x18a786(0x331)]['Game_BattlerBase_meetsItemConditions']['call'](this,_0x3cfd60))return![];if(!this[_0x18a786(0x557)](_0x34ea91))return![];if(!this[_0x18a786(0x554)](_0x4d3c3f))return![];return!![];}else VisuMZ[_0x18a786(0x331)][_0x18a786(0x2cb)][_0x18a786(0x20e)](this);}},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x5b9)]=function(){const _0x15f453=_0x9e78a;this[_0x15f453(0x281)][_0x15f453(0x59c)]();if(!this['_actor'])return;if(this['isMainMenuCoreMenuImageOptionAvailable']()){const _0x76cffd=ImageManager[_0x15f453(0x4b7)](this[_0x15f453(0x49e)]['getMenuImage']());_0x76cffd[_0x15f453(0x58c)](this[_0x15f453(0x231)][_0x15f453(0x376)](this));}else _0x15f453(0x4a7)!==_0x15f453(0x54e)?this[_0x15f453(0x4ec)]():this[_0x15f453(0x644)][_0x15f453(0x34e)](this[_0x15f453(0x523)]());},Window_EquipStatus['prototype']['isMainMenuCoreMenuImageOptionAvailable']=function(){const _0x29fdaa=_0x9e78a;return Imported[_0x29fdaa(0x2ea)]&&this[_0x29fdaa(0x49e)][_0x29fdaa(0x396)]()!==''&&VisuMZ['ItemsEquipsCore'][_0x29fdaa(0x5b0)][_0x29fdaa(0x399)][_0x29fdaa(0x16c)];},Window_EquipStatus['prototype'][_0x9e78a(0x231)]=function(){const _0x50426f=_0x9e78a;VisuMZ['ItemsEquipsCore']['Settings'][_0x50426f(0x399)][_0x50426f(0x469)][_0x50426f(0x20e)](this),this['drawParamsItemsEquipsCore']();},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x4ec)]=function(){const _0x15c6e5=_0x9e78a;VisuMZ[_0x15c6e5(0x331)]['Settings']['EquipScene']['DrawFaceJS'][_0x15c6e5(0x20e)](this),this[_0x15c6e5(0x633)]();},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x633)]=function(){const _0x2678a8=_0x9e78a;this[_0x2678a8(0x293)](),VisuMZ[_0x2678a8(0x331)][_0x2678a8(0x5b0)][_0x2678a8(0x399)][_0x2678a8(0x55d)][_0x2678a8(0x20e)](this);},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x1b1)]=function(_0x368388,_0xb6b662,_0x499165,_0xd762c0,_0x253bd9){const _0x4788b4=_0x9e78a,_0x40a8dc=ImageManager[_0x4788b4(0x4b7)](_0x368388[_0x4788b4(0x396)]()),_0x1fb276=this[_0x4788b4(0x513)]-_0x40a8dc['width'];_0xb6b662+=_0x1fb276/0x2;if(_0x1fb276<0x0)_0xd762c0-=_0x1fb276;Window_StatusBase[_0x4788b4(0x1e9)]['drawItemActorMenuImage']['call'](this,_0x368388,_0xb6b662,_0x499165,_0xd762c0,_0x253bd9);},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x221)]=function(){const _0x52cd3d=_0x9e78a;if(Imported[_0x52cd3d(0x423)])return VisuMZ[_0x52cd3d(0x19a)][_0x52cd3d(0x5b0)]['Param']['ExtDisplayedParams'];else{if(_0x52cd3d(0x4c9)!==_0x52cd3d(0x4c9)){const _0x164876=_0x100fab(_0xc803a['$1']),_0x14bfac=_0x52cd3d(0x437)[_0x52cd3d(0x4a6)](_0x164876);_0x22dc24[_0x52cd3d(0x331)]['itemEnableJS'][_0x427c38['id']]=new _0x515b78(_0x52cd3d(0x5ee),_0x14bfac);}else return[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];}},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x308)]=function(){const _0x3f7708=_0x9e78a;return VisuMZ[_0x3f7708(0x331)][_0x3f7708(0x5b0)][_0x3f7708(0x399)][_0x3f7708(0x252)];},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x213)]=function(){const _0x3b216d=_0x9e78a;return Imported[_0x3b216d(0x423)]&&VisuMZ[_0x3b216d(0x19a)][_0x3b216d(0x5b0)][_0x3b216d(0x571)]['DrawIcons'];},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x21d)]=function(_0x535805,_0x3831d6,_0x44eed7,_0x5ea4e5){const _0x150545=_0x9e78a,_0x2c906c=this['itemPadding']();if(Imported[_0x150545(0x423)]){if(_0x150545(0x206)===_0x150545(0x206))this[_0x150545(0x2dc)](_0x3831d6+_0x2c906c,_0x44eed7,_0x5ea4e5,_0x535805,![]);else{if(_0x57133c[_0x150545(0x501)])return _0x4cf336[_0x150545(0x331)]['Window_ShopBuy_item'][_0x150545(0x20e)](this);return _0x2dc49e['getProxyItem'](_0x18dd74[_0x150545(0x331)][_0x150545(0x34d)][_0x150545(0x20e)](this));}}else this[_0x150545(0x3ce)](TextManager['param'](_0x535805),_0x3831d6+_0x2c906c,_0x44eed7,_0x5ea4e5);},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x1f9)]=function(_0xe5201,_0x3ca50e,_0x4e77cf,_0x204a48){const _0x23693c=_0x9e78a,_0x32dc39=this[_0x23693c(0x4fb)]();let _0x348d30=0x0;Imported[_0x23693c(0x423)]?_0x348d30=this[_0x23693c(0x49e)][_0x23693c(0x4d5)](_0xe5201,!![]):_0x348d30=this[_0x23693c(0x49e)][_0x23693c(0x432)](_0xe5201);const _0x5ed14f=_0x348d30;this[_0x23693c(0x3ce)](_0x348d30,_0x3ca50e,_0x4e77cf,_0x204a48-_0x32dc39,_0x23693c(0x5f6));},Window_EquipStatus[_0x9e78a(0x1e9)]['drawUpdatedAfterParamValue']=function(_0x45ff2f,_0xa7ff03,_0x4137e2,_0x2f4af2){const _0x13e4ac=_0x9e78a,_0x18ccbd=this[_0x13e4ac(0x4fb)]();let _0x64b0bb=0x0,_0x4741d6=0x0,_0x165ccd='';if(this['_tempActor']){Imported['VisuMZ_0_CoreEngine']?(_0x64b0bb=this[_0x13e4ac(0x49e)][_0x13e4ac(0x4d5)](_0x45ff2f,![]),_0x4741d6=this[_0x13e4ac(0x362)][_0x13e4ac(0x4d5)](_0x45ff2f,![]),_0x165ccd=this[_0x13e4ac(0x362)][_0x13e4ac(0x4d5)](_0x45ff2f,!![])):(_0x64b0bb=this[_0x13e4ac(0x49e)][_0x13e4ac(0x432)](_0x45ff2f),_0x4741d6=this[_0x13e4ac(0x362)][_0x13e4ac(0x432)](_0x45ff2f),_0x165ccd=this[_0x13e4ac(0x362)][_0x13e4ac(0x432)](_0x45ff2f));const _0x4e063f=_0x64b0bb,_0xc40590=_0x4741d6;diffValue=_0xc40590-_0x4e063f,this[_0x13e4ac(0x32e)](ColorManager['paramchangeTextColor'](diffValue)),this[_0x13e4ac(0x3ce)](_0x165ccd,_0xa7ff03,_0x4137e2,_0x2f4af2-_0x18ccbd,_0x13e4ac(0x5f6));}},Window_EquipStatus[_0x9e78a(0x1e9)]['drawUpdatedParamValueDiff']=function(_0x351e8a,_0x526973,_0x2a5b04,_0x4d2a75){const _0x10592f=_0x9e78a,_0x4739f8=this[_0x10592f(0x4fb)]();let _0x42609b=0x0,_0x4c0092=0x0,_0x411350=![];if(this[_0x10592f(0x362)]){Imported[_0x10592f(0x423)]?(_0x42609b=this[_0x10592f(0x49e)][_0x10592f(0x4d5)](_0x351e8a,![]),_0x4c0092=this[_0x10592f(0x362)][_0x10592f(0x4d5)](_0x351e8a,![]),_0x411350=String(this[_0x10592f(0x49e)]['paramValueByName'](_0x351e8a,!![]))[_0x10592f(0x3cf)](/([%％])/i)):(_0x42609b=this[_0x10592f(0x49e)]['param'](_0x351e8a),_0x4c0092=this['_tempActor'][_0x10592f(0x432)](_0x351e8a),_0x411350=_0x42609b%0x1!==0x0||_0x4c0092%0x1!==0x0);const _0x4ccc4f=_0x42609b,_0x4ce1fe=_0x4c0092,_0x3f0b62=_0x4ce1fe-_0x4ccc4f;let _0x415924=_0x3f0b62;if(_0x411350)_0x415924=Math[_0x10592f(0x12f)](_0x3f0b62*0x64)+'%';_0x3f0b62!==0x0&&(this[_0x10592f(0x32e)](ColorManager['paramchangeTextColor'](_0x3f0b62)),_0x415924=(_0x3f0b62>0x0?_0x10592f(0x26d):_0x10592f(0x5c2))[_0x10592f(0x4a6)](_0x415924),this[_0x10592f(0x3ce)](_0x415924,_0x526973+_0x4739f8,_0x2a5b04,_0x4d2a75,_0x10592f(0x42d)));}},Window_EquipStatus[_0x9e78a(0x1e9)][_0x9e78a(0x2f7)]=function(_0x25ee23,_0x5f1772,_0x1cd4d9,_0x230f33,_0x24ca4a){const _0x37734f=_0x9e78a;if(VisuMZ['ItemsEquipsCore'][_0x37734f(0x5b0)][_0x37734f(0x399)][_0x37734f(0x2eb)]===![])return;_0x24ca4a=Math['max'](_0x24ca4a||0x1,0x1);while(_0x24ca4a--){_0x230f33=_0x230f33||this[_0x37734f(0x1ee)](),this[_0x37734f(0x281)][_0x37734f(0x443)]=0xa0;const _0x2c8b5e=ColorManager[_0x37734f(0x142)]();this[_0x37734f(0x281)]['fillRect'](_0x25ee23+0x1,_0x5f1772+0x1,_0x1cd4d9-0x2,_0x230f33-0x2,_0x2c8b5e),this['contents'][_0x37734f(0x443)]=0xff;}},ColorManager['getItemsEquipsCoreBackColor2']=function(){const _0x485a58=_0x9e78a,_0x5d38db=VisuMZ[_0x485a58(0x331)][_0x485a58(0x5b0)][_0x485a58(0x399)];let _0x256493=_0x5d38db[_0x485a58(0x417)]!==undefined?_0x5d38db[_0x485a58(0x417)]:0x13;return ColorManager[_0x485a58(0x23c)](_0x256493);},VisuMZ[_0x9e78a(0x331)]['Window_EquipCommand_initialize']=Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)],Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)]=function(_0x5dd632){const _0x4fcc4a=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x4fcc4a(0x606)]['call'](this,_0x5dd632),this[_0x4fcc4a(0x3fc)](_0x5dd632);},Window_EquipCommand['prototype'][_0x9e78a(0x3fc)]=function(_0x56aa24){const _0x36e386=_0x9e78a,_0x3ce6df=new Rectangle(0x0,0x0,_0x56aa24['width'],_0x56aa24[_0x36e386(0x568)]);this[_0x36e386(0x187)]=new Window_Base(_0x3ce6df),this[_0x36e386(0x187)]['opacity']=0x0,this['addChild'](this[_0x36e386(0x187)]),this['updateCommandNameWindow']();},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x54f)]=function(){const _0x44fe7d=_0x9e78a;Window_HorzCommand['prototype'][_0x44fe7d(0x54f)]['call'](this);if(this[_0x44fe7d(0x187)])this[_0x44fe7d(0x543)]();},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x543)]=function(){const _0x486bb2=_0x9e78a,_0x207d09=this[_0x486bb2(0x187)];_0x207d09['contents'][_0x486bb2(0x59c)]();const _0x5acfd7=this[_0x486bb2(0x2f5)](this[_0x486bb2(0x4a2)]());if(_0x5acfd7===_0x486bb2(0x60a)){const _0x1733cf=this[_0x486bb2(0x3f7)](this[_0x486bb2(0x4a2)]());let _0x47f4f1=this['commandName'](this['index']());_0x47f4f1=_0x47f4f1[_0x486bb2(0x203)](/\\I\[(\d+)\]/gi,''),_0x207d09[_0x486bb2(0x293)](),this['commandNameWindowDrawBackground'](_0x47f4f1,_0x1733cf),this[_0x486bb2(0x38b)](_0x47f4f1,_0x1733cf),this[_0x486bb2(0x60f)](_0x47f4f1,_0x1733cf);}},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x4d1)]=function(_0x13d8e5,_0x3739df){},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x38b)]=function(_0xec9bfc,_0x23384e){const _0x285aee=_0x9e78a,_0x50bd61=this[_0x285aee(0x187)];_0x50bd61[_0x285aee(0x3ce)](_0xec9bfc,0x0,_0x23384e['y'],_0x50bd61[_0x285aee(0x513)],'center');},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x60f)]=function(_0x8e254a,_0x5e136c){const _0x4b485c=_0x9e78a,_0x497779=this['_commandNameWindow'],_0x33ec56=$gameSystem[_0x4b485c(0x325)](),_0x2b0fdb=_0x5e136c['x']+Math[_0x4b485c(0x207)](_0x5e136c[_0x4b485c(0x1d2)]/0x2)+_0x33ec56;_0x497779['x']=_0x497779[_0x4b485c(0x1d2)]/-0x2+_0x2b0fdb,_0x497779['y']=Math[_0x4b485c(0x207)](_0x5e136c[_0x4b485c(0x568)]/0x2);},Window_EquipCommand[_0x9e78a(0x1e9)]['isUseModernControls']=function(){const _0x4c1e87=_0x9e78a;return Imported[_0x4c1e87(0x423)]&&Window_HorzCommand['prototype'][_0x4c1e87(0x1bf)][_0x4c1e87(0x20e)](this);},Window_EquipCommand['prototype'][_0x9e78a(0x5d0)]=function(){const _0x13271d=_0x9e78a;if(this['currentSymbol']()==='equip')Window_HorzCommand['prototype'][_0x13271d(0x5d0)][_0x13271d(0x20e)](this);},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x28e)]=function(){const _0x1e4f75=_0x9e78a;!this[_0x1e4f75(0x55e)]()&&('SuLhl'==='SuLhl'?Window_HorzCommand['prototype'][_0x1e4f75(0x28e)][_0x1e4f75(0x20e)](this):(_0x377574=_0x3407e5['paramValueByName'](_0x7754d0),_0x311d47=_0x14dfb9-_0x3e89e1[_0x1e4f75(0x4d5)](_0x15e04f),this[_0x1e4f75(0x32e)](_0x1c201b[_0x1e4f75(0x235)](_0x50f247)),_0xa54ef0=(_0x1f43fb>=0x0?'+':'')+_0x5190df[_0x1e4f75(0x605)](_0x548b91,0x0,_0x4f8a51)));},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x55e)]=function(){const _0x3b56d0=_0x9e78a;if(!this[_0x3b56d0(0x455)]())return![];if(SceneManager['_scene']['constructor']!==Scene_Equip)return![];if(Input[_0x3b56d0(0x3df)](_0x3b56d0(0x1f7))){if(_0x3b56d0(0x49b)===_0x3b56d0(0x230)){if(_0x53d7f9===null&&this[_0x3b56d0(0x5a1)]()['includes'](this[_0x3b56d0(0x589)]()))return![];else{_0x423e29[_0x3b56d0(0x304)]=!![];let _0x236e24=_0x2d70e9[_0x3b56d0(0x331)]['Window_EquipItem_includes'][_0x3b56d0(0x20e)](this,_0x5e5d92);if(!_0x236e24&&_0x5b5118){const _0x37d6b6=_0x4418ae[_0x3b56d0(0x4c0)](_0x10fa4b);if(_0x37d6b6['includes'](this['etypeId']()))_0x236e24=!![];}return _0x230878[_0x3b56d0(0x304)]=_0x3f23a8,_0x236e24;}}else this[_0x3b56d0(0x3e3)](),SceneManager[_0x3b56d0(0x5d1)]['commandEquip'](),SceneManager[_0x3b56d0(0x5d1)]['_slotWindow'][_0x3b56d0(0x564)](-0x1);}return![];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x276)]=function(){const _0x486932=_0x9e78a;return this['_list']?this[_0x486932(0x236)][_0x486932(0x458)]:0x3;},Window_EquipCommand[_0x9e78a(0x1e9)]['processTouchModernControls']=function(){const _0xf4307b=_0x9e78a;if(this[_0xf4307b(0x1c7)]()&&this[_0xf4307b(0x31d)]&&SceneManager[_0xf4307b(0x5d1)][_0xf4307b(0x354)]===Scene_Equip){if(_0xf4307b(0x222)!==_0xf4307b(0x222))this[_0xf4307b(0x178)]();else{if(this[_0xf4307b(0x39b)]()&&TouchInput[_0xf4307b(0x3f0)]())this[_0xf4307b(0x267)](![]);else TouchInput['isTriggered']()&&this['onTouchSelectModernControls'](!![]);if(TouchInput[_0xf4307b(0x625)]()){if('VSGFx'!==_0xf4307b(0x624))this[_0xf4307b(0x59e)]();else{_0x4634df['ItemsEquipsCore'][_0xf4307b(0x2d2)][_0xf4307b(0x20e)](this,_0x379222),this[_0xf4307b(0x466)](this[_0xf4307b(0x262)],_0x409721);if(_0x5cb888<=0x0)return;const _0x19ee6d=_0x5c1277[_0xf4307b(0x331)][_0xf4307b(0x5b0)][_0xf4307b(0x1ab)];_0x19ee6d[_0xf4307b(0x247)]&&_0x1a8696[_0xf4307b(0x4e6)](_0x19ee6d['SwitchBuy'],!![]),this['_buyWindow'][_0xf4307b(0x303)](),this[_0xf4307b(0x1c4)][_0xf4307b(0x303)]();}}}}},Window_EquipCommand['prototype'][_0x9e78a(0x267)]=function(_0x2a0c32){const _0x4f09e9=_0x9e78a;this['_doubleTouch']=![];const _0x3a80dd=this[_0x4f09e9(0x4a2)](),_0x2c3dfa=this['hitIndex'](),_0x2210a5=SceneManager['_scene']['_slotWindow'];if(_0x2210a5['isOpen']()&&_0x2210a5[_0x4f09e9(0x31d)]){if(_0x2c3dfa>=0x0)_0x2c3dfa===this[_0x4f09e9(0x4a2)]()&&(this['_doubleTouch']=!![]),this['activate'](),this[_0x4f09e9(0x407)](_0x2c3dfa);else _0x2210a5[_0x4f09e9(0x1ec)]()>=0x0&&(this[_0x4f09e9(0x2e1)](),this[_0x4f09e9(0x37c)]());}_0x2a0c32&&this[_0x4f09e9(0x4a2)]()!==_0x3a80dd&&this[_0x4f09e9(0x3e3)]();},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x49d)]=function(){const _0x5eeef8=_0x9e78a;this[_0x5eeef8(0x57e)](),this[_0x5eeef8(0x4aa)](),this[_0x5eeef8(0x442)]();},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x303)]=function(){const _0x3a9836=_0x9e78a;Window_HorzCommand[_0x3a9836(0x1e9)][_0x3a9836(0x303)][_0x3a9836(0x20e)](this),this[_0x3a9836(0x268)]();},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x57e)]=function(){const _0x28bb90=_0x9e78a;if(!this[_0x28bb90(0x1d5)]())return;const _0x35b9cf=this[_0x28bb90(0x3a8)](),_0xf40d33=VisuMZ['ItemsEquipsCore'][_0x28bb90(0x5b0)][_0x28bb90(0x399)]['CmdIconEquip'],_0x1eccd7=_0x35b9cf===_0x28bb90(0x2e4)?TextManager[_0x28bb90(0x5d9)]:_0x28bb90(0x620)[_0x28bb90(0x4a6)](_0xf40d33,TextManager['equip2']),_0x2e6b42=this[_0x28bb90(0x25a)]();this[_0x28bb90(0x30a)](_0x1eccd7,_0x28bb90(0x2e3),_0x2e6b42);},Window_EquipCommand['prototype'][_0x9e78a(0x1d5)]=function(){const _0x3d61f7=_0x9e78a;return!this[_0x3d61f7(0x1bf)]();},Window_EquipCommand['prototype'][_0x9e78a(0x25a)]=function(){return!![];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x4aa)]=function(){const _0xd30986=_0x9e78a;if(!this['isOptimizeCommandAdded']())return;const _0x28cfa4=this['commandStyle'](),_0x42d782=VisuMZ['ItemsEquipsCore'][_0xd30986(0x5b0)][_0xd30986(0x399)][_0xd30986(0x2e0)],_0x1e4350=_0x28cfa4===_0xd30986(0x2e4)?TextManager['optimize']:_0xd30986(0x620)[_0xd30986(0x4a6)](_0x42d782,TextManager[_0xd30986(0x46b)]),_0x5e0c49=this[_0xd30986(0x277)]();this[_0xd30986(0x30a)](_0x1e4350,_0xd30986(0x46b),_0x5e0c49);},Window_EquipCommand[_0x9e78a(0x1e9)]['isOptimizeCommandAdded']=function(){const _0x552a0d=_0x9e78a;return VisuMZ['ItemsEquipsCore']['Settings']['EquipScene'][_0x552a0d(0x3c3)];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x277)]=function(){return!![];},Window_EquipCommand[_0x9e78a(0x1e9)]['addClearCommand']=function(){const _0x1a03fe=_0x9e78a;if(!this[_0x1a03fe(0x36d)]())return;const _0x35b723=this[_0x1a03fe(0x3a8)](),_0x36f3ab=VisuMZ[_0x1a03fe(0x331)][_0x1a03fe(0x5b0)][_0x1a03fe(0x399)][_0x1a03fe(0x401)],_0x34e7c6=_0x35b723===_0x1a03fe(0x2e4)?TextManager[_0x1a03fe(0x59c)]:_0x1a03fe(0x620)[_0x1a03fe(0x4a6)](_0x36f3ab,TextManager[_0x1a03fe(0x59c)]),_0x50e723=this['isClearCommandEnabled']();this['addCommand'](_0x34e7c6,_0x1a03fe(0x59c),_0x50e723);},Window_EquipCommand['prototype']['isClearCommandAdded']=function(){const _0x4367de=_0x9e78a;return VisuMZ[_0x4367de(0x331)][_0x4367de(0x5b0)]['EquipScene'][_0x4367de(0x21c)];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x36f)]=function(){return!![];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x5e7)]=function(){const _0x5e68e2=_0x9e78a;return VisuMZ[_0x5e68e2(0x331)][_0x5e68e2(0x5b0)][_0x5e68e2(0x399)][_0x5e68e2(0x357)];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x1d0)]=function(_0x117720){const _0x34a1bd=_0x9e78a,_0x333b01=this['commandStyleCheck'](_0x117720);if(_0x333b01==='iconText'){if('XDXxj'!==_0x34a1bd(0x45f)){if(!_0x3dcc16)return![];if(!_0x11faac[_0x34a1bd(0x173)])return![];return _0x2862e4&&_0x268fbb[_0x34a1bd(0x173)]['match'](/<PROXY:[ ](.*)>/i);}else this[_0x34a1bd(0x61e)](_0x117720);}else{if(_0x333b01===_0x34a1bd(0x60a))this['drawItemStyleIcon'](_0x117720);else{if(_0x34a1bd(0x418)===_0x34a1bd(0x418))Window_HorzCommand[_0x34a1bd(0x1e9)][_0x34a1bd(0x1d0)]['call'](this,_0x117720);else{const _0x1ba83d=this[_0x34a1bd(0x2f6)]();this[_0x34a1bd(0x61a)](_0x1ba83d,_0x37f945,_0x236cb6,_0x5e7978,!![]);const _0x498804=this['getItemRepeatsText']();return this[_0x34a1bd(0x61a)](_0x498804,_0xb420b3,_0x3bdae0,_0x3e7811,![],_0x34a1bd(0x5f6)),this[_0x34a1bd(0x2f7)](_0x71c37c,_0x171797,_0xb3af4a),this[_0x34a1bd(0x293)](),!![];}}}},Window_EquipCommand[_0x9e78a(0x1e9)]['commandStyle']=function(){const _0x2632f5=_0x9e78a;return VisuMZ[_0x2632f5(0x331)][_0x2632f5(0x5b0)]['EquipScene'][_0x2632f5(0x334)];},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x2f5)]=function(_0x52db56){const _0x5c122c=_0x9e78a;if(_0x52db56<0x0)return _0x5c122c(0x2e4);const _0x118fa8=this[_0x5c122c(0x3a8)]();if(_0x118fa8!==_0x5c122c(0x338)){if(_0x5c122c(0x57d)===_0x5c122c(0x57d))return _0x118fa8;else _0x1899ed[_0x5c122c(0x331)]['Scene_Shop_activateSellWindow'][_0x5c122c(0x20e)](this),this[_0x5c122c(0x1e7)]()&&this[_0x5c122c(0x4d4)][_0x5c122c(0x3c1)](),this['_sellWindow'][_0x5c122c(0x367)]();}else{if(this[_0x5c122c(0x242)]()>0x0){const _0x195359=this[_0x5c122c(0x63c)](_0x52db56);if(_0x195359[_0x5c122c(0x3cf)](/\\I\[(\d+)\]/i)){const _0x2aaae4=this[_0x5c122c(0x3f7)](_0x52db56),_0x1620b7=this[_0x5c122c(0x50b)](_0x195359)[_0x5c122c(0x1d2)];if(_0x1620b7<=_0x2aaae4[_0x5c122c(0x1d2)]){if('jQDjG'===_0x5c122c(0x4f2))return _0x5c122c(0x515);else _0x48dcc2=_0x4b4221,_0x1f60eb=_0x2c89f9[_0xe36b20];}else return _0x5c122c(0x60a);}}}return _0x5c122c(0x2e4);},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x61e)]=function(_0x52766c){const _0x1b23d9=_0x9e78a,_0x5b98a5=this[_0x1b23d9(0x3f7)](_0x52766c),_0x4af4d6=this[_0x1b23d9(0x63c)](_0x52766c),_0x2a6b1c=this[_0x1b23d9(0x50b)](_0x4af4d6)[_0x1b23d9(0x1d2)];this['changePaintOpacity'](this[_0x1b23d9(0x5ec)](_0x52766c));const _0x26d0ff=this[_0x1b23d9(0x5e7)]();if(_0x26d0ff===_0x1b23d9(0x5f6))this[_0x1b23d9(0x42c)](_0x4af4d6,_0x5b98a5['x']+_0x5b98a5[_0x1b23d9(0x1d2)]-_0x2a6b1c,_0x5b98a5['y'],_0x2a6b1c);else{if(_0x26d0ff==='center'){const _0x3c7683=_0x5b98a5['x']+Math['floor']((_0x5b98a5['width']-_0x2a6b1c)/0x2);this[_0x1b23d9(0x42c)](_0x4af4d6,_0x3c7683,_0x5b98a5['y'],_0x2a6b1c);}else this['drawTextEx'](_0x4af4d6,_0x5b98a5['x'],_0x5b98a5['y'],_0x2a6b1c);}},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x601)]=function(_0x5d1900){const _0x2b4687=_0x9e78a;this[_0x2b4687(0x63c)](_0x5d1900)[_0x2b4687(0x3cf)](/\\I\[(\d+)\]/i);const _0x23212c=Number(RegExp['$1'])||0x0,_0x58afca=this[_0x2b4687(0x3f7)](_0x5d1900),_0x374b69=_0x58afca['x']+Math[_0x2b4687(0x207)]((_0x58afca[_0x2b4687(0x1d2)]-ImageManager[_0x2b4687(0x2fb)])/0x2),_0xfe242d=_0x58afca['y']+(_0x58afca[_0x2b4687(0x568)]-ImageManager[_0x2b4687(0x422)])/0x2;this[_0x2b4687(0x1be)](_0x23212c,_0x374b69,_0xfe242d);},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3a5)]=function(){const _0x22ee1b=_0x9e78a,_0x5c75a2=SceneManager[_0x22ee1b(0x5d1)];if(_0x5c75a2&&_0x5c75a2['user'])return _0x5c75a2[_0x22ee1b(0x2d3)]();return null;},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x367)]=function(){const _0x150ea6=_0x9e78a;Window_Command[_0x150ea6(0x1e9)][_0x150ea6(0x367)][_0x150ea6(0x20e)](this),this[_0x150ea6(0x599)][_0x150ea6(0x4cd)](this['helpDescriptionText']());},Window_EquipCommand[_0x9e78a(0x1e9)][_0x9e78a(0x5f8)]=function(){const _0x454c19=_0x9e78a,_0x4d0e7b=this[_0x454c19(0x4ea)]();switch(_0x4d0e7b){case _0x454c19(0x2e3):return TextManager[_0x454c19(0x3d3)][_0x454c19(0x2cf)][_0x454c19(0x2e3)];case _0x454c19(0x46b):return TextManager[_0x454c19(0x3d3)]['helpDesc'][_0x454c19(0x46b)];case'clear':return TextManager['ITEMS_EQUIPS_CORE'][_0x454c19(0x2cf)][_0x454c19(0x59c)];default:return'';}},Window_EquipSlot[_0x9e78a(0x1e9)]['isUseModernControls']=function(){const _0x19037c=_0x9e78a;return Imported[_0x19037c(0x423)]&&Window_HorzCommand[_0x19037c(0x1e9)][_0x19037c(0x1bf)]['call'](this);},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x3c9)]=function(){const _0x21c9d1=_0x9e78a;Window_StatusBase[_0x21c9d1(0x1e9)]['activate'][_0x21c9d1(0x20e)](this),this[_0x21c9d1(0x54f)]();},Window_EquipSlot['prototype']['processCursorMove']=function(){const _0x304638=_0x9e78a;Window_StatusBase[_0x304638(0x1e9)][_0x304638(0x40a)][_0x304638(0x20e)](this),this[_0x304638(0x56e)]();},Window_EquipSlot[_0x9e78a(0x1e9)]['checkShiftRemoveShortcut']=function(){const _0x4d31d9=_0x9e78a;if(!this[_0x4d31d9(0x2a4)]())return;if(Input[_0x4d31d9(0x3df)](_0x4d31d9(0x4a3))&&this[_0x4d31d9(0x5ee)]()){const _0x284094=SceneManager[_0x4d31d9(0x5d1)][_0x4d31d9(0x49e)];if(_0x284094){if(_0x4d31d9(0x42e)==='zRkoA')this[_0x4d31d9(0x56a)](this[_0x4d31d9(0x4a2)]())?(this[_0x4d31d9(0x4a9)](),this['updateHelp']()):'qYSWg'===_0x4d31d9(0x1b7)?this['onTouchOk']():this['playBuzzerSound']();else{const _0x2d283c=new _0x1492ee(0x0,0x0,_0x12783d['width'],_0x3b9d6b[_0x4d31d9(0x568)]);this['_categoryNameWindow']=new _0x486954(_0x2d283c),this[_0x4d31d9(0x43f)][_0x4d31d9(0x580)]=0x0,this[_0x4d31d9(0x39d)](this[_0x4d31d9(0x43f)]),this[_0x4d31d9(0x402)]();}}}},Window_EquipSlot[_0x9e78a(0x1e9)]['canShiftRemoveEquipment']=function(_0x33896e){const _0x16c66a=_0x9e78a,_0x5cfe53=SceneManager[_0x16c66a(0x5d1)][_0x16c66a(0x49e)];if(!_0x5cfe53)return;if(!_0x5cfe53['isEquipChangeOk'](this[_0x16c66a(0x4a2)]())){if(_0x16c66a(0x1c2)===_0x16c66a(0x2c1))_0x4060bb[_0x16c66a(0x51d)](_0x7b57be);else return![];}const _0x323e2a=_0x5cfe53[_0x16c66a(0x24a)]()[this['index']()];if(_0x5cfe53['nonRemovableEtypes']()[_0x16c66a(0x285)](_0x323e2a)){if(_0x16c66a(0x1c1)===_0x16c66a(0x4c3))this['_commandWindow']['deselect'](),this[_0x16c66a(0x57b)][_0x16c66a(0x2e1)]();else return![];}return!![];;},Window_EquipSlot['prototype']['processShiftRemoveShortcut']=function(){const _0x18d3df=_0x9e78a;SoundManager[_0x18d3df(0x302)]();const _0x420807=SceneManager['_scene'][_0x18d3df(0x49e)];_0x420807[_0x18d3df(0x1af)](this[_0x18d3df(0x4a2)](),null),this[_0x18d3df(0x303)](),this[_0x18d3df(0x644)][_0x18d3df(0x303)](),this[_0x18d3df(0x54f)]();const _0xddca9e=SceneManager[_0x18d3df(0x5d1)][_0x18d3df(0x4d4)];if(_0xddca9e)_0xddca9e[_0x18d3df(0x303)]();},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x2a4)]=function(){const _0x54e41d=_0x9e78a;if(!this[_0x54e41d(0x30b)])return![];if(!VisuMZ['ItemsEquipsCore'][_0x54e41d(0x5b0)]['EquipScene']['ShiftShortcutKey'])return![];return!![];},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x28e)]=function(){const _0xcd5f04=_0x9e78a;if(!this[_0xcd5f04(0x55e)]()){if(_0xcd5f04(0x582)!==_0xcd5f04(0x582)){if(_0x1411cd[_0xcd5f04(0x4d3)](_0xa76cd8))return![];}else Window_StatusBase['prototype']['processCursorMoveModernControls'][_0xcd5f04(0x20e)](this);}},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x55e)]=function(){const _0x350fff=_0x9e78a;if(!this['isCursorMovable']())return![];if(SceneManager[_0x350fff(0x5d1)][_0x350fff(0x354)]!==Scene_Equip)return![];if(this[_0x350fff(0x378)]())return this[_0x350fff(0x3e3)](),Input[_0x350fff(0x59c)](),SceneManager['_scene'][_0x350fff(0x2d8)](),![];else{if(Input[_0x350fff(0x615)](_0x350fff(0x1f7))){if(_0x350fff(0x282)!==_0x350fff(0x2c2)){const _0xb776a1=this[_0x350fff(0x4a2)]();Input[_0x350fff(0x4e0)](_0x350fff(0x4a3))?_0x350fff(0x456)===_0x350fff(0x2d9)?_0x5691a5['prototype']['processCursorMoveModernControls'][_0x350fff(0x20e)](this):this[_0x350fff(0x375)]():this['cursorDown'](Input[_0x350fff(0x3df)](_0x350fff(0x1f7)));if(this['index']()!==_0xb776a1){if(_0x350fff(0x217)===_0x350fff(0x53a))return this[_0x350fff(0x1e7)]()?this[_0x350fff(0x410)]():_0x8eacb2[_0x350fff(0x331)][_0x350fff(0x162)]['call'](this);else this['playCursorSound']();}return!![];}else{const _0x4b9769=_0x33d97f[_0x350fff(0x331)][_0x350fff(0x5b0)]['StatusWindow'][_0x350fff(0x44e)];return _0x4b9769['format'](_0x32104a['mp']);}}else{if(this[_0x350fff(0x440)]()&&Input['isTriggered'](_0x350fff(0x4a3)))return!![];}}return![];},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x378)]=function(){const _0x458512=_0x9e78a;if(this[_0x458512(0x4a2)]()!==0x0)return![];const _0x295c65=VisuMZ[_0x458512(0x331)][_0x458512(0x5b0)][_0x458512(0x399)];if(!_0x295c65['CommandAddOptimize']&&!_0x295c65['CommandAddClear'])return![];return Input['isTriggered']('up');},Window_EquipSlot['prototype'][_0x9e78a(0x440)]=function(){const _0x4f7933=_0x9e78a;return VisuMZ[_0x4f7933(0x331)][_0x4f7933(0x5b0)][_0x4f7933(0x399)][_0x4f7933(0x3f3)];},Window_EquipSlot['prototype']['processTouchModernControls']=function(){const _0x15a827=_0x9e78a;if(this[_0x15a827(0x1c7)]()&&this[_0x15a827(0x31d)]&&SceneManager['_scene']['constructor']===Scene_Equip){if(_0x15a827(0x4ae)==='FINOd'){if(this['isHoverEnabled']()&&TouchInput[_0x15a827(0x3f0)]())this[_0x15a827(0x267)](![]);else TouchInput[_0x15a827(0x3df)]()&&this[_0x15a827(0x267)](!![]);if(TouchInput['isClicked']())this[_0x15a827(0x59e)]();else{if(TouchInput[_0x15a827(0x485)]()){if(_0x15a827(0x631)==='zAVPB')this[_0x15a827(0x250)]();else{const _0x5bb68d=_0x590a52[_0x15a827(0x331)][_0x15a827(0x5b0)][_0x15a827(0x399)];let _0x1a1363=_0x5bb68d[_0x15a827(0x417)]!==_0x1c6dfb?_0x5bb68d[_0x15a827(0x417)]:0x13;return _0x2aeb94[_0x15a827(0x23c)](_0x1a1363);}}}}else{!_0x431417&&this[_0x15a827(0x591)](null,_0x1c5bd3);if(!this[_0x15a827(0x362)]){const _0x446473=_0x205653[_0x15a827(0x1a3)](this);_0x446473[_0x15a827(0x362)]=!![],this[_0x15a827(0x27a)][_0x5c57ec][_0x15a827(0x371)](null),this[_0x15a827(0x31e)]=!![],this[_0x15a827(0x137)](_0x446473),this[_0x15a827(0x31e)]=_0x4441cc;}else this[_0x15a827(0x27a)][_0xae629a]['setObject'](null);_0x4be4f6=!![];}}},Window_EquipSlot[_0x9e78a(0x1e9)]['onTouchSelectModernControls']=function(_0x408edc){const _0x1c4d32=_0x9e78a;this[_0x1c4d32(0x55a)]=![];const _0x59fc8e=this['index'](),_0x74a30e=this[_0x1c4d32(0x1ec)](),_0x145a8b=SceneManager[_0x1c4d32(0x5d1)]['_commandWindow'];if(_0x145a8b[_0x1c4d32(0x1c7)]()&&_0x145a8b[_0x1c4d32(0x31d)]){if(_0x1c4d32(0x4d9)==='aCgbt'){if(_0x74a30e>=0x0){if(_0x74a30e===this['index']()){if(_0x1c4d32(0x4a8)===_0x1c4d32(0x5db))return _0x2ba3e4[_0x3d64f6][_0x1c4d32(0x391)]=_0x3988c6[_0x387646][_0x1c4d32(0x391)]||0x0,_0x572cc8[_0x2eb3ce]['gold'];else this['_doubleTouch']=!![];}this['activate'](),this[_0x1c4d32(0x407)](_0x74a30e);}else _0x145a8b[_0x1c4d32(0x1ec)]()>=0x0&&(this[_0x1c4d32(0x2e1)](),this[_0x1c4d32(0x37c)]());}else{if(!this[_0x1c4d32(0x27a)][_0x46aac4])this['_equips'][_0x630701]=new _0x3bf2e4();}}_0x408edc&&this['index']()!==_0x59fc8e&&this[_0x1c4d32(0x3e3)]();},Window_EquipSlot[_0x9e78a(0x1e9)][_0x9e78a(0x3d5)]=function(){return this['index']();},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x27e)]=Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x285)],Window_EquipItem['prototype'][_0x9e78a(0x285)]=function(_0x1e2a96){const _0x31027f=_0x9e78a;if(_0x1e2a96===null&&this[_0x31027f(0x5a1)]()['includes'](this['etypeId']()))return![];else{$gameTemp[_0x31027f(0x304)]=!![];let _0x11ab32=VisuMZ[_0x31027f(0x331)]['Window_EquipItem_includes'][_0x31027f(0x20e)](this,_0x1e2a96);if(!_0x11ab32&&_0x1e2a96){const _0xd269bc=DataManager[_0x31027f(0x4c0)](_0x1e2a96);if(_0xd269bc['includes'](this[_0x31027f(0x589)]()))_0x11ab32=!![];}return $gameTemp[_0x31027f(0x304)]=undefined,_0x11ab32;}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x14f)]=Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x156)],Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x156)]=function(_0x528ca7){const _0x1ab1e5=_0x9e78a;if(_0x528ca7&&this['_actor']){if(this[_0x1ab1e5(0x1a7)](_0x528ca7))return![];if(this['isSoleWeaponType'](_0x528ca7))return![];if(this[_0x1ab1e5(0x16e)](_0x528ca7))return![];if(!this[_0x1ab1e5(0x49e)][_0x1ab1e5(0x380)](_0x528ca7))return![];}if(!_0x528ca7){if('CnGKA'===_0x1ab1e5(0x18b))return!this[_0x1ab1e5(0x5a1)]()[_0x1ab1e5(0x285)](this['etypeId']());else this['drawItemStyleIcon'](_0x45e27c);}return VisuMZ['ItemsEquipsCore'][_0x1ab1e5(0x14f)][_0x1ab1e5(0x20e)](this,_0x528ca7);},Window_EquipItem['prototype'][_0x9e78a(0x1a7)]=function(_0x237637){const _0x168e12=_0x9e78a,_0x57daba=_0x237637[_0x168e12(0x173)];if(_0x57daba['match'](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){if(_0x168e12(0x2e2)!==_0x168e12(0x382)){const _0x57e718=Number(RegExp['$1'])||0x1;let _0x1ca693=0x0;const _0xc5457e=this[_0x168e12(0x49e)][_0x168e12(0x5be)](),_0x13a2bb=SceneManager[_0x168e12(0x5d1)][_0x168e12(0x457)][_0x168e12(0x3d5)]();_0xc5457e[_0x13a2bb]=null;for(const _0x1ceecc of _0xc5457e){if(!_0x1ceecc)continue;if(DataManager['isWeapon'](_0x237637)===DataManager[_0x168e12(0x613)](_0x1ceecc)){if(_0x168e12(0x427)!==_0x168e12(0x427))this[_0x168e12(0x250)]();else{if(_0x237637['id']===_0x1ceecc['id'])_0x1ca693+=0x1;}}}return _0x1ca693>=_0x57e718;}else return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x168e12(0x352)]():_0x11dc04[_0x168e12(0x331)]['Scene_Equip_itemWindowRect']['call'](this);}else return![];},Window_EquipItem['prototype'][_0x9e78a(0x542)]=function(_0x366628){const _0x3308a2=_0x9e78a;if(!DataManager[_0x3308a2(0x613)](_0x366628))return![];const _0x5cfaee=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x5bc1aa=0x0;const _0x2353e0=this[_0x3308a2(0x49e)][_0x3308a2(0x5be)](),_0x13db1c=SceneManager[_0x3308a2(0x5d1)][_0x3308a2(0x457)]['equipSlotIndex']();_0x2353e0[_0x13db1c]=null;for(const _0x136676 of _0x2353e0){if(!_0x136676)continue;if(!DataManager['isWeapon'](_0x136676))continue;if(_0x366628[_0x3308a2(0x3c5)]===_0x136676[_0x3308a2(0x3c5)]){if('awbnS'!==_0x3308a2(0x45e))return this[_0x3308a2(0x1e7)]()?this[_0x3308a2(0x2d4)]():_0x4d389a[_0x3308a2(0x331)][_0x3308a2(0x4e4)]['call'](this);else{_0x5bc1aa+=0x1;if(_0x366628[_0x3308a2(0x173)]['match'](_0x5cfaee)){if(_0x3308a2(0x611)!==_0x3308a2(0x34b)){const _0x5a9e07=Number(RegExp['$1'])||0x1;if(_0x5bc1aa>=_0x5a9e07)return!![];}else return _0x598650[_0x3308a2(0x331)]['Scene_Shop_helpWindowRect']['call'](this);}if(_0x136676[_0x3308a2(0x173)]['match'](_0x5cfaee)){if(_0x3308a2(0x33e)===_0x3308a2(0x33e)){const _0x4ac22b=Number(RegExp['$1'])||0x1;if(_0x5bc1aa>=_0x4ac22b)return!![];}else{if(_0x426046[_0x3308a2(0x63d)]&&_0xf4814e['uiHelpPosition']!==_0x531000)return _0x20beb6[_0x3308a2(0x258)];else return this[_0x3308a2(0x1e7)]()?this[_0x3308a2(0x52b)]()[_0x3308a2(0x3cf)](/LOWER/i):_0x1f9fec['prototype']['isBottomHelpMode'][_0x3308a2(0x20e)](this);}}}}}return![];},Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x16e)]=function(_0x48279){const _0x3d272e=_0x9e78a;if(!DataManager['isArmor'](_0x48279))return![];const _0x194a40=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x4880bd=0x0;const _0x28c8a1=this['_actor']['equips'](),_0x200231=SceneManager[_0x3d272e(0x5d1)][_0x3d272e(0x457)][_0x3d272e(0x3d5)]();_0x28c8a1[_0x200231]=null;for(const _0x5c5cd5 of _0x28c8a1){if(_0x3d272e(0x506)!==_0x3d272e(0x1d4)){if(!_0x5c5cd5)continue;if(!DataManager[_0x3d272e(0x525)](_0x5c5cd5))continue;if(_0x48279[_0x3d272e(0x180)]===_0x5c5cd5[_0x3d272e(0x180)]){_0x4880bd+=0x1;if(_0x48279['note'][_0x3d272e(0x3cf)](_0x194a40)){if(_0x3d272e(0x5d5)===_0x3d272e(0x489))this[_0x3d272e(0x567)](_0x47b20c[_0x3d272e(0x3df)]('up'));else{const _0x1ab9b1=Number(RegExp['$1'])||0x1;if(_0x4880bd>=_0x1ab9b1)return!![];}}if(_0x5c5cd5[_0x3d272e(0x173)]['match'](_0x194a40)){if(_0x3d272e(0x355)===_0x3d272e(0x321))return _0x2006a0['ItemsEquipsCore'][_0x3d272e(0x34d)][_0x3d272e(0x20e)](this);else{const _0x32f0f0=Number(RegExp['$1'])||0x1;if(_0x4880bd>=_0x32f0f0)return!![];}}}}else{if(!_0x42728d[_0x3d272e(0x4d3)](_0x11e2db))return!![];}}return![];},Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x5a1)]=function(){const _0x29bbcb=_0x9e78a;return VisuMZ[_0x29bbcb(0x331)][_0x29bbcb(0x5b0)][_0x29bbcb(0x399)]['NonRemoveETypes'];},Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x1d0)]=function(_0x15133b){const _0x568734=_0x9e78a,_0x144a13=this[_0x568734(0x1b8)](_0x15133b);_0x144a13?Window_ItemList[_0x568734(0x1e9)][_0x568734(0x1d0)][_0x568734(0x20e)](this,_0x15133b):this[_0x568734(0x46f)](_0x15133b);},Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x46f)]=function(_0x28a5e4){const _0x1afdc0=_0x9e78a;this['changePaintOpacity'](this[_0x1afdc0(0x156)](null));const _0x2006a1=VisuMZ[_0x1afdc0(0x331)]['Settings']['EquipScene'],_0x50349d=this[_0x1afdc0(0x3f7)](_0x28a5e4),_0x1b0c22=_0x50349d['y']+(this[_0x1afdc0(0x1ee)]()-ImageManager[_0x1afdc0(0x422)])/0x2,_0x3f9e7d=ImageManager[_0x1afdc0(0x2fb)]+0x4,_0x520041=Math[_0x1afdc0(0x26e)](0x0,_0x50349d['width']-_0x3f9e7d);this[_0x1afdc0(0x404)](),this[_0x1afdc0(0x1be)](_0x2006a1[_0x1afdc0(0x3fa)],_0x50349d['x'],_0x1b0c22),this[_0x1afdc0(0x3ce)](_0x2006a1[_0x1afdc0(0x53e)],_0x50349d['x']+_0x3f9e7d,_0x50349d['y'],_0x520041),this[_0x1afdc0(0x23f)](!![]);},Window_EquipItem[_0x9e78a(0x1e9)][_0x9e78a(0x367)]=function(){const _0x43e4b3=_0x9e78a;Window_ItemList[_0x43e4b3(0x1e9)][_0x43e4b3(0x367)]['call'](this);if(this[_0x43e4b3(0x49e)]&&this[_0x43e4b3(0x4d4)]&&this[_0x43e4b3(0x365)]>=0x0){const _0x1131dc=JsonEx[_0x43e4b3(0x1a3)](this[_0x43e4b3(0x49e)]);_0x1131dc[_0x43e4b3(0x362)]=!![],_0x1131dc['forceChangeEquip'](this[_0x43e4b3(0x365)],this[_0x43e4b3(0x5ee)]()),this[_0x43e4b3(0x4d4)]['setTempActor'](_0x1131dc);}},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x1f8)]=Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)],Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3d0)]=function(_0x4e0afd){const _0x3f7dfa=_0x9e78a;VisuMZ['ItemsEquipsCore'][_0x3f7dfa(0x1f8)][_0x3f7dfa(0x20e)](this,_0x4e0afd),this[_0x3f7dfa(0x3fc)](_0x4e0afd);},Window_ShopCommand['prototype'][_0x9e78a(0x3fc)]=function(_0x2d4de7){const _0x3980ec=_0x9e78a,_0x43bf33=new Rectangle(0x0,0x0,_0x2d4de7[_0x3980ec(0x1d2)],_0x2d4de7[_0x3980ec(0x568)]);this[_0x3980ec(0x187)]=new Window_Base(_0x43bf33),this['_commandNameWindow'][_0x3980ec(0x580)]=0x0,this['addChild'](this[_0x3980ec(0x187)]),this[_0x3980ec(0x543)]();},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x54f)]=function(){const _0x49e867=_0x9e78a;Window_HorzCommand[_0x49e867(0x1e9)][_0x49e867(0x54f)][_0x49e867(0x20e)](this);if(this[_0x49e867(0x187)])this[_0x49e867(0x543)]();},Window_ShopCommand['prototype'][_0x9e78a(0x543)]=function(){const _0x512aee=_0x9e78a,_0x52aad1=this[_0x512aee(0x187)];_0x52aad1[_0x512aee(0x281)][_0x512aee(0x59c)]();const _0x29f6cc=this[_0x512aee(0x2f5)](this['index']());if(_0x29f6cc===_0x512aee(0x60a)){const _0x272612=this[_0x512aee(0x3f7)](this['index']());let _0x3d0824=this[_0x512aee(0x63c)](this[_0x512aee(0x4a2)]());_0x3d0824=_0x3d0824['replace'](/\\I\[(\d+)\]/gi,''),_0x52aad1['resetFontSettings'](),this[_0x512aee(0x4d1)](_0x3d0824,_0x272612),this[_0x512aee(0x38b)](_0x3d0824,_0x272612),this[_0x512aee(0x60f)](_0x3d0824,_0x272612);}},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x4d1)]=function(_0x49b59c,_0x1fff52){},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x38b)]=function(_0x2a27f2,_0x56fc95){const _0x4c101e=_0x9e78a,_0x416fdf=this['_commandNameWindow'];_0x416fdf[_0x4c101e(0x3ce)](_0x2a27f2,0x0,_0x56fc95['y'],_0x416fdf['innerWidth'],_0x4c101e(0x550));},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x60f)]=function(_0x1b428c,_0x307b59){const _0x4aeeb6=_0x9e78a,_0x35e07a=this[_0x4aeeb6(0x187)],_0x4d8dc4=$gameSystem['windowPadding'](),_0x25972a=_0x307b59['x']+Math[_0x4aeeb6(0x207)](_0x307b59[_0x4aeeb6(0x1d2)]/0x2)+_0x4d8dc4;_0x35e07a['x']=_0x35e07a['width']/-0x2+_0x25972a,_0x35e07a['y']=Math[_0x4aeeb6(0x207)](_0x307b59[_0x4aeeb6(0x568)]/0x2);},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x276)]=function(){const _0x2de96d=_0x9e78a;return this[_0x2de96d(0x236)]?this[_0x2de96d(0x236)]['length']:0x3;},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3b9)]=function(){const _0x2215cf=_0x9e78a;return VisuMZ[_0x2215cf(0x331)][_0x2215cf(0x5b0)][_0x2215cf(0x1ab)][_0x2215cf(0x51a)];},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x49d)]=function(){const _0x45799e=_0x9e78a;this[_0x45799e(0x35c)](),this[_0x45799e(0x14a)](),this[_0x45799e(0x530)]();},Window_ShopCommand['prototype'][_0x9e78a(0x303)]=function(){const _0x315014=_0x9e78a;Window_HorzCommand[_0x315014(0x1e9)]['refresh'][_0x315014(0x20e)](this),this[_0x315014(0x268)]();},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x35c)]=function(){const _0x54669d=_0x9e78a,_0x2e1d56=this[_0x54669d(0x3a8)](),_0x380b8c=VisuMZ[_0x54669d(0x331)][_0x54669d(0x5b0)][_0x54669d(0x1ab)][_0x54669d(0x192)],_0x4769bc=_0x2e1d56===_0x54669d(0x2e4)?TextManager[_0x54669d(0x3ba)]:'\x5cI[%1]%2'['format'](_0x380b8c,TextManager[_0x54669d(0x3ba)]),_0x2d885d=this['isBuyCommandEnabled']();if(this[_0x54669d(0x3b9)]()&&!_0x2d885d)return;this[_0x54669d(0x30a)](_0x4769bc,_0x54669d(0x3ba),_0x2d885d);},Window_ShopCommand[_0x9e78a(0x1e9)]['isBuyCommandEnabled']=function(){const _0x2cbe9f=_0x9e78a;return SceneManager['_scene'][_0x2cbe9f(0x354)]===Scene_Shop?SceneManager[_0x2cbe9f(0x5d1)][_0x2cbe9f(0x405)]>0x0:'kCfMu'!=='kCfMu'?![]:!![];},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x14a)]=function(){const _0x5c1087=_0x9e78a,_0x48439f=this['commandStyle'](),_0x269eef=VisuMZ[_0x5c1087(0x331)]['Settings']['ShopScene']['CmdIconSell'],_0x2ae578=_0x48439f===_0x5c1087(0x2e4)?TextManager[_0x5c1087(0x415)]:'\x5cI[%1]%2'[_0x5c1087(0x4a6)](_0x269eef,TextManager[_0x5c1087(0x415)]),_0x416365=this[_0x5c1087(0x552)]();if(this[_0x5c1087(0x3b9)]()&&!_0x416365)return;this['addCommand'](_0x2ae578,'sell',_0x416365);},Window_ShopCommand[_0x9e78a(0x1e9)]['isSellCommandEnabled']=function(){const _0x15e21b=_0x9e78a;return!this[_0x15e21b(0x3d4)];},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x530)]=function(){const _0x4260c8=_0x9e78a,_0xc0af66=this[_0x4260c8(0x3a8)](),_0x5936e3=VisuMZ[_0x4260c8(0x331)][_0x4260c8(0x5b0)][_0x4260c8(0x1ab)][_0x4260c8(0x2a1)],_0x2b2d0a=VisuMZ[_0x4260c8(0x331)][_0x4260c8(0x5b0)][_0x4260c8(0x1ab)][_0x4260c8(0x2f9)],_0x3f179f=_0xc0af66==='text'?_0x2b2d0a:_0x4260c8(0x620)['format'](_0x5936e3,_0x2b2d0a);this[_0x4260c8(0x30a)](_0x3f179f,_0x4260c8(0x1a8));},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x5e7)]=function(){const _0x56f955=_0x9e78a;return VisuMZ[_0x56f955(0x331)][_0x56f955(0x5b0)][_0x56f955(0x1ab)]['CmdTextAlign'];},Window_ShopCommand['prototype'][_0x9e78a(0x1d0)]=function(_0x1b7f95){const _0x4d3d70=_0x9e78a,_0x44ca08=this[_0x4d3d70(0x2f5)](_0x1b7f95);if(_0x44ca08===_0x4d3d70(0x515))this[_0x4d3d70(0x61e)](_0x1b7f95);else _0x44ca08==='icon'?this[_0x4d3d70(0x601)](_0x1b7f95):_0x4d3d70(0x246)!=='KTVfR'?_0xb0e061=_0x4d3d70(0x499)[_0x4d3d70(0x4a6)](_0x333100['id']):Window_HorzCommand['prototype'][_0x4d3d70(0x1d0)][_0x4d3d70(0x20e)](this,_0x1b7f95);},Window_ShopCommand[_0x9e78a(0x1e9)][_0x9e78a(0x3a8)]=function(){const _0x2b2c65=_0x9e78a;return VisuMZ[_0x2b2c65(0x331)][_0x2b2c65(0x5b0)][_0x2b2c65(0x1ab)][_0x2b2c65(0x334)];},Window_ShopCommand[_0x9e78a(0x1e9)]['commandStyleCheck']=function(_0x19f8b0){const _0x4b5156=_0x9e78a;if(_0x19f8b0<0x0)return _0x4b5156(0x2e4);const _0x215fba=this[_0x4b5156(0x3a8)]();if(_0x215fba!==_0x4b5156(0x338))return _0x4b5156(0x20f)===_0x4b5156(0x20f)?_0x215fba:_0x14876f[_0x4b5156(0x3f9)];else{if(this['maxItems']()>0x0){const _0x58dbf8=this['commandName'](_0x19f8b0);if(_0x58dbf8[_0x4b5156(0x3cf)](/\\I\[(\d+)\]/i)){const _0x5684d2=this[_0x4b5156(0x3f7)](_0x19f8b0),_0x2dde7d=this[_0x4b5156(0x50b)](_0x58dbf8)[_0x4b5156(0x1d2)];if(_0x2dde7d<=_0x5684d2[_0x4b5156(0x1d2)]){if(_0x4b5156(0x421)!==_0x4b5156(0x28c))return _0x4b5156(0x515);else{const _0x37da61=_0x58f728['x']+_0x20632c[_0x4b5156(0x207)]((_0x1c3516[_0x4b5156(0x1d2)]-_0x31145a)/0x2);this['drawTextEx'](_0x38cbdc,_0x37da61,_0x3dbbef['y'],_0x416b44);}}else return _0x4b5156(0x60a);}}}return'text';},Window_ShopCommand[_0x9e78a(0x1e9)]['drawItemStyleIconText']=function(_0x2c46ae){const _0x5e9daa=_0x9e78a,_0x18b1bf=this['itemLineRect'](_0x2c46ae),_0x1110ce=this[_0x5e9daa(0x63c)](_0x2c46ae),_0xdc99ad=this[_0x5e9daa(0x50b)](_0x1110ce)[_0x5e9daa(0x1d2)];this[_0x5e9daa(0x23f)](this['isCommandEnabled'](_0x2c46ae));const _0x363e0e=this['itemTextAlign']();if(_0x363e0e===_0x5e9daa(0x5f6))this[_0x5e9daa(0x42c)](_0x1110ce,_0x18b1bf['x']+_0x18b1bf[_0x5e9daa(0x1d2)]-_0xdc99ad,_0x18b1bf['y'],_0xdc99ad);else{if(_0x363e0e==='center'){if(_0x5e9daa(0x208)==='gwULP'){const _0x1294de=_0x18b1bf['x']+Math['floor']((_0x18b1bf[_0x5e9daa(0x1d2)]-_0xdc99ad)/0x2);this['drawTextEx'](_0x1110ce,_0x1294de,_0x18b1bf['y'],_0xdc99ad);}else{const _0x1db826=_0x192238[_0x5e9daa(0x3a5)](0x1);this[_0x5e9daa(0x5c8)]=_0x44793d['makeDeepCopy'](_0x1db826),this[_0x5e9daa(0x22f)]=_0x666ddd['makeDeepCopy'](_0x1db826);}}else{if(_0x5e9daa(0x3f5)!==_0x5e9daa(0x3f5)){const _0x13a05e=_0x5b694a(_0x2d5d3b['$1']);try{_0x1b9ac7(_0x13a05e);}catch(_0x4fd658){if(_0x271969[_0x5e9daa(0x58d)]())_0x502ac6[_0x5e9daa(0x53b)](_0x4fd658);}}else this[_0x5e9daa(0x42c)](_0x1110ce,_0x18b1bf['x'],_0x18b1bf['y'],_0xdc99ad);}}},Window_ShopCommand['prototype'][_0x9e78a(0x601)]=function(_0x142d75){const _0x3284a4=_0x9e78a;this[_0x3284a4(0x63c)](_0x142d75)[_0x3284a4(0x3cf)](/\\I\[(\d+)\]/i);const _0x3a423d=Number(RegExp['$1'])||0x0,_0x43c66f=this[_0x3284a4(0x3f7)](_0x142d75),_0xdd1ff2=_0x43c66f['x']+Math[_0x3284a4(0x207)]((_0x43c66f[_0x3284a4(0x1d2)]-ImageManager[_0x3284a4(0x2fb)])/0x2),_0x4bd51=_0x43c66f['y']+(_0x43c66f[_0x3284a4(0x568)]-ImageManager[_0x3284a4(0x422)])/0x2;this[_0x3284a4(0x1be)](_0x3a423d,_0xdd1ff2,_0x4bd51);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5d8)]=Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x303)],Window_ShopBuy[_0x9e78a(0x1e9)]['refresh']=function(){const _0x51f30e=_0x9e78a;this[_0x51f30e(0x51e)](),VisuMZ[_0x51f30e(0x331)][_0x51f30e(0x5d8)][_0x51f30e(0x20e)](this);},Window_ShopBuy['prototype'][_0x9e78a(0x51e)]=function(){const _0x2019d0=_0x9e78a;if(SceneManager[_0x2019d0(0x5d1)][_0x2019d0(0x354)]===Scene_Shop){if('PqIcg'==='PqIcg')this[_0x2019d0(0x441)]=SceneManager['_scene'][_0x2019d0(0x5aa)]();else{const _0x32c17f=_0x598fb7(_0x2d360d['$1'])[_0x2019d0(0x19d)](',')[_0x2019d0(0x4e5)](_0x3bf4e2=>_0x48088e(_0x3bf4e2));for(const _0x37cd9e of _0x32c17f){_0x590632[_0x2019d0(0x4e6)](_0x37cd9e,!![]);}}}},VisuMZ[_0x9e78a(0x331)]['Window_ShopBuy_price']=Window_ShopBuy['prototype'][_0x9e78a(0x13e)],Window_ShopBuy['prototype']['price']=function(_0x3a05e5){const _0x543756=_0x9e78a;if(!_0x3a05e5)return 0x0;let _0x5b1709=VisuMZ[_0x543756(0x331)][_0x543756(0x307)][_0x543756(0x20e)](this,_0x3a05e5);return Math[_0x543756(0x26e)](0x0,this[_0x543756(0x540)](_0x3a05e5,_0x5b1709));},Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x540)]=function(_0x2bf811,_0x2c0ef6){const _0x5de951=_0x9e78a,_0x24bcd2=_0x2bf811[_0x5de951(0x173)];if(_0x24bcd2['match'](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x4a1446=String(RegExp['$1']);try{eval(_0x4a1446);}catch(_0x5a6ce8){if($gameTemp['isPlaytest']())console[_0x5de951(0x53b)](_0x5a6ce8);}}_0x2c0ef6=VisuMZ[_0x5de951(0x331)]['Settings'][_0x5de951(0x1ab)]['BuyPriceJS'][_0x5de951(0x20e)](this,_0x2bf811,_0x2c0ef6);if(isNaN(_0x2c0ef6))_0x2c0ef6=0x0;return Math['floor'](_0x2c0ef6);},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x201)]=Window_ShopBuy['prototype'][_0x9e78a(0x24f)],Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x24f)]=function(_0x3da7a0){const _0x5a8f96=_0x9e78a,_0x31608e=VisuMZ[_0x5a8f96(0x331)][_0x5a8f96(0x201)][_0x5a8f96(0x20e)](this,_0x3da7a0);return _0x31608e&&!this['meetsShopListingConditions'](_0x31608e)?null:_0x31608e;},VisuMZ['ItemsEquipsCore'][_0x9e78a(0x42b)]={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x3dd)]=function(_0x4dd4f5){const _0x310d91=_0x9e78a;if(!_0x4dd4f5)return![];const _0x2c7355=VisuMZ[_0x310d91(0x331)][_0x310d91(0x42b)],_0x588a4d=_0x4dd4f5?_0x4dd4f5[_0x310d91(0x173)]||'':'';if(_0x588a4d['match'](_0x2c7355[_0x310d91(0x647)])){const _0x176618=String(RegExp['$1'])['split'](',')[_0x310d91(0x4e5)](_0xf6f4e3=>Number(_0xf6f4e3));if(_0x176618[_0x310d91(0x3aa)](_0x3eb9aa=>!$gameSwitches[_0x310d91(0x4d3)](_0x3eb9aa)))return![];}if(_0x588a4d[_0x310d91(0x3cf)](_0x2c7355[_0x310d91(0x150)])){const _0x2f0c96=String(RegExp['$1'])[_0x310d91(0x19d)](',')[_0x310d91(0x4e5)](_0x5502d6=>Number(_0x5502d6));if(_0x2f0c96[_0x310d91(0x5a9)](_0x20b653=>!$gameSwitches[_0x310d91(0x4d3)](_0x20b653)))return![];}if(_0x588a4d[_0x310d91(0x3cf)](_0x2c7355[_0x310d91(0x2be)])){if('CmJRY'!==_0x310d91(0x502)){const _0x4fa024=_0x41b2a3[_0x310d91(0x331)][_0x310d91(0x5b0)][_0x310d91(0x2e5)][_0x310d91(0x4b8)];if(_0x4fa024<=0x0)return;const _0x4ae83e=_0x462e77[_0x310d91(0x39e)]('IconSet'),_0x2b0f93=_0x53adaf[_0x310d91(0x2fb)],_0x43cd68=_0x57f388[_0x310d91(0x422)],_0x1a1419=_0x4fa024%0x10*_0x2b0f93,_0x52f5c9=_0x20bed9[_0x310d91(0x207)](_0x4fa024/0x10)*_0x43cd68;this[_0x310d91(0x37b)][_0x310d91(0x1d1)](_0x4ae83e,_0x1a1419,_0x52f5c9,_0x2b0f93,_0x43cd68,0x0,0x0);}else{const _0x17d565=String(RegExp['$1'])['split'](',')['map'](_0x3062b1=>Number(_0x3062b1));if(_0x17d565[_0x310d91(0x5a9)](_0x23024a=>$gameSwitches['value'](_0x23024a)))return![];}}if(_0x588a4d[_0x310d91(0x3cf)](_0x2c7355[_0x310d91(0x24b)])){if(_0x310d91(0x476)===_0x310d91(0x479))return this[_0x310d91(0x445)]===_0x18d8ec&&this[_0x310d91(0x5fe)](),this[_0x310d91(0x445)];else{const _0x18796a=String(RegExp['$1'])[_0x310d91(0x19d)](',')['map'](_0x27c9cd=>Number(_0x27c9cd));if(_0x18796a[_0x310d91(0x3aa)](_0x4a8d0d=>$gameSwitches[_0x310d91(0x4d3)](_0x4a8d0d)))return![];}}return!![];},Window_ShopBuy['prototype']['drawItem']=function(_0x211a77){const _0x3a9e5f=_0x9e78a;this[_0x3a9e5f(0x293)]();const _0x5a4b74=this[_0x3a9e5f(0x1b8)](_0x211a77),_0x4010b0=this[_0x3a9e5f(0x3f7)](_0x211a77),_0x4df162=_0x4010b0[_0x3a9e5f(0x1d2)];this[_0x3a9e5f(0x23f)](this['isEnabled'](_0x5a4b74)),this[_0x3a9e5f(0x632)](_0x5a4b74,_0x4010b0['x'],_0x4010b0['y'],_0x4df162),this[_0x3a9e5f(0x366)](_0x5a4b74,_0x4010b0),this[_0x3a9e5f(0x23f)](!![]);},Window_ShopBuy[_0x9e78a(0x1e9)][_0x9e78a(0x366)]=function(_0x5cb544,_0x221988){const _0x5343b5=_0x9e78a,_0x57188f=this[_0x5343b5(0x13e)](_0x5cb544);this[_0x5343b5(0x3b3)](_0x57188f,TextManager[_0x5343b5(0x549)],_0x221988['x'],_0x221988['y'],_0x221988[_0x5343b5(0x1d2)]);},Window_ShopSell['prototype'][_0x9e78a(0x276)]=function(){const _0x1e4eb5=_0x9e78a;return SceneManager['_scene'][_0x1e4eb5(0x1e7)]()?0x1:0x2;},VisuMZ[_0x9e78a(0x331)]['Window_ShopSell_isEnabled']=Window_ShopSell['prototype'][_0x9e78a(0x156)],Window_ShopSell[_0x9e78a(0x1e9)][_0x9e78a(0x156)]=function(_0x47a487){const _0x79eb87=_0x9e78a;if(!_0x47a487)return![];const _0xce6fb0=_0x47a487['note'];if(_0xce6fb0[_0x79eb87(0x3cf)](/<CANNOT SELL>/i))return![];if(_0xce6fb0[_0x79eb87(0x3cf)](/<CAN SELL>/i))return!![];if(_0xce6fb0[_0x79eb87(0x3cf)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1035f1=JSON['parse']('['+RegExp['$1'][_0x79eb87(0x3cf)](/\d+/g)+']');for(const _0x1f39bd of _0x1035f1){if(_0x79eb87(0x453)!==_0x79eb87(0x400)){if(!$gameSwitches[_0x79eb87(0x4d3)](_0x1f39bd))return![];}else return this[_0x79eb87(0x3eb)]&&this['_categoryWindow'][_0x79eb87(0x1bf)]();}}if(_0xce6fb0[_0x79eb87(0x3cf)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x4cef39=JSON['parse']('['+RegExp['$1'][_0x79eb87(0x3cf)](/\d+/g)+']');for(const _0x201cff of _0x4cef39){if('IwSBY'!==_0x79eb87(0x370)){const _0x3cdc9b=_0x79eb87(0x18c);if(this['_customItemInfo'][_0x3cdc9b])return this[_0x79eb87(0x287)][_0x3cdc9b];let _0x3de9ed='';if(this[_0x79eb87(0x3cb)][_0x79eb87(0x1f4)]>0x0)_0x3de9ed+=_0x79eb87(0x4de)[_0x79eb87(0x4a6)](_0x12c7c6['floor'](this[_0x79eb87(0x3cb)][_0x79eb87(0x1f4)]*0x64));if(this[_0x79eb87(0x3cb)][_0x79eb87(0x1f4)]>0x0&&this[_0x79eb87(0x3cb)][_0x79eb87(0x53d)]>0x0)_0x3de9ed+='\x20';if(this['_itemData'][_0x79eb87(0x53d)]>0x0)_0x3de9ed+='+%1'[_0x79eb87(0x4a6)](this[_0x79eb87(0x3cb)][_0x79eb87(0x53d)]);return _0x3de9ed;}else{if(!$gameSwitches['value'](_0x201cff))return![];}}}if(_0xce6fb0['match'](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x39d4b0=JSON['parse']('['+RegExp['$1'][_0x79eb87(0x3cf)](/\d+/g)+']');for(const _0x32504e of _0x39d4b0){if(_0x79eb87(0x15d)===_0x79eb87(0x15d)){if($gameSwitches['value'](_0x32504e))return![];}else{const _0x4afbe4=_0x136a0c[_0x79eb87(0x2fb)],_0xaa784d=_0x514d26[_0x79eb87(0x422)];this['bitmap']=new _0x3e6433(_0x4afbe4,_0xaa784d),this['drawNewLabelIcon'](),this[_0x79eb87(0x3e2)]();}}}return VisuMZ[_0x79eb87(0x331)][_0x79eb87(0x21b)]['call'](this,_0x47a487);},Window_ShopStatus[_0x9e78a(0x433)]=VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x5b0)][_0x9e78a(0x444)][_0x9e78a(0x32b)]??0xf0,VisuMZ['ItemsEquipsCore']['Window_ShopStatus_setItem']=Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x23b)],Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x23b)]=function(_0x126f26){const _0x47ca27=_0x9e78a;_0x126f26=DataManager[_0x47ca27(0x5bb)](_0x126f26),DataManager[_0x47ca27(0x613)](_0x126f26)||DataManager['isArmor'](_0x126f26)?this['setItemDelay'](_0x126f26):VisuMZ[_0x47ca27(0x331)][_0x47ca27(0x175)][_0x47ca27(0x20e)](this,_0x126f26);},Window_ShopStatus['prototype']['setItemDelay']=function(_0xd59777){const _0x20175b=_0x9e78a;this[_0x20175b(0x262)]=_0xd59777;const _0x5ba635=Window_ShopStatus[_0x20175b(0x433)];setTimeout(this[_0x20175b(0x533)][_0x20175b(0x376)](this,_0xd59777),_0x5ba635);},Window_ShopStatus[_0x9e78a(0x1e9)]['refreshDelay']=function(_0x4d1ac3){const _0x32935f=_0x9e78a;this[_0x32935f(0x262)]===_0x4d1ac3&&this[_0x32935f(0x303)]();},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x2cd)]=function(){return![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x31c)]=function(){const _0x2dc10b=_0x9e78a;Window_StatusBase[_0x2dc10b(0x1e9)]['loadFaceImages'][_0x2dc10b(0x20e)](this);for(const _0x538282 of $gameParty[_0x2dc10b(0x482)]()){ImageManager['loadCharacter'](_0x538282[_0x2dc10b(0x545)]());}},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x50f)]=function(){const _0x1a2a96=_0x9e78a;return VisuMZ[_0x1a2a96(0x331)]['Settings']['StatusWindow']['Translucent'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x303)]=function(){const _0x109dd6=_0x9e78a;this[_0x109dd6(0x281)][_0x109dd6(0x59c)](),this['contentsBack'][_0x109dd6(0x59c)]();if(this[_0x109dd6(0x262)]){if(_0x109dd6(0x5f7)!==_0x109dd6(0x225))this[_0x109dd6(0x293)](),this[_0x109dd6(0x23f)](!![]),this[_0x109dd6(0x265)](),this[_0x109dd6(0x29b)]()?this[_0x109dd6(0x260)]():this[_0x109dd6(0x200)](),this[_0x109dd6(0x1ba)]();else{const _0x105578=_0x109dd6(0x333);if(this[_0x109dd6(0x287)][_0x105578])return this[_0x109dd6(0x287)][_0x105578];let _0x3e6e7a='';return this['_itemData'][_0x109dd6(0x646)]>0x0?_0x3e6e7a+='+%1'['format'](this[_0x109dd6(0x3cb)][_0x109dd6(0x646)]):_0x3e6e7a+='%1'[_0x109dd6(0x4a6)](this[_0x109dd6(0x3cb)][_0x109dd6(0x646)]),_0x3e6e7a;}}},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x4b3)]=function(_0x1d81c2,_0x1809fa){const _0x1c8002=_0x9e78a;if(!this[_0x1c8002(0x29b)]()&&!DataManager[_0x1c8002(0x4d8)](this[_0x1c8002(0x262)]))return;const _0x518c14=this[_0x1c8002(0x513)]-this['itemPadding']()-_0x1d81c2,_0x2e36de=this[_0x1c8002(0x227)](_0x1c8002(0x3d7));this[_0x1c8002(0x32e)](ColorManager[_0x1c8002(0x2c8)]()),this[_0x1c8002(0x3ce)](TextManager[_0x1c8002(0x5ed)],_0x1d81c2+this[_0x1c8002(0x4fb)](),_0x1809fa,_0x518c14-_0x2e36de),this[_0x1c8002(0x404)](),this['drawItemNumber'](this['_item'],_0x1d81c2,_0x1809fa,_0x518c14);},Window_ShopStatus['prototype'][_0x9e78a(0x2f7)]=function(_0x3d8154,_0x5583bb,_0x5608a9,_0x34cc5f,_0x215bd3){const _0x1529d6=_0x9e78a;if(VisuMZ[_0x1529d6(0x331)][_0x1529d6(0x5b0)]['StatusWindow']['DrawBackRect']===![])return;_0x215bd3=Math[_0x1529d6(0x26e)](_0x215bd3||0x1,0x1);while(_0x215bd3--){_0x34cc5f=_0x34cc5f||this[_0x1529d6(0x1ee)](),this[_0x1529d6(0x312)][_0x1529d6(0x443)]=0xa0;const _0x5ed44f=ColorManager[_0x1529d6(0x4ce)]();this[_0x1529d6(0x312)][_0x1529d6(0x243)](_0x3d8154+0x1,_0x5583bb+0x1,_0x5608a9-0x2,_0x34cc5f-0x2,_0x5ed44f),this[_0x1529d6(0x312)][_0x1529d6(0x443)]=0xff;}},ColorManager['getItemsEquipsCoreBackColor1']=function(){const _0x469e09=_0x9e78a,_0x436ffb=VisuMZ[_0x469e09(0x331)][_0x469e09(0x5b0)][_0x469e09(0x444)];let _0x3f6226=_0x436ffb[_0x469e09(0x417)]!==undefined?_0x436ffb[_0x469e09(0x417)]:0x13;return ColorManager[_0x469e09(0x23c)](_0x3f6226);},Window_ShopStatus[_0x9e78a(0x1e9)]['drawEquipData']=function(){const _0x61c730=_0x9e78a;this[_0x61c730(0x362)]=null;if(VisuMZ[_0x61c730(0x331)]['Settings']['StatusWindow'][_0x61c730(0x25b)]){VisuMZ[_0x61c730(0x331)][_0x61c730(0x5b0)][_0x61c730(0x444)]['DrawEquipData'][_0x61c730(0x20e)](this);return;}const _0x2e8929=this[_0x61c730(0x1ee)](),_0x4ee334=this[_0x61c730(0x374)]()+0x8;let _0x22fad3=0x0,_0x31b356=0x0,_0x1ad622=this[_0x61c730(0x513)],_0x594692=this[_0x61c730(0x159)],_0x5ea361=Math[_0x61c730(0x207)](_0x1ad622/0x2),_0x3a00ea=_0x22fad3+_0x1ad622-_0x5ea361;this[_0x61c730(0x632)](this[_0x61c730(0x262)],_0x22fad3+this[_0x61c730(0x4fb)](),_0x31b356,_0x1ad622-this[_0x61c730(0x4fb)]()*0x2),this[_0x61c730(0x2f7)](_0x22fad3,_0x31b356,_0x1ad622),_0x31b356+=_0x2e8929;if(this[_0x61c730(0x4cb)](_0x22fad3,_0x31b356,_0x5ea361))_0x31b356+=0x0;if(this['drawItemQuantity'](_0x3a00ea,_0x31b356,_0x5ea361))_0x31b356+=_0x2e8929;const _0x6797d2=this[_0x61c730(0x221)](),_0x351dba=_0x31b356;_0x31b356=_0x594692-_0x6797d2['length']*_0x4ee334-0x4;let _0x3acd49=_0x22fad3,_0x31985f=0x0,_0x16c153=_0x31b356;for(const _0x5be530 of _0x6797d2){_0x31985f=Math[_0x61c730(0x26e)](this[_0x61c730(0x2c5)](_0x5be530,_0x22fad3+0x4,_0x31b356+0x4,_0x1ad622),_0x31985f),_0x31b356+=_0x4ee334;}const _0x3882e2=$gameParty['maxBattleMembers'](),_0x1cc353=Math['floor']((_0x1ad622-_0x31985f)/_0x3882e2);_0x31985f=_0x1ad622-_0x1cc353*_0x3882e2;for(const _0x38835e of $gameParty[_0x61c730(0x4e8)]()){const _0x22bc57=$gameParty[_0x61c730(0x4e8)]()[_0x61c730(0x63b)](_0x38835e),_0x7aedb=_0x3acd49+_0x31985f+_0x22bc57*_0x1cc353;this[_0x61c730(0x23f)](_0x38835e[_0x61c730(0x380)](this['_item'])),this[_0x61c730(0x1eb)](_0x38835e,_0x7aedb+_0x1cc353/0x2,_0x16c153);let _0x247eb9=_0x16c153;for(const _0x42067a of _0x6797d2){if('vhjwt'!==_0x61c730(0x2b1)){const _0x2f9522=_0x247eb9-(_0x2e8929-_0x4ee334)/0x2;this[_0x61c730(0x23e)](_0x38835e,_0x42067a,_0x7aedb,_0x2f9522,_0x1cc353),_0x247eb9+=_0x4ee334;}else{if(this[_0x61c730(0x362)])return;if(!_0x43cb33['ItemsEquipsCore'][_0x61c730(0x5b0)]['EquipScene'][_0x61c730(0x5d7)])return;const _0x1681e3=_0x49e9c7[_0x61c730(0x12f)](_0x2d7b06[_0x61c730(0x62b)]()*this[_0x61c730(0x41b)]),_0x3098e9=_0x5a7c1f[_0x61c730(0x12f)](_0x3db900[_0x61c730(0x43b)]()*this['mmp']);if(this['hp']>0x0)this['setHp'](_0x1681e3);if(this['mp']>0x0)this[_0x61c730(0x63f)](_0x3098e9);}}}this['drawItemDarkRect'](_0x3acd49,_0x351dba,_0x31985f,_0x16c153-_0x351dba);for(let _0x1d8939=0x0;_0x1d8939<_0x3882e2;_0x1d8939++){const _0x57acee=_0x3acd49+_0x31985f+_0x1d8939*_0x1cc353;this[_0x61c730(0x2f7)](_0x57acee,_0x351dba,_0x1cc353,_0x16c153-_0x351dba);}for(const _0x137b36 of _0x6797d2){this['drawItemDarkRect'](_0x3acd49,_0x16c153,_0x31985f,_0x4ee334);for(let _0x42eb49=0x0;_0x42eb49<_0x3882e2;_0x42eb49++){const _0x24780d=_0x3acd49+_0x31985f+_0x42eb49*_0x1cc353;this[_0x61c730(0x2f7)](_0x24780d,_0x16c153,_0x1cc353,_0x4ee334);}_0x16c153+=_0x4ee334;}},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemEquipType']=function(_0x2569cb,_0x381963,_0x481b91){const _0x490166=_0x9e78a;if(!this[_0x490166(0x29b)]())return![];const _0x5ee797=$dataSystem[_0x490166(0x3ff)][this['_item']['etypeId']];return this[_0x490166(0x61a)](_0x5ee797,_0x2569cb,_0x381963,_0x481b91,!![]),this['drawItemDarkRect'](_0x2569cb,_0x381963,_0x481b91),this[_0x490166(0x293)](),!![];},Window_ShopStatus['prototype'][_0x9e78a(0x202)]=function(){const _0x62ee08=_0x9e78a,_0xb5605b=VisuMZ[_0x62ee08(0x331)][_0x62ee08(0x5b0)][_0x62ee08(0x4e7)][_0x62ee08(0x52c)];return _0xb5605b[_0x62ee08(0x4a6)]($gameParty[_0x62ee08(0x1ad)](this[_0x62ee08(0x262)]));},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x221)]=function(){const _0x41cd9e=_0x9e78a;let _0x58b67c=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];return Imported[_0x41cd9e(0x423)]&&(_0x58b67c=VisuMZ['CoreEngine']['Settings'][_0x41cd9e(0x571)][_0x41cd9e(0x5cc)]),_0x58b67c=_0x58b67c[_0x41cd9e(0x4e5)](_0x162b88=>typeof _0x162b88==='number'?_0x162b88:_0x162b88[_0x41cd9e(0x289)]()[_0x41cd9e(0x361)]()),_0x58b67c;},Window_ShopStatus['prototype'][_0x9e78a(0x186)]=function(){const _0x577a2d=_0x9e78a;return VisuMZ[_0x577a2d(0x331)][_0x577a2d(0x5b0)][_0x577a2d(0x444)][_0x577a2d(0x5b2)];},Window_ShopStatus['prototype'][_0x9e78a(0x2c5)]=function(_0x537fb0,_0x4f368b,_0x521c92,_0x17ae47){const _0x155bb6=_0x9e78a;this[_0x155bb6(0x293)](),this[_0x155bb6(0x281)]['fontSize']=this[_0x155bb6(0x186)]();let _0x5b6b6a=this['textWidth'](TextManager['param'](_0x537fb0))+0x4+_0x4f368b;if(Imported[_0x155bb6(0x423)]){this[_0x155bb6(0x2dc)](_0x4f368b,_0x521c92,_0x17ae47,_0x537fb0,!![]);if(VisuMZ['CoreEngine']['Settings'][_0x155bb6(0x571)][_0x155bb6(0x56f)]){if(_0x155bb6(0x5b7)===_0x155bb6(0x5b7))_0x5b6b6a+=ImageManager['iconWidth']+0x4;else return this['isUseItemsEquipsCoreUpdatedLayout']()?this['helpWindowRectItemsEquipsCore']():_0x5c46d3[_0x155bb6(0x331)][_0x155bb6(0x2cc)][_0x155bb6(0x20e)](this);}}else this[_0x155bb6(0x32e)](ColorManager[_0x155bb6(0x2c8)]()),this[_0x155bb6(0x3ce)](TextManager['param'](_0x537fb0),_0x4f368b,_0x521c92,_0x17ae47);return this[_0x155bb6(0x293)](),_0x5b6b6a;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x23e)]=function(_0x17c69d,_0x1ae96c,_0xb742fb,_0xaedf2e,_0x12588b){const _0x54e9e4=_0x9e78a;_0xb742fb+=this[_0x54e9e4(0x4fb)](),_0x12588b-=this[_0x54e9e4(0x4fb)]()*0x2;const _0x2b1df9=VisuMZ[_0x54e9e4(0x331)][_0x54e9e4(0x5b0)][_0x54e9e4(0x444)];this['contents'][_0x54e9e4(0x4df)]=_0x2b1df9[_0x54e9e4(0x5b2)],this[_0x54e9e4(0x23f)](_0x17c69d[_0x54e9e4(0x380)](this[_0x54e9e4(0x262)]));if(_0x17c69d[_0x54e9e4(0x54b)](this[_0x54e9e4(0x262)])&&!_0x17c69d['anyEmptyEquipSlotsOfSameEtype'](this['_item'])){if(_0x54e9e4(0x154)===_0x54e9e4(0x154)){const _0x2a8471=_0x2b1df9[_0x54e9e4(0x30f)];this[_0x54e9e4(0x3ce)](_0x2a8471,_0xb742fb,_0xaedf2e,_0x12588b,_0x54e9e4(0x550));}else{if(!_0x42d1c)return[];this[_0x54e9e4(0x15e)]=this[_0x54e9e4(0x15e)]||{};const _0x2ba725=_0x54e9e4(0x13a)[_0x54e9e4(0x4a6)](this[_0x54e9e4(0x613)](_0x33178a)?_0x54e9e4(0x563):_0x54e9e4(0x4e2),_0x5f4aa5['id']);if(this[_0x54e9e4(0x15e)][_0x2ba725]!==_0x32d29d)return this['_getEquipRequirements'][_0x2ba725];let _0x1b242a=[];const _0x2ed6a3=_0xb170a5[_0x54e9e4(0x173)]||'';return _0x2ed6a3[_0x54e9e4(0x3cf)](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x1b242a=_0x3c33c8(_0x488400['$1'])['split'](/[\r\n]+/)),this[_0x54e9e4(0x15e)][_0x2ba725]=_0x1b242a,this['_getEquipRequirements'][_0x2ba725];}}else{if(_0x17c69d[_0x54e9e4(0x380)](this[_0x54e9e4(0x262)])){if('xVrXJ'!=='xVrXJ')this[_0x54e9e4(0x61f)](),_0x5491f4[_0x54e9e4(0x331)]['Scene_Boot_onDatabaseLoaded'][_0x54e9e4(0x20e)](this),this[_0x54e9e4(0x1b3)](),_0x46503b[_0x54e9e4(0x331)][_0x54e9e4(0x449)](),_0xf3b227[_0x54e9e4(0x331)][_0x54e9e4(0x330)]();else{const _0x152694=this[_0x54e9e4(0x5a5)](_0x17c69d);let _0x5c6ca0=0x0,_0x5efcca=0x0,_0x277858=0x0;if(Imported[_0x54e9e4(0x423)])_0x5c6ca0=_0x152694[_0x54e9e4(0x4d5)](_0x1ae96c),_0x5efcca=_0x5c6ca0-_0x17c69d[_0x54e9e4(0x4d5)](_0x1ae96c),this[_0x54e9e4(0x32e)](ColorManager['paramchangeTextColor'](_0x5efcca)),_0x277858=(_0x5efcca>=0x0?'+':'')+VisuMZ['ConvertNumberToString'](_0x5efcca,0x0,_0x1ae96c);else{if(_0x54e9e4(0x36b)!==_0x54e9e4(0x36b))return _0xe9ffc2[_0x54e9e4(0x5d1)]['_goodsCount']>0x0;else _0x5c6ca0=_0x152694[_0x54e9e4(0x432)](_0x1ae96c),_0x5efcca=_0x5c6ca0-_0x17c69d['param'](_0x1ae96c),this[_0x54e9e4(0x32e)](ColorManager[_0x54e9e4(0x235)](_0x5efcca)),_0x277858=(_0x5efcca>=0x0?'+':'')+_0x5efcca;}_0x277858==='+0'&&(_0x54e9e4(0x153)===_0x54e9e4(0x244)?(this['deactivate'](),this[_0x54e9e4(0x37c)]()):_0x277858=_0x2b1df9[_0x54e9e4(0x487)]),this[_0x54e9e4(0x3ce)](_0x277858,_0xb742fb,_0xaedf2e,_0x12588b,_0x54e9e4(0x550));}}else{if(_0x54e9e4(0x468)!=='EtBIi'){const _0x3d5c71=_0x2b1df9['CannotEquipMarker'];this[_0x54e9e4(0x3ce)](_0x3d5c71,_0xb742fb,_0xaedf2e,_0x12588b,_0x54e9e4(0x550));}else _0x18de35[_0x54e9e4(0x4e0)](_0x54e9e4(0x4a3))&&this['allowShiftScrolling']()?this[_0x54e9e4(0x174)]():this['cursorUp'](_0x2be9ba[_0x54e9e4(0x3df)]('up'));}}this[_0x54e9e4(0x293)](),this[_0x54e9e4(0x23f)](!![]);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x5a5)]=function(_0x21975f){const _0x3d12e9=_0x9e78a;if(this[_0x3d12e9(0x4b0)](_0x21975f)){const _0xc044d1=JsonEx['makeDeepCopy'](_0x21975f);_0xc044d1[_0x3d12e9(0x362)]=!![];const _0x41f795=_0xc044d1[_0x3d12e9(0x2b6)](this[_0x3d12e9(0x262)]);_0x41f795>=0x0&&_0xc044d1[_0x3d12e9(0x19f)](_0x41f795,this[_0x3d12e9(0x262)]),this[_0x3d12e9(0x362)]=_0xc044d1;}return this['_tempActor'];},Window_ShopStatus['prototype'][_0x9e78a(0x4b0)]=function(_0x440c3b){const _0x5173e2=_0x9e78a;if(!this[_0x5173e2(0x362)])return!![];return this[_0x5173e2(0x362)][_0x5173e2(0x43e)]()!==_0x440c3b['actorId']();},Game_Actor[_0x9e78a(0x1e9)][_0x9e78a(0x34a)]=function(_0x5519d4){const _0x59fa4c=_0x9e78a;if(!_0x5519d4)return![];const _0x34884f=_0x5519d4[_0x59fa4c(0x589)],_0x47ac1c=this[_0x59fa4c(0x24a)]();for(let _0x55239c=0x0;_0x55239c<_0x47ac1c[_0x59fa4c(0x458)];_0x55239c++){const _0x43bf37=_0x47ac1c[_0x55239c];if(_0x43bf37!==_0x34884f)continue;if(!this[_0x59fa4c(0x5be)]()[_0x55239c])return!![];}return![];},Game_Actor['prototype'][_0x9e78a(0x2b6)]=function(_0x4f444d){const _0x12429c=_0x9e78a;if(!_0x4f444d)return-0x1;const _0x513556=_0x4f444d[_0x12429c(0x589)],_0x2ae174=this['equipSlots']();let _0x2295a6=-0x1;for(let _0x50ba8a=0x0;_0x50ba8a<_0x2ae174[_0x12429c(0x458)];_0x50ba8a++){const _0x266b7b=_0x2ae174[_0x50ba8a];if(_0x266b7b!==_0x513556)continue;if(!this['equips']()[_0x50ba8a])return _0x50ba8a;if(_0x2295a6<0x0)_0x2295a6=_0x50ba8a;}return _0x2295a6;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x200)]=function(){const _0x570b06=_0x9e78a;VisuMZ[_0x570b06(0x331)][_0x570b06(0x5b0)][_0x570b06(0x444)][_0x570b06(0x2c7)]['call'](this);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x632)]=function(_0x3a2159,_0x5ac0b1,_0x1eaa7c,_0xe4a768){const _0x15c3c6=_0x9e78a,_0x3b234a=DataManager['isSkill'](_0x3a2159,_0x5ac0b1,_0x1eaa7c,_0xe4a768)&&Imported[_0x15c3c6(0x634)],_0x3fc5e0=_0x3a2159?_0x3a2159[_0x15c3c6(0x3a7)]:'';if(_0x3b234a)Window_SkillList[_0x15c3c6(0x1e9)][_0x15c3c6(0x5a3)][_0x15c3c6(0x20e)](this,_0x3a2159);Window_Base['prototype']['drawItemName'][_0x15c3c6(0x20e)](this,_0x3a2159,_0x5ac0b1,_0x1eaa7c,_0xe4a768);if(_0x3b234a)_0x3a2159['name']=_0x3fc5e0;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x265)]=function(){const _0x249aff=_0x9e78a;this['_customItemInfo']={};if(!this[_0x249aff(0x262)])return;const _0x4f699f=this['_item'][_0x249aff(0x173)];if(_0x4f699f[_0x249aff(0x3cf)](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x392f8f=String(RegExp['$1'])[_0x249aff(0x19d)](/[\r\n]+/);for(const _0x59407c of _0x392f8f){if(_0x249aff(0x4fd)===_0x249aff(0x509)){const _0x554ecc=this[_0x249aff(0x63c)](_0x28929d);if(_0x554ecc[_0x249aff(0x3cf)](/\\I\[(\d+)\]/i)){const _0x599cf5=this['itemLineRect'](_0x1d4d73),_0x4bf041=this[_0x249aff(0x50b)](_0x554ecc)['width'];return _0x4bf041<=_0x599cf5[_0x249aff(0x1d2)]?'iconText':_0x249aff(0x60a);}}else{if(_0x59407c[_0x249aff(0x3cf)](/(.*):[ ](.*)/i)){const _0x4caf07=String(RegExp['$1'])[_0x249aff(0x289)]()[_0x249aff(0x361)](),_0x6f03e1=String(RegExp['$2'])['trim']();this[_0x249aff(0x287)][_0x4caf07]=_0x6f03e1;}}}}},Window_ShopStatus['prototype']['itemDataFontSize']=function(){const _0x2bb7f9=_0x9e78a;return Math[_0x2bb7f9(0x26e)](0x1,$gameSystem['mainFontSize']()-0x4);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x293)]=function(){const _0x255098=_0x9e78a;Window_StatusBase[_0x255098(0x1e9)][_0x255098(0x293)][_0x255098(0x20e)](this),this[_0x255098(0x281)][_0x255098(0x4df)]=this[_0x255098(0x1ff)]||this[_0x255098(0x281)][_0x255098(0x4df)],this['contents']['textColor']=this[_0x255098(0x419)]||this[_0x255098(0x281)]['textColor'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x47f)]=function(){const _0x22bbf1=_0x9e78a;return this[_0x22bbf1(0x281)][_0x22bbf1(0x4df)]/$gameSystem[_0x22bbf1(0x526)]();},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x1be)]=function(_0x2cda8a,_0x1826be,_0x1f9838){const _0x212b3c=_0x9e78a,_0x6144e5=ImageManager[_0x212b3c(0x39e)](_0x212b3c(0x431)),_0x1ea38d=ImageManager[_0x212b3c(0x2fb)],_0x186098=ImageManager[_0x212b3c(0x422)],_0x12da1c=_0x2cda8a%0x10*_0x1ea38d,_0x2bd12d=Math[_0x212b3c(0x207)](_0x2cda8a/0x10)*_0x186098,_0x5f1f37=Math['ceil'](_0x1ea38d*this[_0x212b3c(0x47f)]()),_0x4691b4=Math[_0x212b3c(0x504)](_0x186098*this['fontSizeRatio']());this[_0x212b3c(0x281)][_0x212b3c(0x1d1)](_0x6144e5,_0x12da1c,_0x2bd12d,_0x1ea38d,_0x186098,_0x1826be,_0x1f9838,_0x5f1f37,_0x4691b4);},Window_ShopStatus['prototype']['processDrawIcon']=function(_0x46cadf,_0x3e8cde){const _0x57d7e0=_0x9e78a;_0x3e8cde[_0x57d7e0(0x32c)]&&this[_0x57d7e0(0x1be)](_0x46cadf,_0x3e8cde['x'],_0x3e8cde['y']+0x2);_0x3e8cde['x']+=Math[_0x57d7e0(0x504)](ImageManager['iconWidth']*this[_0x57d7e0(0x47f)]());if(this[_0x57d7e0(0x47f)]()===0x1)_0x3e8cde['x']+=0x4;},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemKeyData']=function(_0x1d50b1,_0x5a067d,_0x3537ec,_0x1c7fb9,_0x41cf28,_0x2d8f0c){const _0x3c982e=_0x9e78a;_0x1d50b1=_0x1d50b1||'',_0x2d8f0c=_0x2d8f0c||_0x3c982e(0x42d),this['_resetFontSize']=this['itemDataFontSize'](),this[_0x3c982e(0x419)]=_0x41cf28?ColorManager[_0x3c982e(0x2c8)]():this['contents'][_0x3c982e(0x4da)],_0x5a067d+=this[_0x3c982e(0x4fb)](),_0x1c7fb9-=this[_0x3c982e(0x4fb)]()*0x2;const _0x4055d2=this[_0x3c982e(0x50b)](_0x1d50b1);if(_0x2d8f0c===_0x3c982e(0x550))_0x5a067d=_0x5a067d+Math[_0x3c982e(0x207)]((_0x1c7fb9-_0x4055d2[_0x3c982e(0x1d2)])/0x2);else _0x2d8f0c===_0x3c982e(0x5f6)&&(_0x5a067d=_0x5a067d+_0x1c7fb9-_0x4055d2[_0x3c982e(0x1d2)]);_0x3537ec+=(this[_0x3c982e(0x1ee)]()-_0x4055d2[_0x3c982e(0x568)])/0x2,this[_0x3c982e(0x42c)](_0x1d50b1,_0x5a067d,_0x3537ec,_0x1c7fb9),this['_resetFontSize']=undefined,this['_resetFontColor']=undefined,this[_0x3c982e(0x293)]();},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x33f)]=function(_0x386916,_0x432e4f,_0x2a5433){const _0x41bc6c=_0x9e78a;if(!DataManager[_0x41bc6c(0x4d8)](this['_item']))return![];const _0x283f38=this['getItemConsumableLabel']();this[_0x41bc6c(0x61a)](_0x283f38,_0x386916,_0x432e4f,_0x2a5433,!![]);const _0x3d650d=this[_0x41bc6c(0x494)]();return this[_0x41bc6c(0x61a)](_0x3d650d,_0x386916,_0x432e4f,_0x2a5433,![],_0x41bc6c(0x5f6)),this[_0x41bc6c(0x2f7)](_0x386916,_0x432e4f,_0x2a5433),this[_0x41bc6c(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x4a1)]=function(){const _0x7f35ce=_0x9e78a;return VisuMZ[_0x7f35ce(0x331)]['Settings']['StatusWindow'][_0x7f35ce(0x450)];},Window_ShopStatus['prototype'][_0x9e78a(0x494)]=function(){const _0x23b193=_0x9e78a,_0x34ce56=_0x23b193(0x1d9);if(this[_0x23b193(0x287)][_0x34ce56])return this['_customItemInfo'][_0x34ce56];return this[_0x23b193(0x5e8)]()?VisuMZ[_0x23b193(0x331)][_0x23b193(0x5b0)][_0x23b193(0x444)][_0x23b193(0x219)]:VisuMZ[_0x23b193(0x331)][_0x23b193(0x5b0)]['StatusWindow']['NotConsumable'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x5e8)]=function(){const _0x4a231f=_0x9e78a;if(VisuMZ[_0x4a231f(0x19a)]&&VisuMZ[_0x4a231f(0x19a)][_0x4a231f(0x5b0)][_0x4a231f(0x1e1)][_0x4a231f(0x1a5)]&&DataManager['isKeyItem'](this[_0x4a231f(0x262)])){if('dTBNM'!==_0x4a231f(0x255))_0x40473e=this[_0x4a231f(0x513)]-_0x32cc6a;else return![];}else{if('ohHDb'!==_0x4a231f(0x1fc))return this['_item'][_0x4a231f(0x1e8)];else{const _0x3cfc48=_0x1ee2bb(_0x3688db['$1'])[_0x4a231f(0x19d)](',')[_0x4a231f(0x4e5)](_0x4db6d7=>_0x333c91(_0x4db6d7));if(_0x3cfc48[_0x4a231f(0x5a9)](_0x56e321=>!_0x52776e[_0x4a231f(0x4d3)](_0x56e321)))return![];}}},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemQuantity']=function(_0x16fe18,_0x216c1d,_0x40140f){const _0x52c3cd=_0x9e78a;if(!this[_0x52c3cd(0x29b)]()&&!DataManager[_0x52c3cd(0x4d8)](this['_item']))return![];if(DataManager[_0x52c3cd(0x2fe)](this[_0x52c3cd(0x262)])&&!$dataSystem[_0x52c3cd(0x193)]){if(_0x52c3cd(0x4db)===_0x52c3cd(0x4db)){const _0x48c4b3=TextManager[_0x52c3cd(0x2da)];this[_0x52c3cd(0x61a)](_0x48c4b3,_0x16fe18,_0x216c1d,_0x40140f,!![],'center');}else return _0x5692fe[_0x52c3cd(0x1e9)][_0x52c3cd(0x156)][_0x52c3cd(0x20e)](this,_0x1182fc);}else{const _0x146d1a=TextManager[_0x52c3cd(0x5ed)];this[_0x52c3cd(0x61a)](_0x146d1a,_0x16fe18,_0x216c1d,_0x40140f,!![]);const _0x3a3357=this['getItemQuantityText']();this['drawItemKeyData'](_0x3a3357,_0x16fe18,_0x216c1d,_0x40140f,![],'right');}return this[_0x52c3cd(0x2f7)](_0x16fe18,_0x216c1d,_0x40140f),this[_0x52c3cd(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x202)]=function(){const _0x350f19=_0x9e78a,_0x49b75f=_0x350f19(0x535);if(this[_0x350f19(0x287)][_0x49b75f])return this[_0x350f19(0x287)][_0x49b75f];const _0x2d8837=VisuMZ[_0x350f19(0x331)]['Settings'][_0x350f19(0x4e7)][_0x350f19(0x52c)];return _0x2d8837[_0x350f19(0x4a6)]($gameParty[_0x350f19(0x1ad)](this[_0x350f19(0x262)]));},Window_ShopStatus['prototype'][_0x9e78a(0x31a)]=function(_0xd2bb1c,_0x5cdb79,_0x4ae794){const _0xe67c84=_0x9e78a,_0x371b63=this[_0xe67c84(0x183)]();return this[_0xe67c84(0x61a)](_0x371b63,_0xd2bb1c,_0x5cdb79,_0x4ae794,![],_0xe67c84(0x550)),this[_0xe67c84(0x2f7)](_0xd2bb1c,_0x5cdb79,_0x4ae794),this[_0xe67c84(0x293)](),!![];},Window_ShopStatus['prototype']['getItemOccasionText']=function(){const _0xdf7eb1=_0x9e78a,_0x2c71b9=_0xdf7eb1(0x2fd);if(this[_0xdf7eb1(0x287)][_0x2c71b9])return this[_0xdf7eb1(0x287)][_0x2c71b9];const _0x4db29d=VisuMZ[_0xdf7eb1(0x331)][_0xdf7eb1(0x5b0)][_0xdf7eb1(0x444)],_0x3426f1=_0xdf7eb1(0x626)['format'](this[_0xdf7eb1(0x262)][_0xdf7eb1(0x211)]);return _0x4db29d[_0x3426f1];},Window_ShopStatus['prototype']['drawItemScope']=function(_0x51555e,_0xd0045e,_0x97e926){const _0x2da053=_0x9e78a,_0x53af03=this['getItemScopeText']();return this[_0x2da053(0x61a)](_0x53af03,_0x51555e,_0xd0045e,_0x97e926,![],_0x2da053(0x550)),this['drawItemDarkRect'](_0x51555e,_0xd0045e,_0x97e926),this[_0x2da053(0x293)](),!![];},Window_ShopStatus['prototype'][_0x9e78a(0x40e)]=function(){const _0x5384=_0x9e78a,_0x402ee9=_0x5384(0x19c);if(this[_0x5384(0x287)][_0x402ee9])return this[_0x5384(0x287)][_0x402ee9];const _0x2833d9=VisuMZ['ItemsEquipsCore']['Settings'][_0x5384(0x444)];if(Imported[_0x5384(0x2b7)]){if(_0x5384(0x5e6)!==_0x5384(0x1dc)){const _0x387ff9=this[_0x5384(0x262)][_0x5384(0x173)];if(_0x387ff9['match'](/<TARGET:[ ](.*)>/i)){const _0x39febc=String(RegExp['$1']);if(_0x39febc[_0x5384(0x3cf)](/(\d+) RANDOM ANY/i)){if(_0x5384(0x36e)===_0x5384(0x36e))return _0x2833d9[_0x5384(0x253)][_0x5384(0x4a6)](Number(RegExp['$1']));else _0x196e42[_0x5384(0x1e9)][_0x5384(0x138)][_0x5384(0x20e)](this);}else{if(_0x39febc[_0x5384(0x3cf)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x5384(0x1c5)==='LyJDY'?_0x2833d9['ScopeRandomEnemies'][_0x5384(0x4a6)](Number(RegExp['$1'])):_0x4f5c7a[_0x5384(0x2d3)]();else{if(_0x39febc[_0x5384(0x3cf)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x2833d9['ScopeRandomAllies'][_0x5384(0x4a6)](Number(RegExp['$1']));else{if(_0x39febc[_0x5384(0x3cf)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x2833d9['ScopeAlliesButUser'];}}}}}else{if(!this['_slotWindow'])return![];if(!this[_0x5384(0x457)][_0x5384(0x30b)])return![];return this['_slotWindow']['isShiftRemoveShortcutEnabled']();}}const _0x2bfa52=_0x5384(0x5c3)[_0x5384(0x4a6)](this['_item'][_0x5384(0x315)]);return _0x2833d9[_0x2bfa52];},Window_ShopStatus['prototype']['drawItemSpeed']=function(_0x2091bc,_0x1cd45f,_0x3bbbb5){const _0x2b9101=_0x9e78a,_0x2e9a76=this[_0x2b9101(0x600)]();this[_0x2b9101(0x61a)](_0x2e9a76,_0x2091bc,_0x1cd45f,_0x3bbbb5,!![]);const _0x4d5754=this[_0x2b9101(0x264)]();return this['drawItemKeyData'](_0x4d5754,_0x2091bc,_0x1cd45f,_0x3bbbb5,![],_0x2b9101(0x5f6)),this[_0x2b9101(0x2f7)](_0x2091bc,_0x1cd45f,_0x3bbbb5),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x600)]=function(){const _0x304875=_0x9e78a;return VisuMZ[_0x304875(0x331)]['Settings'][_0x304875(0x444)]['LabelSpeed'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x264)]=function(){const _0x1d671e=_0x9e78a,_0x301f59=_0x1d671e(0x141);if(this['_customItemInfo'][_0x301f59])return this['_customItemInfo'][_0x301f59];const _0x183b08=this[_0x1d671e(0x262)][_0x1d671e(0x451)];if(_0x183b08>=0x7d0)return VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)][_0x1d671e(0x444)][_0x1d671e(0x464)];else{if(_0x183b08>=0x3e8)return VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)]['StatusWindow']['Speed1000'];else{if(_0x183b08>0x0)return VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)][_0x1d671e(0x444)]['Speed1'];else{if(_0x183b08===0x0)return VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)][_0x1d671e(0x444)][_0x1d671e(0x553)];else{if(_0x183b08>-0x3e8)return VisuMZ['ItemsEquipsCore'][_0x1d671e(0x5b0)]['StatusWindow']['SpeedNeg999'];else{if(_0x183b08>-0x7d0){if(_0x1d671e(0x205)!==_0x1d671e(0x145))return VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)][_0x1d671e(0x444)][_0x1d671e(0x4bd)];else{const _0x3da091='MP\x20DAMAGE';if(this['_itemData'][_0x1d671e(0x1f4)]>=0x0&&this[_0x1d671e(0x3cb)][_0x1d671e(0x53d)]>=0x0&&!this[_0x1d671e(0x287)][_0x3da091])return![];const _0xf1d023=this[_0x1d671e(0x51c)]();this[_0x1d671e(0x61a)](_0xf1d023,_0x3e0836,_0x37ead8,_0x3c3ad8,!![]);const _0x539832=this[_0x1d671e(0x37a)]();return this[_0x1d671e(0x32e)](_0x554439[_0x1d671e(0x21e)](0x2)),this['drawItemKeyData'](_0x539832,_0x12e276,_0x6c35a7,_0x4af593,![],_0x1d671e(0x5f6)),this[_0x1d671e(0x2f7)](_0x37c9ba,_0xf83b19,_0x18ed0f),this[_0x1d671e(0x293)](),!![];}}else return _0x183b08<=-0x7d0?VisuMZ[_0x1d671e(0x331)][_0x1d671e(0x5b0)]['StatusWindow'][_0x1d671e(0x642)]:_0x1d671e(0x290);}}}}}},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x17c)]=function(_0x5c6a52,_0x14d7c8,_0x4f38fd){const _0x3bbb9e=_0x9e78a,_0x1d3f26=this['getItemSuccessRateLabel']();this[_0x3bbb9e(0x61a)](_0x1d3f26,_0x5c6a52,_0x14d7c8,_0x4f38fd,!![]);const _0x4d4104=this[_0x3bbb9e(0x2de)]();return this[_0x3bbb9e(0x61a)](_0x4d4104,_0x5c6a52,_0x14d7c8,_0x4f38fd,![],_0x3bbb9e(0x5f6)),this[_0x3bbb9e(0x2f7)](_0x5c6a52,_0x14d7c8,_0x4f38fd),this[_0x3bbb9e(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)]['getItemSuccessRateLabel']=function(){const _0x930578=_0x9e78a;return VisuMZ[_0x930578(0x331)][_0x930578(0x5b0)][_0x930578(0x444)]['LabelSuccessRate'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x2de)]=function(){const _0x21d49a=_0x9e78a,_0x30d3d1=_0x21d49a(0x435);if(this['_customItemInfo'][_0x30d3d1])return this[_0x21d49a(0x287)][_0x30d3d1];if(Imported[_0x21d49a(0x2b7)]){const _0x49d42b=this[_0x21d49a(0x262)]['note'];if(_0x49d42b[_0x21d49a(0x3cf)](/<ALWAYS HIT>/i))return _0x21d49a(0x413);else{if(_0x49d42b[_0x21d49a(0x3cf)](/<ALWAYS HIT RATE: (\d+)([%％])>/i)){if(_0x21d49a(0x1a0)==='LTvWX'){if(this['_numberWindow']&&this[_0x21d49a(0x22e)][_0x21d49a(0x30b)])return _0x53bfff[_0x21d49a(0x2bc)]('up',_0x21d49a(0x1f7));return _0x5d5e14[_0x21d49a(0x1e9)][_0x21d49a(0x47e)][_0x21d49a(0x20e)](this);}else return'%1%'[_0x21d49a(0x4a6)](Number(RegExp['$1']));}}}return _0x21d49a(0x538)[_0x21d49a(0x4a6)](this['_item'][_0x21d49a(0x2af)]);},Window_ShopStatus['prototype'][_0x9e78a(0x4cc)]=function(_0x1ab8bf,_0x40f91c,_0x1cfb2d){const _0x3f4ee8=_0x9e78a,_0x58442c=this[_0x3f4ee8(0x2f6)]();this[_0x3f4ee8(0x61a)](_0x58442c,_0x1ab8bf,_0x40f91c,_0x1cfb2d,!![]);const _0x20ca94=this[_0x3f4ee8(0x47c)]();return this[_0x3f4ee8(0x61a)](_0x20ca94,_0x1ab8bf,_0x40f91c,_0x1cfb2d,![],_0x3f4ee8(0x5f6)),this[_0x3f4ee8(0x2f7)](_0x1ab8bf,_0x40f91c,_0x1cfb2d),this[_0x3f4ee8(0x293)](),!![];},Window_ShopStatus['prototype'][_0x9e78a(0x2f6)]=function(){const _0x521cdd=_0x9e78a;return VisuMZ[_0x521cdd(0x331)]['Settings'][_0x521cdd(0x444)]['LabelRepeats'];},Window_ShopStatus['prototype'][_0x9e78a(0x47c)]=function(){const _0x22358c=_0x9e78a,_0x10f78d=_0x22358c(0x15b);if(this[_0x22358c(0x287)][_0x10f78d])return this[_0x22358c(0x287)][_0x10f78d];const _0x35f59b='×%1';return _0x35f59b[_0x22358c(0x4a6)](this[_0x22358c(0x262)]['repeats']);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x2d5)]=function(_0x42212c,_0x455347,_0x57053c){const _0x201eb4=_0x9e78a,_0x4ead2e=this[_0x201eb4(0x46e)]();this[_0x201eb4(0x61a)](_0x4ead2e,_0x42212c,_0x455347,_0x57053c,!![]);const _0x9300d1=this[_0x201eb4(0x594)]();return this[_0x201eb4(0x61a)](_0x9300d1,_0x42212c,_0x455347,_0x57053c,![],_0x201eb4(0x5f6)),this[_0x201eb4(0x2f7)](_0x42212c,_0x455347,_0x57053c),this[_0x201eb4(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x46e)]=function(){const _0x4eb826=_0x9e78a;return VisuMZ[_0x4eb826(0x331)]['Settings'][_0x4eb826(0x444)]['LabelHitType'];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x594)]=function(){const _0x259949=_0x9e78a,_0x1660a1=_0x259949(0x38a);if(this['_customItemInfo'][_0x1660a1])return this[_0x259949(0x287)][_0x1660a1];const _0x3d5ea4=VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow'],_0x2d7e3c=_0x259949(0x40c)[_0x259949(0x4a6)](this[_0x259949(0x262)][_0x259949(0x14e)]);return _0x3d5ea4[_0x2d7e3c];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x35f)]=function(_0x11a067,_0x5db359,_0x198de6){const _0x5b6351=_0x9e78a;if(this['_item'][_0x5b6351(0x3e4)]['type']<=0x0)return _0x5db359;if(this[_0x5b6351(0x3c4)](_0x11a067,_0x5db359,_0x198de6))_0x5db359+=this[_0x5b6351(0x1ee)]();if(this[_0x5b6351(0x3e7)](_0x11a067,_0x5db359,_0x198de6))_0x5db359+=this['lineHeight']();return this[_0x5b6351(0x293)](),_0x5db359;},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemDamageElement']=function(_0x1850e5,_0x7f1fe7,_0x4a1aa5){const _0xf51b0d=_0x9e78a,_0x3b83d4=this[_0xf51b0d(0x152)]();this[_0xf51b0d(0x61a)](_0x3b83d4,_0x1850e5,_0x7f1fe7,_0x4a1aa5,!![]);const _0xaf1e6d=this[_0xf51b0d(0x34f)]();return this['drawItemKeyData'](_0xaf1e6d,_0x1850e5,_0x7f1fe7,_0x4a1aa5,![],_0xf51b0d(0x5f6)),this[_0xf51b0d(0x2f7)](_0x1850e5,_0x7f1fe7,_0x4a1aa5),this[_0xf51b0d(0x293)](),!![];},Window_ShopStatus['prototype']['getItemDamageElementLabel']=function(){const _0x31806c=_0x9e78a;return VisuMZ[_0x31806c(0x331)][_0x31806c(0x5b0)]['StatusWindow'][_0x31806c(0x56d)];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x34f)]=function(){const _0x76b791=_0x9e78a,_0x2ad414=_0x76b791(0x1b0);if(this[_0x76b791(0x287)][_0x2ad414])return this[_0x76b791(0x287)][_0x2ad414];if(this[_0x76b791(0x262)][_0x76b791(0x3e4)][_0x76b791(0x248)]<=-0x1)return VisuMZ['ItemsEquipsCore'][_0x76b791(0x5b0)][_0x76b791(0x444)][_0x76b791(0x5a0)];else return this['_item']['damage'][_0x76b791(0x248)]===0x0?VisuMZ['ItemsEquipsCore'][_0x76b791(0x5b0)][_0x76b791(0x444)]['ElementNone']:$dataSystem[_0x76b791(0x5ad)][this['_item'][_0x76b791(0x3e4)]['elementId']];},Window_ShopStatus['prototype'][_0x9e78a(0x3e7)]=function(_0x44bd53,_0x7f5b71,_0xf73b53){const _0x1eb6ad=_0x9e78a,_0x24ca52=this[_0x1eb6ad(0x191)]();this[_0x1eb6ad(0x61a)](_0x24ca52,_0x44bd53,_0x7f5b71,_0xf73b53,!![]),this[_0x1eb6ad(0x1fb)]();const _0x13b76a=this[_0x1eb6ad(0x59f)](),_0xb76845=ColorManager[_0x1eb6ad(0x21e)]([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x1eb6ad(0x262)][_0x1eb6ad(0x3e4)][_0x1eb6ad(0x2aa)]]);return this['changeTextColor'](_0xb76845),this['drawItemKeyData'](_0x13b76a,_0x44bd53,_0x7f5b71,_0xf73b53,![],_0x1eb6ad(0x5f6)),this[_0x1eb6ad(0x2f7)](_0x44bd53,_0x7f5b71,_0xf73b53),this[_0x1eb6ad(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x191)]=function(){const _0x53b1fc=_0x9e78a;return Imported[_0x53b1fc(0x2b7)]&&DataManager[_0x53b1fc(0x2a3)](this['_item'])!==_0x53b1fc(0x60d)?_0x53b1fc(0x190)!=='NMDIZ'?this[_0x53b1fc(0x2d1)]():this[_0x53b1fc(0x390)]():this['getItemDamageAmountLabelOriginal']();},Window_ShopStatus['prototype']['getItemDamageAmountLabelOriginal']=function(){const _0x3e2b92=_0x9e78a,_0x2e1325=VisuMZ[_0x3e2b92(0x331)][_0x3e2b92(0x5b0)][_0x3e2b92(0x444)],_0x175388=_0x3e2b92(0x465)['format'](this[_0x3e2b92(0x262)]['damage'][_0x3e2b92(0x2aa)]),_0x4e02d9=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this[_0x3e2b92(0x262)][_0x3e2b92(0x3e4)][_0x3e2b92(0x2aa)]];return _0x2e1325[_0x175388]['format'](_0x4e02d9);},Window_ShopStatus[_0x9e78a(0x1e9)]['setupItemDamageTempActors']=function(){const _0x4a158c=_0x9e78a,_0x18eb09=$gameActors['actor'](0x1);this[_0x4a158c(0x5c8)]=JsonEx[_0x4a158c(0x1a3)](_0x18eb09),this[_0x4a158c(0x22f)]=JsonEx[_0x4a158c(0x1a3)](_0x18eb09);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x59f)]=function(){const _0x3497eb=_0x9e78a,_0x4efaeb='DAMAGE\x20MULTIPLIER';if(this[_0x3497eb(0x287)][_0x4efaeb])return this[_0x3497eb(0x287)][_0x4efaeb];return Imported[_0x3497eb(0x2b7)]&&DataManager['getDamageStyle'](this[_0x3497eb(0x262)])!==_0x3497eb(0x60d)?this[_0x3497eb(0x2c6)]():this[_0x3497eb(0x3b2)]();},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x3b2)]=function(){const _0x1d338c=_0x9e78a;window['a']=this['_tempActorA'],window['b']=this[_0x1d338c(0x22f)],this[_0x1d338c(0x5c8)][_0x1d338c(0x44f)](!![]),this[_0x1d338c(0x22f)][_0x1d338c(0x44f)]([0x3,0x4]['includes'](this[_0x1d338c(0x262)][_0x1d338c(0x3e4)][_0x1d338c(0x2aa)]));let _0x11569b=this[_0x1d338c(0x262)][_0x1d338c(0x3e4)][_0x1d338c(0x324)];try{if(_0x1d338c(0x17d)!==_0x1d338c(0x17d))return _0x39da3d[_0x1d338c(0x331)][_0x1d338c(0x5b0)]['EquipScene'][_0x1d338c(0x392)];else{const _0x5047e3=Math[_0x1d338c(0x26e)](eval(_0x11569b),0x0)/window['a']['atk'];return this[_0x1d338c(0x472)](),isNaN(_0x5047e3)?_0x1d338c(0x290):_0x1d338c(0x538)[_0x1d338c(0x4a6)](Math[_0x1d338c(0x12f)](_0x5047e3*0x64));}}catch(_0x45ed54){return $gameTemp['isPlaytest']()&&(console[_0x1d338c(0x53b)](_0x1d338c(0x534)[_0x1d338c(0x4a6)](this[_0x1d338c(0x262)][_0x1d338c(0x3a7)])),console[_0x1d338c(0x53b)](_0x45ed54)),this['revertGlobalNamespaceVariables'](),_0x1d338c(0x290);}},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x472)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x574)]=function(_0x1c322b,_0x5cfbde,_0x415c55){const _0x10041a=_0x9e78a;if(!this['makeItemData']())return _0x5cfbde;if(this[_0x10041a(0x409)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this[_0x10041a(0x317)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this['lineHeight']();if(this[_0x10041a(0x20c)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this[_0x10041a(0x395)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this['lineHeight']();if(this['drawItemEffectsMpDamage'](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this[_0x10041a(0x185)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this['drawItemEffectsSelfTpGain'](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this[_0x10041a(0x2f1)](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();if(this['drawItemEffectsRemovedStatesBuffs'](_0x1c322b,_0x5cfbde,_0x415c55))_0x5cfbde+=this[_0x10041a(0x1ee)]();return this[_0x10041a(0x293)](),_0x5cfbde;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x5a6)]=function(){return this['_item']['effects'];},Window_ShopStatus[_0x9e78a(0x1e9)]['makeItemData']=function(){const _0x53252b=_0x9e78a;let _0x684f0c=![];this[_0x53252b(0x3cb)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x5d55da=this['getItemEffects']();for(const _0x343fd9 of _0x5d55da){switch(_0x343fd9[_0x53252b(0x18e)]){case Game_Action[_0x53252b(0x495)]:this[_0x53252b(0x3cb)][_0x53252b(0x2b2)]+=_0x343fd9['value1'],this[_0x53252b(0x3cb)][_0x53252b(0x2b3)]+=_0x343fd9[_0x53252b(0x1e6)],_0x684f0c=!![];break;case Game_Action['EFFECT_RECOVER_MP']:this[_0x53252b(0x3cb)][_0x53252b(0x1f4)]+=_0x343fd9['value1'],this[_0x53252b(0x3cb)][_0x53252b(0x53d)]+=_0x343fd9[_0x53252b(0x1e6)],_0x684f0c=!![];break;case Game_Action['EFFECT_GAIN_TP']:this['_itemData']['gainTP']+=_0x343fd9['value1'],_0x684f0c=!![];break;case Game_Action['EFFECT_ADD_STATE']:this['_itemData'][_0x53252b(0x32f)][_0x53252b(0x51d)](_0x343fd9[_0x53252b(0x165)]),_0x684f0c=!![];break;case Game_Action[_0x53252b(0x608)]:this[_0x53252b(0x3cb)]['removeState'][_0x53252b(0x51d)](_0x343fd9[_0x53252b(0x165)]),this[_0x53252b(0x3cb)][_0x53252b(0x2ad)]=!![],_0x684f0c=!![];break;case Game_Action[_0x53252b(0x46a)]:this['_itemData'][_0x53252b(0x569)][_0x343fd9[_0x53252b(0x165)]]+=0x1,_0x684f0c=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this[_0x53252b(0x3cb)]['changeBuff'][_0x343fd9[_0x53252b(0x165)]]-=0x1,_0x684f0c=!![];break;case Game_Action[_0x53252b(0x170)]:this[_0x53252b(0x3cb)]['removeBuff'][_0x53252b(0x51d)](_0x343fd9['dataId']),this[_0x53252b(0x3cb)][_0x53252b(0x2ad)]=!![],_0x684f0c=!![];break;case Game_Action[_0x53252b(0x1f2)]:this[_0x53252b(0x3cb)][_0x53252b(0x60e)][_0x53252b(0x51d)](_0x343fd9[_0x53252b(0x165)]),this[_0x53252b(0x3cb)][_0x53252b(0x2ad)]=!![],_0x684f0c=!![];break;}}if(this['_itemData'][_0x53252b(0x32f)][_0x53252b(0x458)]>0x0)this['_itemData'][_0x53252b(0x3bb)]=!![];for(let _0x429486=0x0;_0x429486<this[_0x53252b(0x3cb)][_0x53252b(0x569)][_0x53252b(0x458)];_0x429486++){if(_0x53252b(0x249)!==_0x53252b(0x337)){if(this[_0x53252b(0x3cb)]['changeBuff'][_0x429486]!==0x0)this[_0x53252b(0x3cb)][_0x53252b(0x3bb)]=!![];}else this['addEquipCommand'](),this[_0x53252b(0x4aa)](),this['addClearCommand']();}this[_0x53252b(0x262)][_0x53252b(0x1de)]!==0x0&&(_0x53252b(0x488)===_0x53252b(0x488)?(this[_0x53252b(0x3cb)][_0x53252b(0x646)]=this['_item'][_0x53252b(0x1de)],_0x684f0c=!![]):this[_0x53252b(0x601)](_0xefd577));const _0x1c9ddb=['HP\x20RECOVERY',_0x53252b(0x18c),_0x53252b(0x348),_0x53252b(0x14d),'MP\x20DAMAGE',_0x53252b(0x311),'USER\x20TP\x20GAIN',_0x53252b(0x4ef),_0x53252b(0x5cd)];for(const _0x5274da of _0x1c9ddb){if(this[_0x53252b(0x287)][_0x5274da]){_0x684f0c=!![];break;}}return _0x684f0c;},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemEffectsHpRecovery']=function(_0x4354ad,_0x43bc3a,_0xbaaac8){const _0x41a3f9=_0x9e78a,_0x3c9837='HP\x20RECOVERY';if(this[_0x41a3f9(0x3cb)][_0x41a3f9(0x2b2)]<=0x0&&this[_0x41a3f9(0x3cb)][_0x41a3f9(0x2b3)]<=0x0&&!this[_0x41a3f9(0x287)][_0x3c9837])return![];const _0x2e2d7a=this['getItemEffectsHpRecoveryLabel']();this[_0x41a3f9(0x61a)](_0x2e2d7a,_0x4354ad,_0x43bc3a,_0xbaaac8,!![]);const _0x1f4b70=this[_0x41a3f9(0x4be)]();return this[_0x41a3f9(0x32e)](ColorManager[_0x41a3f9(0x21e)](0x1)),this[_0x41a3f9(0x61a)](_0x1f4b70,_0x4354ad,_0x43bc3a,_0xbaaac8,![],_0x41a3f9(0x5f6)),this[_0x41a3f9(0x2f7)](_0x4354ad,_0x43bc3a,_0xbaaac8),this[_0x41a3f9(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)]['getItemEffectsHpRecoveryLabel']=function(){const _0x10c721=_0x9e78a,_0x3d5aa7=VisuMZ['ItemsEquipsCore'][_0x10c721(0x5b0)][_0x10c721(0x444)]['LabelRecoverHP'];return _0x3d5aa7[_0x10c721(0x4a6)](TextManager['hp']);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x4be)]=function(){const _0x1aed14=_0x9e78a,_0x5bd7fe=_0x1aed14(0x4c7);if(this['_customItemInfo'][_0x5bd7fe])return this['_customItemInfo'][_0x5bd7fe];let _0x50899a='';if(this[_0x1aed14(0x3cb)]['rateHP']>0x0)_0x50899a+=_0x1aed14(0x4de)['format'](Math[_0x1aed14(0x207)](this['_itemData'][_0x1aed14(0x2b2)]*0x64));if(this[_0x1aed14(0x3cb)][_0x1aed14(0x2b2)]>0x0&&this['_itemData'][_0x1aed14(0x2b3)]>0x0)_0x50899a+='\x20';if(this[_0x1aed14(0x3cb)][_0x1aed14(0x2b3)]>0x0)_0x50899a+=_0x1aed14(0x50d)[_0x1aed14(0x4a6)](this[_0x1aed14(0x3cb)][_0x1aed14(0x2b3)]);return _0x50899a;},Window_ShopStatus['prototype'][_0x9e78a(0x317)]=function(_0x26927b,_0xd0dea9,_0xa9f2fe){const _0x11aed7=_0x9e78a,_0x16a03b='MP\x20RECOVERY';if(this[_0x11aed7(0x3cb)]['rateMP']<=0x0&&this[_0x11aed7(0x3cb)][_0x11aed7(0x53d)]<=0x0&&!this[_0x11aed7(0x287)][_0x16a03b])return![];const _0x310aea=this[_0x11aed7(0x27c)]();this[_0x11aed7(0x61a)](_0x310aea,_0x26927b,_0xd0dea9,_0xa9f2fe,!![]);const _0x516ee1=this[_0x11aed7(0x481)]();return this[_0x11aed7(0x32e)](ColorManager[_0x11aed7(0x21e)](0x3)),this['drawItemKeyData'](_0x516ee1,_0x26927b,_0xd0dea9,_0xa9f2fe,![],_0x11aed7(0x5f6)),this['drawItemDarkRect'](_0x26927b,_0xd0dea9,_0xa9f2fe),this[_0x11aed7(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)]['getItemEffectsMpRecoveryLabel']=function(){const _0x8f9334=_0x9e78a,_0x35c4a1=VisuMZ['ItemsEquipsCore'][_0x8f9334(0x5b0)][_0x8f9334(0x444)][_0x8f9334(0x44e)];return _0x35c4a1[_0x8f9334(0x4a6)](TextManager['mp']);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x481)]=function(){const _0x2c7311=_0x9e78a,_0x5d1b7d=_0x2c7311(0x18c);if(this['_customItemInfo'][_0x5d1b7d])return this[_0x2c7311(0x287)][_0x5d1b7d];let _0x5e5e06='';if(this['_itemData'][_0x2c7311(0x1f4)]>0x0)_0x5e5e06+=_0x2c7311(0x4de)[_0x2c7311(0x4a6)](Math[_0x2c7311(0x207)](this['_itemData'][_0x2c7311(0x1f4)]*0x64));if(this[_0x2c7311(0x3cb)][_0x2c7311(0x1f4)]>0x0&&this[_0x2c7311(0x3cb)][_0x2c7311(0x53d)]>0x0)_0x5e5e06+='\x20';if(this[_0x2c7311(0x3cb)][_0x2c7311(0x53d)]>0x0)_0x5e5e06+=_0x2c7311(0x50d)['format'](this['_itemData'][_0x2c7311(0x53d)]);return _0x5e5e06;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x20c)]=function(_0x1f7c0f,_0xcc8016,_0x2cc2d3){const _0xed832=_0x9e78a,_0xe62b73='TP\x20RECOVERY';if(this[_0xed832(0x3cb)][_0xed832(0x40d)]<=0x0&&!this[_0xed832(0x287)][_0xe62b73])return![];const _0x138fa5=this['getItemEffectsTpRecoveryLabel']();this[_0xed832(0x61a)](_0x138fa5,_0x1f7c0f,_0xcc8016,_0x2cc2d3,!![]);const _0x1d2153=this[_0xed832(0x30e)]();return this[_0xed832(0x32e)](ColorManager[_0xed832(0x586)]()),this[_0xed832(0x61a)](_0x1d2153,_0x1f7c0f,_0xcc8016,_0x2cc2d3,![],'right'),this['drawItemDarkRect'](_0x1f7c0f,_0xcc8016,_0x2cc2d3),this[_0xed832(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x24d)]=function(){const _0x3b3dfb=_0x9e78a,_0x260580=VisuMZ[_0x3b3dfb(0x331)][_0x3b3dfb(0x5b0)][_0x3b3dfb(0x444)]['LabelRecoverTP'];return _0x260580[_0x3b3dfb(0x4a6)](TextManager['tp']);},Window_ShopStatus[_0x9e78a(0x1e9)]['getItemEffectsTpRecoveryText']=function(){const _0x415a04=_0x9e78a,_0x45ddcf=_0x415a04(0x348);if(this[_0x415a04(0x287)][_0x45ddcf])return this['_customItemInfo'][_0x45ddcf];let _0x39b2a6='';return _0x39b2a6+=_0x415a04(0x50d)[_0x415a04(0x4a6)](this[_0x415a04(0x3cb)][_0x415a04(0x40d)]),_0x39b2a6;},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemEffectsSelfTpGain']=function(_0x524588,_0x305049,_0x43f508){const _0xecc528=_0x9e78a,_0x4ba63c=_0xecc528(0x333);if(this[_0xecc528(0x3cb)][_0xecc528(0x646)]===0x0&&!this[_0xecc528(0x287)][_0x4ba63c])return![];const _0x2433ea=this[_0xecc528(0x356)]();this[_0xecc528(0x61a)](_0x2433ea,_0x524588,_0x305049,_0x43f508,!![]);const _0x3c5a02=this[_0xecc528(0x377)]();return this[_0xecc528(0x3cb)]['selfTP']>0x0?_0xecc528(0x41c)!==_0xecc528(0x41c)?_0x359cf5=0x0:this[_0xecc528(0x32e)](ColorManager[_0xecc528(0x586)]()):this['changeTextColor'](ColorManager[_0xecc528(0x438)]()),this[_0xecc528(0x61a)](_0x3c5a02,_0x524588,_0x305049,_0x43f508,![],_0xecc528(0x5f6)),this[_0xecc528(0x2f7)](_0x524588,_0x305049,_0x43f508),this[_0xecc528(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x356)]=function(){const _0x35b147=_0x9e78a,_0x5cbcfd=VisuMZ['ItemsEquipsCore'][_0x35b147(0x5b0)][_0x35b147(0x444)][_0x35b147(0x592)];return _0x5cbcfd[_0x35b147(0x4a6)](TextManager['tp']);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x377)]=function(){const _0x4b123a=_0x9e78a,_0x588d7f=_0x4b123a(0x333);if(this[_0x4b123a(0x287)][_0x588d7f])return this[_0x4b123a(0x287)][_0x588d7f];let _0xe9a4d5='';return this[_0x4b123a(0x3cb)][_0x4b123a(0x646)]>0x0?_0xe9a4d5+=_0x4b123a(0x50d)[_0x4b123a(0x4a6)](this[_0x4b123a(0x3cb)][_0x4b123a(0x646)]):_0xe9a4d5+='%1'['format'](this['_itemData'][_0x4b123a(0x646)]),_0xe9a4d5;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x395)]=function(_0x596fd1,_0x28232d,_0x2f7e19){const _0x466415=_0x9e78a,_0x2bf466=_0x466415(0x14d);if(this[_0x466415(0x3cb)][_0x466415(0x2b2)]>=0x0&&this[_0x466415(0x3cb)]['flatHP']>=0x0&&!this['_customItemInfo'][_0x2bf466])return![];const _0xc3a2ca=this[_0x466415(0x301)]();this['drawItemKeyData'](_0xc3a2ca,_0x596fd1,_0x28232d,_0x2f7e19,!![]);const _0x563ac3=this[_0x466415(0x387)]();return this[_0x466415(0x32e)](ColorManager[_0x466415(0x21e)](0x0)),this[_0x466415(0x61a)](_0x563ac3,_0x596fd1,_0x28232d,_0x2f7e19,![],_0x466415(0x5f6)),this[_0x466415(0x2f7)](_0x596fd1,_0x28232d,_0x2f7e19),this[_0x466415(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x301)]=function(){const _0x6b37f4=_0x9e78a,_0x3b03cc=VisuMZ[_0x6b37f4(0x331)]['Settings'][_0x6b37f4(0x444)]['LabelDamageHP'];return _0x3b03cc[_0x6b37f4(0x4a6)](TextManager['hp']);},Window_ShopStatus[_0x9e78a(0x1e9)]['getItemEffectsHpDamageText']=function(){const _0xdfc9b3=_0x9e78a,_0x451e8f=_0xdfc9b3(0x14d);if(this[_0xdfc9b3(0x287)][_0x451e8f])return this[_0xdfc9b3(0x287)][_0x451e8f];let _0x540690='';if(this[_0xdfc9b3(0x3cb)][_0xdfc9b3(0x2b2)]<0x0)_0x540690+='%1%'['format'](Math[_0xdfc9b3(0x207)](this[_0xdfc9b3(0x3cb)][_0xdfc9b3(0x2b2)]*0x64));if(this[_0xdfc9b3(0x3cb)][_0xdfc9b3(0x2b2)]<0x0&&this[_0xdfc9b3(0x3cb)][_0xdfc9b3(0x2b3)]<0x0)_0x540690+='\x20';if(this[_0xdfc9b3(0x3cb)][_0xdfc9b3(0x2b3)]<0x0)_0x540690+='%1'[_0xdfc9b3(0x4a6)](this['_itemData'][_0xdfc9b3(0x2b3)]);return _0x540690;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x33c)]=function(_0x4fc4f1,_0x2ec87c,_0x5dbafc){const _0xd7feaf=_0x9e78a,_0x14b93b=_0xd7feaf(0x64b);if(this[_0xd7feaf(0x3cb)][_0xd7feaf(0x1f4)]>=0x0&&this[_0xd7feaf(0x3cb)][_0xd7feaf(0x53d)]>=0x0&&!this[_0xd7feaf(0x287)][_0x14b93b])return![];const _0x223902=this[_0xd7feaf(0x51c)]();this[_0xd7feaf(0x61a)](_0x223902,_0x4fc4f1,_0x2ec87c,_0x5dbafc,!![]);const _0x1d6d4d=this[_0xd7feaf(0x37a)]();return this[_0xd7feaf(0x32e)](ColorManager[_0xd7feaf(0x21e)](0x2)),this[_0xd7feaf(0x61a)](_0x1d6d4d,_0x4fc4f1,_0x2ec87c,_0x5dbafc,![],_0xd7feaf(0x5f6)),this['drawItemDarkRect'](_0x4fc4f1,_0x2ec87c,_0x5dbafc),this[_0xd7feaf(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x51c)]=function(){const _0xca842c=_0x9e78a,_0xb1379b=VisuMZ[_0xca842c(0x331)][_0xca842c(0x5b0)][_0xca842c(0x444)][_0xca842c(0x1d3)];return _0xb1379b[_0xca842c(0x4a6)](TextManager['mp']);},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x37a)]=function(){const _0xdbff60=_0x9e78a,_0xa0230d=_0xdbff60(0x64b);if(this[_0xdbff60(0x287)][_0xa0230d])return this[_0xdbff60(0x287)][_0xa0230d];let _0x42c863='';if(this[_0xdbff60(0x3cb)][_0xdbff60(0x1f4)]<0x0)_0x42c863+=_0xdbff60(0x538)[_0xdbff60(0x4a6)](Math[_0xdbff60(0x207)](this[_0xdbff60(0x3cb)][_0xdbff60(0x1f4)]*0x64));if(this[_0xdbff60(0x3cb)][_0xdbff60(0x1f4)]<0x0&&this[_0xdbff60(0x3cb)]['flatMP']<0x0)_0x42c863+='\x20';if(this[_0xdbff60(0x3cb)]['flatMP']<0x0)_0x42c863+='%1'['format'](this[_0xdbff60(0x3cb)]['flatMP']);return _0x42c863;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x185)]=function(_0x373245,_0x3e0626,_0x447b70){const _0x56e533=_0x9e78a,_0x3c7db7=_0x56e533(0x311);if(this[_0x56e533(0x3cb)][_0x56e533(0x40d)]>=0x0&&!this[_0x56e533(0x287)][_0x3c7db7])return![];const _0x550a13=this[_0x56e533(0x561)]();this[_0x56e533(0x61a)](_0x550a13,_0x373245,_0x3e0626,_0x447b70,!![]);const _0x16c645=this[_0x56e533(0x1cd)]();return this['changeTextColor'](ColorManager[_0x56e533(0x438)]()),this[_0x56e533(0x61a)](_0x16c645,_0x373245,_0x3e0626,_0x447b70,![],'right'),this[_0x56e533(0x2f7)](_0x373245,_0x3e0626,_0x447b70),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemEffectsTpDamageLabel']=function(){const _0x642006=_0x9e78a,_0x1fef28=VisuMZ[_0x642006(0x331)][_0x642006(0x5b0)]['StatusWindow'][_0x642006(0x4b5)];return _0x1fef28['format'](TextManager['tp']);},Window_ShopStatus['prototype'][_0x9e78a(0x1cd)]=function(){const _0x378ba6=_0x9e78a,_0x54e36a='TP\x20DAMAGE';if(this['_customItemInfo'][_0x54e36a])return this[_0x378ba6(0x287)][_0x54e36a];let _0x2a0265='';return _0x2a0265+='%1'['format'](this[_0x378ba6(0x3cb)]['gainTP']),_0x2a0265;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x2f1)]=function(_0x33f669,_0x5120cc,_0x34beb9){const _0x29ca9e=_0x9e78a,_0x30fe4a='ADDED\x20EFFECTS';if(!this[_0x29ca9e(0x3cb)][_0x29ca9e(0x3bb)]&&!this[_0x29ca9e(0x287)][_0x30fe4a])return![];const _0x34ab5a=this[_0x29ca9e(0x196)]();this['drawItemKeyData'](_0x34ab5a,_0x33f669,_0x5120cc,_0x34beb9,!![]);const _0x483187=this[_0x29ca9e(0x4f1)]();return this[_0x29ca9e(0x61a)](_0x483187,_0x33f669,_0x5120cc,_0x34beb9,![],_0x29ca9e(0x5f6)),this[_0x29ca9e(0x2f7)](_0x33f669,_0x5120cc,_0x34beb9),this[_0x29ca9e(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x196)]=function(){const _0xe752d1=_0x9e78a;return VisuMZ[_0xe752d1(0x331)][_0xe752d1(0x5b0)][_0xe752d1(0x444)][_0xe752d1(0x406)];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x4f1)]=function(){const _0x36ca6b=_0x9e78a,_0xed3de9=_0x36ca6b(0x4ef);if(this['_customItemInfo'][_0xed3de9])return this[_0x36ca6b(0x287)][_0xed3de9];let _0x3acb24='',_0x8ac77f=0x0;const _0x3126fc=0x8;for(const _0x104e68 of this[_0x36ca6b(0x3cb)][_0x36ca6b(0x32f)]){if(_0x36ca6b(0x1b4)==='lohJz'){const _0x487a64=$dataStates[_0x104e68];if(_0x487a64&&_0x487a64[_0x36ca6b(0x425)]>0x0){if(_0x36ca6b(0x2bd)!==_0x36ca6b(0x47d)){_0x3acb24+='\x5cI[%1]'['format'](_0x487a64['iconIndex']),_0x8ac77f++;if(_0x8ac77f>=_0x3126fc)return _0x3acb24;}else return _0x169dd2;}}else _0x597c68='item-%1'['format'](_0x36a25f['id']);}for(let _0x51bfe9=0x0;_0x51bfe9<this[_0x36ca6b(0x3cb)]['changeBuff'][_0x36ca6b(0x458)];_0x51bfe9++){const _0x41940d=this[_0x36ca6b(0x3cb)][_0x36ca6b(0x569)][_0x51bfe9],_0x44f0dd=Game_BattlerBase[_0x36ca6b(0x1e9)][_0x36ca6b(0x384)](_0x41940d,_0x51bfe9);if(_0x44f0dd>0x0){_0x3acb24+=_0x36ca6b(0x3ef)['format'](_0x44f0dd),_0x8ac77f++;if(_0x8ac77f>=_0x3126fc)return _0x3acb24;}}return _0x3acb24;},Window_ShopStatus[_0x9e78a(0x1e9)]['drawItemEffectsRemovedStatesBuffs']=function(_0x4f1779,_0x1dd26c,_0xd8ee71){const _0x4384ec=_0x9e78a,_0x1dd83d='REMOVED\x20EFFECTS';if(!this[_0x4384ec(0x3cb)][_0x4384ec(0x2ad)]&&!this['_customItemInfo'][_0x1dd83d])return![];const _0x8d81f=this['getItemEffectsRemovedStatesBuffsLabel']();this[_0x4384ec(0x61a)](_0x8d81f,_0x4f1779,_0x1dd26c,_0xd8ee71,!![]);const _0x30b9e6=this[_0x4384ec(0x627)]();return this[_0x4384ec(0x61a)](_0x30b9e6,_0x4f1779,_0x1dd26c,_0xd8ee71,![],_0x4384ec(0x5f6)),this[_0x4384ec(0x2f7)](_0x4f1779,_0x1dd26c,_0xd8ee71),this[_0x4384ec(0x293)](),!![];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x641)]=function(){const _0x102d83=_0x9e78a;return VisuMZ[_0x102d83(0x331)]['Settings']['StatusWindow'][_0x102d83(0x286)];},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x627)]=function(){const _0x2da012=_0x9e78a,_0x39e8eb=_0x2da012(0x5cd);if(this[_0x2da012(0x287)][_0x39e8eb])return this[_0x2da012(0x287)][_0x39e8eb];let _0x2bfa21='',_0xdc90a0=0x0;const _0x23393a=VisuMZ[_0x2da012(0x331)][_0x2da012(0x5b0)][_0x2da012(0x444)][_0x2da012(0x45c)];for(const _0x2e5e54 of this['_itemData'][_0x2da012(0x18a)]){const _0x51cb4d=$dataStates[_0x2e5e54];if(_0x51cb4d&&_0x51cb4d[_0x2da012(0x425)]>0x0){_0x2bfa21+=_0x2da012(0x3ef)[_0x2da012(0x4a6)](_0x51cb4d[_0x2da012(0x425)]),_0xdc90a0++;if(_0xdc90a0>=_0x23393a)return _0x2bfa21;}}for(let _0x4370e1=0x0;_0x4370e1<this[_0x2da012(0x3cb)][_0x2da012(0x214)]['length'];_0x4370e1++){if(_0x2da012(0x446)!==_0x2da012(0x60b)){const _0x40554b=this[_0x2da012(0x3cb)][_0x2da012(0x214)][_0x4370e1],_0x2c9124=Game_BattlerBase[_0x2da012(0x1e9)][_0x2da012(0x384)](0x1,_0x40554b);if(_0x2c9124>0x0){if(_0x2da012(0x59b)!==_0x2da012(0x59b)){if(!_0x1b2104[_0x2da012(0x4d3)](_0x2e0a37))return!![];}else{_0x2bfa21+=_0x2da012(0x3ef)[_0x2da012(0x4a6)](_0x2c9124),_0xdc90a0++;if(_0xdc90a0>=_0x23393a)return _0x2bfa21;}}}else return this[_0x2da012(0x1e7)]()?this[_0x2da012(0x3a3)]():_0x31c786['ItemsEquipsCore'][_0x2da012(0x628)][_0x2da012(0x20e)](this);}for(let _0x3e5738=0x0;_0x3e5738<this[_0x2da012(0x3cb)]['removeDebuff'][_0x2da012(0x458)];_0x3e5738++){if('SxgoW'===_0x2da012(0x43a)){const _0x1e4c80=this[_0x2da012(0x3cb)][_0x2da012(0x60e)][_0x3e5738],_0x3ef815=Game_BattlerBase['prototype'][_0x2da012(0x384)](-0x1,_0x1e4c80);if(_0x3ef815>0x0){_0x2bfa21+=_0x2da012(0x3ef)[_0x2da012(0x4a6)](_0x3ef815),_0xdc90a0++;if(_0xdc90a0>=_0x23393a)return _0x2bfa21;}}else _0x1dbde2[_0x2da012(0x331)][_0x2da012(0x379)]['call'](this,_0x58eb87),_0x59f6ca[_0x2da012(0x331)][_0x2da012(0x3fd)](_0x2c41ec,_0x1e0555);}return _0x2bfa21;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x491)]=function(_0x2cd7de,_0x5aa833,_0x494872){const _0x2c9d63=_0x9e78a;if(this[_0x2c9d63(0x262)]['note'][_0x2c9d63(0x3cf)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x357f74=String(RegExp['$1'])[_0x2c9d63(0x19d)](/[\r\n]+/);for(const _0x3fdc7a of _0x357f74){if(_0x3fdc7a['match'](/(.*):[ ](.*)/i)){const _0xedf298=String(RegExp['$1'])[_0x2c9d63(0x361)](),_0x5cdff6=String(RegExp['$2'])[_0x2c9d63(0x361)]();this[_0x2c9d63(0x459)](_0xedf298,_0x5cdff6,_0x2cd7de,_0x5aa833,_0x494872),_0x5aa833+=this[_0x2c9d63(0x1ee)]();}}}return this[_0x2c9d63(0x293)](),_0x5aa833;},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x459)]=function(_0x44bd1d,_0x14c765,_0x40839b,_0x572c49,_0x31217b){const _0x16dd1f=_0x9e78a;this[_0x16dd1f(0x61a)](_0x44bd1d,_0x40839b,_0x572c49,_0x31217b,!![]),this[_0x16dd1f(0x61a)](_0x14c765,_0x40839b,_0x572c49,_0x31217b,![],_0x16dd1f(0x5f6)),this[_0x16dd1f(0x2f7)](_0x40839b,_0x572c49,_0x31217b),this['resetFontSettings']();},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x1ba)]=function(){const _0x59b95b=_0x9e78a;if(!this[_0x59b95b(0x262)])return;const _0x5683ff=this[_0x59b95b(0x262)]['note'],_0x513659=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x33f26c=_0x5683ff[_0x59b95b(0x3cf)](_0x513659);if(_0x33f26c)for(const _0x422b6b of _0x33f26c){if(_0x59b95b(0x623)===_0x59b95b(0x623)){_0x422b6b[_0x59b95b(0x3cf)](_0x513659);const _0x4d6795=String(RegExp['$1'])['trim']()||'';if(_0x4d6795==='')continue;const _0x57ba31=ImageManager[_0x59b95b(0x4b7)](_0x4d6795);_0x57ba31[_0x59b95b(0x58c)](this['drawCustomShopGraphicLoad']['bind'](this,_0x57ba31,this['_item']));}else{if(this['_item'][_0x59b95b(0x173)][_0x59b95b(0x3cf)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x1c3a2d=_0x29b6af(_0x4ee65b['$1'])[_0x59b95b(0x19d)](/[\r\n]+/);for(const _0x4245b9 of _0x1c3a2d){if(_0x4245b9[_0x59b95b(0x3cf)](/(.*):[ ](.*)/i)){const _0x76e745=_0x5373f5(_0x3006a3['$1'])[_0x59b95b(0x361)](),_0x40a7c6=_0x2e56e3(_0x2c901f['$2'])[_0x59b95b(0x361)]();this['drawItemCustomEntryLine'](_0x76e745,_0x40a7c6,_0x973d7,_0x35dc02,_0x15f889),_0x518329+=this[_0x59b95b(0x1ee)]();}}}return this[_0x59b95b(0x293)](),_0x3f7220;}}},Window_ShopStatus[_0x9e78a(0x1e9)][_0x9e78a(0x448)]=function(_0x412d5e,_0x22e4b9){const _0x30a6bd=_0x9e78a;if(this[_0x30a6bd(0x262)]!==_0x22e4b9)return;if(!_0x412d5e)return;if(_0x412d5e['width']<=0x0||_0x412d5e[_0x30a6bd(0x568)]<=0x0)return;const _0x2bbb6e=_0x22e4b9[_0x30a6bd(0x173)];let _0x210a77='background';_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&('LhaFE'==='LhaFE'?_0x210a77=_0x30a6bd(0x578):this[_0x30a6bd(0x55a)]=!![]);const _0x2e79bd=_0x210a77===_0x30a6bd(0x1b6)?this[_0x30a6bd(0x312)]:this[_0x30a6bd(0x281)];let _0x1657ec=this[_0x30a6bd(0x513)],_0x501a4a=this[_0x30a6bd(0x159)];_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x1657ec=Number(RegExp['$1']));_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x501a4a=Number(RegExp['$1']));if(_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)){if(_0x30a6bd(0x131)==='vbsNl')_0x1657ec=Number(RegExp['$1']),_0x501a4a=Number(RegExp['$2']);else return _0x355ad8[_0x30a6bd(0x331)][_0x30a6bd(0x5b0)]['EquipScene']['LayoutStyle'];}const _0x1b83ef=Math['min'](0x1,_0x1657ec/_0x412d5e[_0x30a6bd(0x1d2)],_0x501a4a/_0x412d5e['height']);let _0x267da0=0x0,_0x1d3391=0x0,_0x15c735=Math[_0x30a6bd(0x207)](_0x412d5e[_0x30a6bd(0x1d2)]*_0x1b83ef),_0x3c131f=Math[_0x30a6bd(0x207)](_0x412d5e[_0x30a6bd(0x568)]*_0x1b83ef),_0x4b700d='center';_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x4b700d=String(RegExp['$1'])[_0x30a6bd(0x339)]()['trim']());if(_0x4b700d==='left')_0x267da0=0x0;else _0x4b700d===_0x30a6bd(0x550)?_0x267da0=Math[_0x30a6bd(0x12f)]((this[_0x30a6bd(0x513)]-_0x15c735)/0x2):_0x267da0=this['innerWidth']-_0x15c735;let _0x26be8c='middle';_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x26be8c=String(RegExp['$1'])[_0x30a6bd(0x339)]()['trim']());if(_0x26be8c===_0x30a6bd(0x503))_0x1d3391=0x0;else _0x26be8c===_0x30a6bd(0x587)?_0x1d3391=Math[_0x30a6bd(0x12f)]((this[_0x30a6bd(0x159)]-_0x3c131f)/0x2):_0x30a6bd(0x5cf)!==_0x30a6bd(0x629)?_0x1d3391=this[_0x30a6bd(0x159)]-_0x3c131f:(delete this['_categoryWindow'][_0x30a6bd(0x274)]['ok'],delete this['_categoryWindow'][_0x30a6bd(0x274)][_0x30a6bd(0x1a8)]);_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x30a6bd(0x385)===_0x30a6bd(0x598)?_0x52ce46=_0x30a6bd(0x499)[_0x30a6bd(0x4a6)](_0x1c893e['id']):_0x267da0+=Number(RegExp['$1']));if(_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)){if(_0x30a6bd(0x61d)!==_0x30a6bd(0x2fc))_0x1d3391+=Number(RegExp['$1']);else{_0x8b58ea[_0x30a6bd(0x1e9)][_0x30a6bd(0x54f)][_0x30a6bd(0x20e)](this);if(this[_0x30a6bd(0x43f)])this[_0x30a6bd(0x402)]();}}_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x267da0+=Number(RegExp['$1']),_0x1d3391+=Number(RegExp['$2']));let _0x2af7c1=0xff;if(_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x30a6bd(0x292)===_0x30a6bd(0x292)?_0x2af7c1=Number(RegExp['$1']):this[_0x30a6bd(0x3f1)][_0x30a6bd(0x151)]();else{if(_0x2bbb6e[_0x30a6bd(0x3cf)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)){if(_0x30a6bd(0x570)!=='iVgQF')return this[_0x30a6bd(0x281)][_0x30a6bd(0x4df)]/_0x5f4357['mainFontSize']();else _0x2af7c1=Math[_0x30a6bd(0x12f)](Number(RegExp['$1'])*0.01*0xff)[_0x30a6bd(0x3ac)](0x0,0xff);}}_0x2e79bd[_0x30a6bd(0x443)]=_0x2af7c1,_0x2e79bd[_0x30a6bd(0x1d1)](_0x412d5e,0x0,0x0,_0x412d5e[_0x30a6bd(0x1d2)],_0x412d5e[_0x30a6bd(0x568)],_0x267da0,_0x1d3391,_0x15c735,_0x3c131f),_0x2e79bd['paintOpacity']=0xff;},VisuMZ[_0x9e78a(0x331)][_0x9e78a(0x49c)]=function(_0x4c6c82){const _0x389ac5=_0x9e78a;if(_0x4c6c82===null||typeof _0x4c6c82!==_0x389ac5(0x2d0))return _0x4c6c82;const _0x552ac9=Array[_0x389ac5(0x16b)](_0x4c6c82)?[]:Object['create'](Object['getPrototypeOf'](_0x4c6c82));for(const _0xc49a41 in _0x4c6c82){if(_0x389ac5(0x341)===_0x389ac5(0x341))Object[_0x389ac5(0x1e9)][_0x389ac5(0x621)]['call'](_0x4c6c82,_0xc49a41)&&(_0x552ac9[_0xc49a41]=typeof _0x4c6c82[_0xc49a41]===_0x389ac5(0x2d0)&&_0x4c6c82[_0xc49a41]!==null?VisuMZ[_0x389ac5(0x331)][_0x389ac5(0x49c)](_0x4c6c82[_0xc49a41]):_0x4c6c82[_0xc49a41]);else{const _0x4e5b0d=_0x192603(_0x844681['$1'])[_0x389ac5(0x19d)](/[\r\n]+/);for(const _0x469b4b of _0x4e5b0d){if(_0x469b4b[_0x389ac5(0x3cf)](/(.*):[ ](.*)/i)){const _0x688677=_0x4288d4(_0x444d85['$1'])[_0x389ac5(0x361)](),_0x27929b=_0x4d7b5f(_0x13e5f9['$2'])[_0x389ac5(0x361)]();this['drawItemCustomEntryLine'](_0x688677,_0x27929b,_0x558d5c,_0x2ef318,_0x183e7f),_0x410b96+=this[_0x389ac5(0x1ee)]();}}}}return _0x552ac9;};