function useAverageLocation(locations, map_data) {
  const loc = locations.length === 0 ? map_data : locations;

  const totalLocations = loc.length;
  const totalLatitude = loc.reduce((acc, location) => acc + parseFloat(location.latitude), 0);
  const totalLongitude = loc.reduce((acc, location) => acc + parseFloat(location.longitude), 0);

  const averageLatitude = totalLatitude / totalLocations;
  const averageLongitude = totalLongitude / totalLocations;

  return { averageLatitude, averageLongitude };
}

export default useAverageLocation;
