import { Button, Card, RocheBlue, Typography } from "@oneds/react"

/**
 * OneDS Starter Template
 */
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--oneds-spacing-gap-xlarge)",
              backgroundColor: "var(--oneds-color-neutral-megalight)",
              margin: "-1rem -1rem 0",
              borderTopLeftRadius: "inherit",
              borderTopRightRadius: "inherit",
            }}
          >
            <RocheBlue size="medium" />
          </div>
          <Typography variant="display" as="h1">
            OneDS Starter Template
          </Typography>
          <Typography variant="body" size="large">
            Start building with 54+ production-ready components
          </Typography>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Button
              variant="primary"
              onClick={() =>
                window.open("https://oneds-web.onedesign.roche.com/", "_blank")
              }
            >
              Documentation
            </Button>
            <Button
              variant="secondary"
              onClick={() => alert("Ready to build!")}
            >
              Get Started
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default App
