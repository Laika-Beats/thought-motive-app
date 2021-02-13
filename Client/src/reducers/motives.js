export default function motives(motives = [], action) {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...motives, action.payload];
    case "DELETE":
      return motives.filter((motive) => motive._id === action.payload);
    case "UPDATE":
      return motives.map((motive) =>
        motive._id === action.payload._id ? action.payload : motive
      );
    default:
      return motives;
  }
}
