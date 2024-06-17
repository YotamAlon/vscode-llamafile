# vscode-llamafile: llamafile extension for VSCode
<!--
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/timkmecl.codegpt3)](https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3)
[![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/timkmecl.codegpt3)](https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/timkmecl.codegpt3)](https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3)
[![Github Stars](https://img.shields.io/github/stars/timkmecl/codegpt)](https://github.com/timkmecl/codegpt)
-->

This Visual Studio Code extension allows you to use a local llamafile to generate code or natural language responses to your questions from you LLM instance, right within the editor.

Supercharge your coding with AI-powered assistance! Automatically write new code from scratch, ask questions, get explanations, refactor code, find bugs and more 🚀✨ 

This extension is based on Tim Kmecl's excellent [CodeGPT extension](https://github.com/timkmecl/codegpt). Please go give him a star, and maybe even buy him a coffee!


### Links:
<!--
- **[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3)**
- **[Github Repository](https://github.com/timkmecl/codegpt)**
-->

<br>


<img src="examples/main.png" alt="Refactoring selected code using llamafile"/>

## Features
- 💡 **Ask general questions** or use code snippets from the editor to query llamafile via an input box in the sidebar
- 🖱️ Right click on a code selection and run one of the context menu **shortcuts**
	- automatically write documentation for your code
	- explain the selected code
	- refactor or optimize it
	- find problems with it
- 💻 View llamafile's responses in a panel next to the editor
- 📝 **Insert code snippets** from the AI's response into the active editor by clicking on them



## Installation

To use this extension, install it from the VSCode marketplace.

1. After the installation is complete, you will need to add your llamafile instance address to the extension settings in VSCode. To do this, open the `Settings` panel by going to the `File` menu and selecting `Preferences`, then `Settings`.
2. In the search bar, type `llamafile` to filter the settings list.
3. In the llamafile section, enter your instance address in the top field

After completing these steps, the extension should be ready to use.

### Obtaining llamafile instance

To use this extension, you will need a running llamafile instance. To start one, follow these steps:

1. Go to [the llamafile project](https://github.com/Mozilla-Ocho/llamafile).
2. Follow the instructions in the README file.
3. Once you have your llamafile instance running, copy the api address.


## Using the Extension

To use the extension, open a text editor in Visual Studio Code and open the llamafile panel by clicking on the llamafile icon in the sidebar. This will open a panel with an input field where you can enter your prompt or question. By clicking enter, it will be sent to your llamafile. Its response will be displayed below the input field in the sidebar (note that it may take some time for it to be calculated).

<!--
<img src="examples/create.png" alt="Writing new code using chatGPT" width="500"/>
-->

You can also select a code snippet in the editor and then enter a prompt in the side panel, or right-click and select "Ask llamafile". The **selected code will be automatically appended** to your query when it is sent to the AI. This can be useful for generating code snippets or getting explanations for specific pieces of code.

<!--
<img src="examples/explain.png" alt="Refactoring selected code using chatGPT"/>
-->

To **insert a code snippet** from the AI's response into the editor, simply click on the code block in the panel. The code will be automatically inserted at the cursor position in the active editor.

<!--
<img src="examples/refactor.png" alt="chatGPT explaining selected code"/>
-->

You can select some code in the editor, right click on it and choose one of the following **shortcuts** from the context menu:
#### Commands:
- `Ask llamafile`: will provide a prompt for you to enter any query
- `llamafile: Explain selection`: will explain what the selected code does
- `llamafile: Refactor selection`: will try to refactor the selected code
- `llamafile: Find problems`: looks for problems/errors in the selected code, fixes and explains them
- `llamafile: Optimize selection`: tries to optimize the selected code

`Ask llamafile` is also available when nothing is selected. For the other four commands, you can **customize the exact prompt** that will be sent to the AI by editing the extension settings in VSCode Preferences.

There, you can also **change the temperature** and **number of tokens** that will be returned by the AI. The default values are 0.5 and 1024, respectively.

---

Please note that this extension is currently a proof of concept and may have some limitations or bugs. We welcome feedback and contributions to improve the extension. Also check out the original [CodeGPT extension](https://github.com/timkmecl/codegpt) which this project is based on. If you enjoy this extension, please consider [buying Tim a coffee ☕️](https://www.buymeacoffee.com/timkmecl) to support his work! I wouldn't be able to make this version without him!

<a href="https://www.buymeacoffee.com/timkmecl" target="_blank"><img src="resources/buy-default-yellow-small.png" alt="Buy Me A Coffee" style="height: 40px" ></a>
