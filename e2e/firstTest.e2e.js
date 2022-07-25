describe("Home screen", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });

  it("should register a new skill", async () => {
    const newSkillInput = element(by.id("new-skill-input"));
    const addNewSkillButton = element(by.id("add-new-skill-button"));
    const skillsFlatList = element(by.id("skills-flat-list"));

    await newSkillInput.tap();
    await newSkillInput.typeText("React Native");
    await addNewSkillButton.tap();
    await skillsFlatList.tap();

    await expect(element(by.text("React Native"))).toBeVisible();
  });
});