type Props = { kicker: string; title: string }

function SectionHead({ kicker, title }: Props) {
  return (
    <div className="section-head reveal">
      <span className="kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHead
