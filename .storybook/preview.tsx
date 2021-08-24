import { themes } from "@storybook/theming/create";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { setConsoleOptions, withConsole } from "@storybook/addon-console";
import { StoryWrapper } from "@storybook/addons";

setConsoleOptions({
  panelExclude: [/\[bugsnag\]/, /enabledReleaseStages/],
});

const withConsoleDecorator: StoryWrapper = (StoryComponent, context) => {
  return withConsole()(StoryComponent)(context);
};

export const decorators = [withConsoleDecorator];

export const parameters = {
  docs: {
    theme: themes.dark,
  },
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
