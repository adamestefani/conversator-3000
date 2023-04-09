# Conversator-3000

Conversator-3000 is integrated with the [OpenAI Completions](https://platform.openai.com/docs/api-reference/completions), which reads an input and returns the OpenAI response as plain text.
By default, it's using the gpt-3.5-turbo model, but you might have access to other [models](https://platform.openai.com/docs/models/overview) depending on your OpenAI account's plan.

Since it uses the OpenAI language models, it is highly recommended to check your [OpenAI API usage](https://platform.openai.com/account/usage) regularly and set up any necessary limits or alerts to prevent unexpected charges.
Please, check the [Disclaimer](#disclaimer) section.


## Motivation

The Conversator-3000 was created with the intent of integrating "ChatGPT" with Twitch Chat and let the audience interact with it. Like you do with ChatGPT, but let streamers be created with it as well.

## Requirements

* [Node.js 16 or later](https://nodejs.org/en/download)
* [OpenAI API key](https://platform.openai.com/account/api-keys)


## Get Started

1. Make sure you have all the requirements above. If not, install/get them.

2. Clone the repository: For this step you need [Git](https://git-scm.com/downloads) installed, but you can just download the zip file instead by clicking the button at the top of this page.
```
git clone https://github.com/adamestefani/conversator-3000.git
```

3. Duplicate the [.env.template](./.env.template) file, then rename it to `.env`

4. In the `.env` file, replace the **OPENAI_API_KEY** value with your OpenAI key.
You can also set other OpenAI parameters, such as:
    * **OPENAI_CHAT_MODEL**: The [model](https://platform.openai.com/docs/api-reference/completions/create#completions/create-model) you want to use in the completion
    * **OPENAI_CHAT_MAX_TOKENS**: The maximum number of [tokens](https://platform.openai.com/docs/api-reference/completions/create#completions/create-max_tokens) to generate in the completion


5. Navigate to the project directory: (Type this into your CMD window, you're aiming to navigate the CMD window to the repository you just downloaded)

```
cd 'conversator-3000'
```

6. Install the required dependencies: (Type this into your CMD window)
```
npm install
```

## Customize the way Conversator-3000 would respond

You can change the initial input, where you can ask Conversator-3000 to assume some personality, or ask it to responde your inquires in a certain way.
The constant initial input can be customized in the [config.json](./src/config/config.json) file.

For example:
```json
{
  "chatOpenAI": {
    "chatInitialMood": "You are a rapper who loves to rhyme in all your answers."
  }
}
```
Use your creativity and feel free to explore different initial inputs. Have fun with it!

>**Note:** If you do any changes in the code, make sure you restart Conversator-3000.

## Run It Locally

Once you have everything done from the "Get Started" section, run the Node application in your terminal: (Type this into your CMD window)
```
npm run dev
```
> **Note:** Leave your terminal window opened to keep the application running.

## Streamer.bot Integration

If you use Streamer.bot, you can copy this ["Import String"](util/streamerbot-action-import.txt) and import the Action "conversator-3000-call" and the Command "!chat" to your Streamer.bot application.
This will allow your audience to type the command `!chat` following whaterver message they want to send to Conversator-3000.

Feel free to change the command string to your taste.

## Documentation

* [OpenAPI document](https://editor.swagger.io/?url=https://raw.githubusercontent.com/adamestefani/conversator-3000/main/api-docs/swagger.yaml)

## Disclaimer

This project, Conversator-3000, is an experimental application and is provided "as-is" without any warranty, express or implied. By using this software, you agree to assume all risks associated with its use, including but not limited to data loss, system failure, or any other issues that may arise.

The developers and contributors of this project do not accept any responsibility or liability for any losses, damages, or other consequences that may occur as a result of using this software. You are solely responsible for any decisions and actions taken based on the information provided by Conversator-3000.

Please note that the use of the OpenAI language model can be expensive due to its [token](https://platform.openai.com/tokenizer) usage. By utilizing this project, you acknowledge that you are responsible for monitoring and managing your own token usage and the associated costs. It is highly recommended to check your [OpenAI API usage](https://platform.openai.com/account/usage) regularly and set up any necessary limits or alerts to prevent unexpected charges.

As an autonomous experiment, Conversator-3000 may generate content or take actions that are not in line with real-world business practices or legal requirements. It is your responsibility to ensure that any actions or decisions made based on the output of this software comply with all applicable laws, regulations, and ethical standards. The developers and contributors of this project shall not be held responsible for any consequences arising from the use of this software.

By using Conversator-3000, you agree to indemnify, defend, and hold harmless the developers, contributors, and any affiliated parties from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from your use of this software or your violation of these terms.