# rambo
sends output of `Math.random()` to a slack channel ~every second

## usage
1. clone the repo
1. make a slack app with `channels:read` and `chat:write:bot` permissions (more info [here](https://api.slack.com/messaging/sending#getting_started))
1. add it to a workspace, get the oauth token
1. set env vars TOKEN and CHANNEL to the token and the channel id respectively
1. run `node .` in the project directory (or create a service that runs it for you)

## license
MIT
