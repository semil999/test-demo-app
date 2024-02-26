import React from 'react'
import Child from './Child'

const FuncBaseComponent = (props) => {
    const style = {
      marginTop : "50px",
      padding: "10px",
      backgroundColor: "black",
      color: "white"
    }
  return (
    <>
      {/* <h1 style={{backgroundColor: "yellow", color: "black", fontSize: "60px"}}>Hello World!</h1>
      <div className='phara'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis, assumenda cum laboriosam ut corrupti fuga perspiciatis blanditiis veritatis repellat neque accusantium error quasi dolorum, id, dolor soluta autem aspernatur!
      </div>

      <p style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit adipisci explicabo eveniet. Eaque nihil ratione mollitia, iure praesentium, esse similique debitis in officia dolor aliquid? Enim voluptas nemo ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid quisquam modi exercitationem, quibusdam magnam provident, tenetur nulla illo unde, perspiciatis officia architecto distinctio incidunt. Ab earum cupiditate quisquam numquam nisi dicta sequi nemo ut modi corrupti temporibus nobis dolores suscipit, placeat veniam, enim cumque officiis minima. Amet ipsam architecto animi quisquam temporibus alias autem laudantium, nulla facere, et error voluptatum. Dolores, iste odit tempore voluptatibus pariatur nihil mollitia. Non laudantium accusantium, distinctio quidem mollitia repudiandae, eligendi maiores, eveniet labore magni sunt accusamus! Inventore sapiente nesciunt iure facere consectetur nobis, eveniet maiores ea veniam incidunt, error ad. Perferendis, dolorem illo?
      </p> */}

      <Child />
    </>
  )
}

export default FuncBaseComponent
