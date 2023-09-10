import { useEffect } from "react";
import { useState } from "react";


function Watch() {

    const [watches, setWacthes] = useState([])
    // console.log(watches);

    useEffect(() => {
        fetch('Watch.json')
            .then(res => res.json())
            .then(data => setWacthes(data))
    }, [])

    return (
        <>
            <div>
                <h2>Watches: {watches.length}</h2>
            </div>
            {
                watches.map(watch => <WatchSingle key={watch.watch_id} watch={watch}></WatchSingle>)
                
            }
        </>
    );
}

const WatchSingle = ({watch}) => {
    console.log(watch);
    const { brand,image_url} = watch
    return (
        <div>
            <h3>Watch Brand: {brand}</h3>
            <img src={image_url} alt="image not found"></img>
        </div>
    )
}

export default Watch;