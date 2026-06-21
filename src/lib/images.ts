// Unsplash photo IDs curated for AfricaCruising. Stable, hot-linkable.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroSerengeti: u("1516426122078-c23e76319801"), // elephants
  heroZanzibar: u("1571401835393-8c5f35328320"), // beach boat
  heroCruise: u("1548574505-5e239809ee19"),
  lion: u("1547721064-da6cfb341d50"),
  giraffe: u("1535941339077-2dd1c7963098"),
  migration: u("1534567110243-8875d64ca8ff", 1200),
  ngorongoro: u("1516026672322-bc52d61a55d5", 1200),
  tarangire: u("1549366021-9f761d040a94", 1200),
  masaiMara: u("1523805009345-7448845a9e53", 1200),
  gorilla: u("1535338454770-8be927b5a00b", 1200),
  zanzibar: u("1589182337358-2cb63099350c", 1200),
  bali: u("1537996194471-e657df975ab4", 1200),
  phuket: u("1552733407-5d5c46c3bb3b", 1200),
  cruiseShip: u("1593351415075-3bac9f45c877", 1200),
  yacht: u("1505228395891-9a51e7e86bf6", 1200),
  islandCruise: u("1507525428034-b723cf961d3e", 1200),
  beach: u("1559827260-dc66d52bef19", 1200),
  safariJeep: u("1599640842225-85d111c60e6b", 1200),
  campLuxury: u("1604975701397-6365ccbd028a", 1200),
  sunset: u("1493246507139-91e8fad9978e", 1200),
  team: u("1521737604893-d14cc237f11d", 1200),
  blog1: u("1547471080-7cc2caa01a7e", 800),
  blog2: u("1571401835393-8c5f35328320", 800),
  blog3: u("1537996194471-e657df975ab4", 800),
  avatar1: u("1494790108377-be9c29b29330", 200),
  avatar2: u("1500648767791-00dcc994a43e", 200),
  avatar3: u("1438761681033-6461ffad8d80", 200),
};
