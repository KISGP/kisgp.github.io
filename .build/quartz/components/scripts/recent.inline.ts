// const bufferPx = 150
// const observer = new IntersectionObserver((entries) => {
//   for (const entry of entries) {
//     const slug = entry.target.id
//     const tocEntryElement = document.querySelector(`a[data-for="${slug}"]`)
//     const windowHeight = entry.rootBounds?.height
//     if (windowHeight && tocEntryElement) {
//       if (entry.boundingClientRect.y < windowHeight) {
//         tocEntryElement.classList.add("in-view")
//       } else {
//         tocEntryElement.classList.remove("in-view")
//       }
//     }
//   }
// })

function toggleRecent(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function setupRecent() {
  const recent = document.getElementById("recent")
  if (recent) {
    const collapsed = recent.classList.contains("collapsed")
    const content = recent.nextElementSibling as HTMLElement | undefined
    if (!content) return
    recent.addEventListener("click", toggleRecent)
    window.addCleanup(() => recent.removeEventListener("click", toggleRecent))
  }
}

window.addEventListener("resize", setupRecent)
document.addEventListener("nav", () => {
  setupRecent()
})
