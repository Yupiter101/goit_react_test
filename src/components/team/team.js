
import css from "./Team.module.css"

// console.log(css);

export default function Team() {
  return (
    <div className={css.team}>
      <h2 className={css.teamTitle}>Team title</h2>
      <p>team description</p>
    </div>
  )
}


//className={css.team}