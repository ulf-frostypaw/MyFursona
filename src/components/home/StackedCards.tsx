import styles from "./StackedCards.module.scss"

export default function StackedCards() {
  return (
    <div id={styles["hero-card-container"]}>
      <div className={styles["hero-blur-gradient-overlay"]}></div>
      <div id={styles["hero-card-wrapper"]}>
        <div
          id={styles["hero-card-item"]}
          style={{ "--stagger": "0" } as React.CSSProperties}
        >
          <img
            src="https://res.cloudinary.com/skepfusky-dookie/image/upload/c_scale,w_500/v1663099031/projects/ozzychill/ozzyuwu.png"
            alt="Ozzy Fursona"
          />
        </div>
        <div
          id={styles["hero-card-item"]}
          style={{ "--stagger": "1" } as React.CSSProperties}
        >
          <img src="/images/ozzy.png" alt="Ozzy Fursona" />
        </div>
        <div
          id={styles["hero-card-item"]}
          style={{ "--stagger": "2" } as React.CSSProperties}
        >
          <img src="/images/ozzy.png" alt="Ozzy Fursona" />
        </div>
      </div>
    </div>
  )
}