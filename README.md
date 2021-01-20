<h1><img width=60 height=60 src="https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg"></td>
Chess Tournament Bot</h1>

This is the source code for the Discord bot that compromise <bold>Chess Tournament Bot</bold>.

* [Don't click!](https://discord.com/api/oauth2/authorize?client_id=795049493636317204&permissions=8&scope=bot)

# Components

This project consists of a component, the back-end. Backend is a Discord bot developed from [discord-webhook-node](https://www.npmjs.com/package/discord-webhook-node). The database was developed using [typeorm](https://typeorm.io/#/).

## Developing Backend

To get started with developing on backend, install all Node-related dependencies with a simple `yarn install` and `npm install`. After that, copy over `config-template.json` to `config.json` and adjust all required values (surrounded by `<<>>`).

For developing, use `yarn dev` to compile typescript as you work.

# License

[MIT](http://opensource.org/licenses/MIT)