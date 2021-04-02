import { uniq } from "lodash";

class Stays extends Array {
  filterByLocation = (search) =>
    new Stays(
      ...this.filter(
        (stay) =>
          stay.city.toLowerCase().includes(search.toLowerCase()) ||
          stay.country.toLowerCase().includes(search.toLowerCase())
      )
    );

  filterByBeds = (guestCount) =>
    new Stays(
      ...(guestCount
        ? this.filter((stay) => stay.beds >= guestCount || stay.beds === null)
        : this)
    );

  extractMatchingCities = (search) =>
    uniq(
      this.filterByLocation(search).map((stay) => {
        const { city, country } = stay;
        return city + ", " + country;
      })
    );
}

export default Stays;
