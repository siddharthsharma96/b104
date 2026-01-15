import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./../Style/create.css";

const CreateRestaurant = () => {
  const { restaurantsData, setRestaurantsData } = useOutletContext();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    data.cuisines = data.cuisines.split(",");
    let payload = {
      name: data.name,
      cloudinaryImageId: data.cloudinaryImageId,
      locality: data.locality,
      areaName: data.areaName,
      costForTwo: data.costForTwo,
      cuisines: data.cuisines,
      avgRating: data.avgRating,
      parentId: data.parentId,
      avgRatingString: data.avgRatingString,
      totalRatingsString: data.totalRatingsString,
      nextCloseTime: data.nextCloseTime,
      opened: data.opened,
    };
    const response = await fetch("http://localhost:9000/api/v1/restaurant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json();
    console.log(result);
  };
  return (
    <div className="restaurant ">
      <h2>Create New Restaurant</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Restaurant Name"
        />

        <input
          {...register("cloudinaryImageId")}
          type="text"
          placeholder="Image ID"
        />

        <input {...register("locality")} type="text" placeholder="Locality" />
        <input {...register("areaName")} type="text" placeholder="Area Name" />
        <input
          {...register("costForTwo")}
          type="text"
          placeholder="Cost for Two"
        />
        <input
          {...register("cuisines")}
          type="text"
          placeholder="Cuisines (comma separated)"
        />
        <input
          {...register("avgRating")}
          type="number"
          placeholder="Average Rating"
        />
        <input
          {...register("avgRatingString")}
          type="text"
          placeholder="Average Rating (String)"
        />
        <input
          {...register("totalRatingsString")}
          type="text"
          placeholder="Total Ratings"
        />
        <input {...register("parentId")} type="text" placeholder="Parent ID" />
        <input
          {...register("nextCloseTime")}
          type="text"
          placeholder="Next Close Time"
        />
        <label>
          <input {...register("opened")} type="checkbox" />
          <span>Opened</span>
        </label>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateRestaurant;
