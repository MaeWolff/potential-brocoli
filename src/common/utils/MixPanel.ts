import mixpanel, { Dict } from "mixpanel-browser";
mixpanel.init("98e5c79a2f3f79078a8cc7f006db3911");

const actions = {
  identify: (id: string | undefined) => {
    mixpanel.identify(id);
  },
  alias: (id: string) => {
    mixpanel.alias(id);
  },
  track: (name: string, props?: Dict | undefined) => {
    mixpanel.track(name, props);
  },
  people: {
    set: (props: Dict) => {
      mixpanel.people.set(props);
    },
  },
};

export const MixPanel = actions;
