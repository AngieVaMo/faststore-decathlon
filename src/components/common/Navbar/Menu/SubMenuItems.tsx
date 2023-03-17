type Props = {
  data: Items[]
}

type Items = {
  name: string
}

export default function SubMenuItems({ data }: Props) {
  return (
    <ul>
      {data?.map((items, index) => (
        <li key={index}>{items.name}</li>
      ))}
    </ul>
  )
}
