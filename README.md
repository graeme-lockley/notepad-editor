# Notepad Editor

The first time I saw [Observable HQ](https://observablehq.com), I was amazed by the simplicity and power of the notebook editor. I was so impressed I spent the rest of the day playing with it with the wonder and joy of seeing something truly spectacular. I wanted to create a similar editor for my personal use. This project is a simple editor that allows me to write markdown and code in the same editor. The editor is built using SvelteKit and uses the Monaco editor for code editing.

## Development

The code is a simple SvelteKit project. To run the project, you need to have Node.js installed. Clone the repository and run the following commands:

```bash
# install dependencies
npm install

# install playwright
npx playwright install

# start the server and open the app in a new browser tab
npm run dev -- --open
```

Looking at [package.json](package.json), you can see that there are a number of scripts that you can run. The most important ones are:

- `dev`: Start the development server
- `build`: Create production build
- `preview`: Preview the production build
- `test`: Run all the tests
- `test-watch`: Run the tests in watch mode with the unit test automatically re-running when the code changes
- `test:unit`: Run the unit tests
- `test:unit-watch`: Run the unit tests in watch mode
- `test:integration`: Run the integration tests
- `lint`: Lint the code
- `format`: Format the code

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
