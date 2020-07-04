# Insert HTML for SPA - Optimizely Extension

This extension allows to insert HTML code that persists on SPAs that are able to flush HTML code injected using the standard "Insert HTML" feature of the Visual Editor.

## Background

The Optimizely feature **_Support for Dynamic Websites_** allows to insert and make changes that persist on Single Page Applications. However, some SPAs update content several times during page load. In addition, Optimizely has a logic that detects if another script is counteracting Optimizely's changes and stops forcing Visual Editor changes to avoid brwoser crashes, overheating and potential endless loops. This results in no custom changes added which makes the customer belive Optimizely is not working.

To overcome these cases this Extension was created. This particulart extension covers "**_Insert HTML_**" changes only (you may find other extensions for other cases in the root repository).

## Install the "_Insert HTML for SPA_" Extension

1. In your Optimizely account, navigate to "**_Implementation > Extensions_**".

2. Click "**_Create New..._**" and select "**_Using JSON_**".

![Image description](https://github.com/luis-colman/text-changes-for-spas/blob/master/images/create_extension.png)

3. Copy the content of the file "**_config.json_**" of the repository [Insert HTML for SPA](https://github.com/luis-colman/insert-html-for-spa/blob/master/config.json).

4. Paste the code in the "**_Create Extension From JSON_**" field and click "**_Create Extension_**".

![Image description](https://github.com/luis-colman/text-changes-for-spas/blob/master/images/create_extension_from_json_file.png)

5. If you want to see how the extension is built, simply click the extension name "**_Insert HTML for SPA_**". In the "**_Editable Fields_**" panel, you can see and change the current fields the extension contains. Here you can also see the JavaScript code the extension uses by clicking on "**_Apply JS_**", where adjustments can be made - if needed/desired.

6. Before you can use this extension, you need to enable it. After uploading the JSON file the extension will be in "**_draft_**" state. To enable the extension, navigate to "**_Implementation > Extensions_**" and click the "**_..._**" icon for the "**_Insert HTML for SPAs for SPA_**" extension and select "**_Enable_**".

![Image description](https://github.com/luis-colman/insert-html-for-spa/blob/master/images/Enable_Inster_HTML_for_SPA.png)

7. To start using your extension in experiments, simply go into the variation where you want to use this extension and click "**_Create_**" (as you normally do for any other visual change).

8. Under "**_Create Options_**", select "**_Insert HTML for SPA_**".

9. Select the element to move.

10. Select the type of re-arrangement you would like to perform (before, after, at the beginning of, at the end of).

11. Select the reference element

10. Save your changes and test the outcome.


**_-- END --_**
