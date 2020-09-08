import Layout from "../../appContainer/shared/components/Navigation/Layout";
import {useRouter} from "next/router"
const { default: PlaceList } = require("../../appContainer/places/components/placeList")

const DUMMY_PLACES = [
    {
      id: 1,
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 1
    },
    {
      id: 2,
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 2
    }
  ];
  
const userplace = () => {
  const {userId}=useRouter().query;
  const loadedUSer=DUMMY_PLACES.filter(place=>place.creator === userId)
    return (
        <Layout>
            <PlaceList items={loadedUSer}/>
        </Layout>
    )
}

export default userplace
