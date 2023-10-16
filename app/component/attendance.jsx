
export default function Attendance(props) {
  return (
    <tr className='text-black'>
        <td>{props.date}</td>
        <td>{props.arrival}</td>
        <td>{props.departure}</td>
    </tr>
  )
}
