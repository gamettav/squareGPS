import { mount } from "@vue/test-utils";
import NavDrawer from "@src/components/drawers/NavDrawer.vue";

// FIXME: fix tests

describe("NavDrawer", () => {
  it("renders the correct number of navigation options", () => {
    const navOptions = [
      { title: "Option 1", path: "/option1" },
      { title: "Option 2", path: "/option2" },
      { title: "Option 3", path: "/option3" },
    ];

    const wrapper = mount(NavDrawer, {
      props: {
        navOptions,
      },
    });

    const navItems = wrapper.findAll(".v-list-item");

    expect(navItems.length).toBe(navOptions.length);
  });

  it('emits "navigateTo" event when a navigation option is clicked', async () => {
    const navOptions = [{ title: "Option 1", path: "/option1" }];
    const wrapper = mount(NavDrawer, {
      props: {
        navOptions,
      },
    });

    const navItem = wrapper.find(".v-list-item");
    await navItem.trigger("click");

    expect(wrapper.emitted("navigateTo")).toBeTruthy();
  });
});
