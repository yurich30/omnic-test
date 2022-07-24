export interface Device {
  device: string;
  name: string;
  type: number | null;
  partner_type: number | null;
  location: DeviceLocation;
  description: string;
  point_code: number | null;
  is_online: boolean;
  uid: string;
}

interface DeviceLocation {
  country: number | null;
  country_name: string;
  region: string;
  name: string;
  address: string;
  postal: string;
  latitude: string;
  longitude: string;
  working_hours: {
    1: Array<string>;
    2: Array<string>;
    3: Array<string>;
    4: Array<string>;
    5: Array<string>;
    6: Array<string>;
    7: Array<string>;
  };
  uid: string;
}

export interface DeviceCell {
  name?: string | undefined;
  type: string;
  has_empty: boolean;
  params: {
    width: number;
    height: number;
    depth: number;
    label: string;
  };
}
