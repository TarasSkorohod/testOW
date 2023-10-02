import { IService } from "@/interfaces/form";

export const services: IService[] = [
  {
    value: "trailerHitch",
    text: "Trailer Hitch",
    info: {
      titleInfo: "Trailer Hitch",
      textInfo:
        "Preferred Brand: Stealth Hitch; ECO-Hitch; Hidden Hitch; Curt; Draw-Tite etc. Electrical Wire: 4 pin / 7 pin Electrical is required for towing a trailer. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "bedCover",
    text: "Bed Cover",
    info: {
      titleInfo: "Bed Cover",
      textInfo:
        "Preferred Brand/Model: RETRAX; BAKFLIP; UNDERCOVER; EXTANG; TRUXEDO etc. Preferred Style: HARD/SOFT; TRIFOLD; RETRACTIBLE; ROLL-UP etc. Preferred Budget: Below $500; $500-$1500 etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "patriotLiner",
    text: "Patriot Liner",
    info: {
      titleInfo: "Patriot Liner",
      textInfo:
        "Preferred Tier: Standard Black, UV+ Platinum Liner, Colored Bedliner etc. Type of Spray: Truck Bed, Accessories, Complete Vehicle Spray etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "suspension",
    text: "Suspension",
    info: {
      titleInfo: "Suspension ",
      textInfo:
        "Type: Truck Performance Suspension Upgrade; Coilovers; Lift Kits; Shock Upgrade; Spring Upgrade etc. Brand: Ohlins; King Shocks; FOX Shocks; Bilstein; BDS; Ready Lift; Rough Country etc. Preferred Budget: Below $1000; $2000-$4000 etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "rustPrevention",
    text: "Rust Prevention",
    info: {
      titleInfo: "Rust Prevention",
      textInfo:
        "Coating Type: Our ECO CLEAR 10 Year Coating; Waxoyl; Woolwax; Cavity Wax etc. Underbody Condition: Clean; Some Rust; Heavy Rust etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "ceramicCoating",
    text: "Ceramic Coating",
    info: {
      titleInfo: "Ceramic Coating",
      textInfo:
        "Coating Type: Automotive; Aircraft; Marine; Commercial etc. Coating Tier: SystemX MAX; SystemX PRO; Interior; Wheel etc. Paint Condition: Brand New Vehicle; Need Some Care; Needs Restoration etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "ppf",
    text: "PPF (Clear Bra)",
    info: {
      titleInfo: "PPF (Clear Bra)",
      textInfo:
        "Film Tier: Bumper Only; Full Front; Track Pack; Full Body; Fashion Films etc. Film Type: DYNOmight; DYNOmatte; DYNOshield; DYNO prims; DYNOwhite etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "detailing",
    text: "Detailing",
    info: {
      titleInfo: "Detailing",
      textInfo:
        "Detail Type: Paint Correction; Exterior Detailing; Interior Detailing, Engine Bay Detailing; etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "vanPackages",
    text: "Van Packages",
    info: {
      titleInfo: "Van Packages",
      textInfo:
        "Upfit Type: Complete Package, Partition Only, Ladder Rack, Slick Locks etc. Preferred Brand/Package: Kargo Master, Weather Guards, Masterack etc. Package Type: General Trade; Electrician, HVAC, Base Package etc. Please refer to KargoMaster.com for more info. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "fleetManagement",
    text: "Fleet Management",
    info: {
      titleInfo: "Fleet Management",
      textInfo:
        "Vehicle Types: Pickup Truck; SUV; Vav; Sedan; Fleet Size: 1-5; 5-10; 10-50; 50+ Service Needed: Rust Prevention; Upfits; Protective Coatings etc. Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
  {
    value: "otherService",
    text: "Other Service",
    info: {
      titleInfo: "Other Service",
      textInfo: " Pictures and files can be attached below.",
      textProvide: "Please provided detailed information about the service requested.",
    },
  },
];

export const states = [
  {
    value: "state",
    text: "State",
    hidden: true,
  },
  { value: "AL", text: "AL" },
  { value: "AK", text: "AK" },
  { value: "AZ", text: "AZ" },
  { value: "AR", text: "AR" },
  { value: "CA", text: "CA" },
  { value: "CO", text: "CO" },
  { value: "CT", text: "CT" },
  { value: "DE", text: "DE" },
  { value: "FL", text: "FL" },
  { value: "GA", text: "GA" },
  { value: "HI", text: "HI" },
  { value: "ID", text: "ID" },
  { value: "IL", text: "IL" },
  { value: "IN", text: "IN" },
  { value: "IA", text: "IA" },
  { value: "KS", text: "KS" },
  { value: "KY", text: "KY" },
  { value: "LA", text: "LA" },
  { value: "ME", text: "ME" },
  { value: "MD", text: "MD" },
  { value: "MA", text: "MA" },
  { value: "MI", text: "MI" },
  { value: "MN", text: "MN" },
  { value: "MS", text: "MS" },
  { value: "MO", text: "MO" },
  { value: "MT", text: "MT" },
  { value: "NE", text: "NE" },
  { value: "NV", text: "NV" },
  { value: "NH", text: "NH" },
  { value: "NJ", text: "NJ" },
  { value: "NM", text: "NM" },
  { value: "NY", text: "NY" },
  { value: "NC", text: "NC" },
  { value: "ND", text: "ND" },
  { value: "OH", text: "OH" },
  { value: "OK", text: "OK" },
  { value: "OR", text: "OR" },
  { value: "PA", text: "PA" },
  { value: "RI", text: "RI" },
  { value: "SC", text: "SC" },
  { value: "SD", text: "SD" },
  { value: "TN", text: "TN" },
  { value: "TX", text: "TX" },
  { value: "UT", text: "UT" },
  { value: "VT", text: "VT" },
  { value: "VA", text: "VA" },
  { value: "WA", text: "WA" },
  { value: "WV", text: "WV" },
  { value: "WI", text: "WI" },
  { value: "WY", text: "WY" },
];
