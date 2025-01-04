export function smoothScrollToSection(sectionId: string) {
  document.querySelector("#" + sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
