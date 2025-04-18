import styled from "styled-components";
import mapIcon from "../../../../assets/icon/map.svg";

interface MapMarkerProps {
  address: string;
  city: string;
  country: string;
  layout?: "top-address" | "bottom-address";
}

const MapMarkerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AddressWrapper = styled.div<{ layout: MapMarkerProps["layout"] }>`
  display: flex;
  gap: 4px;
  flex-direction: ${({ layout }) =>
    layout === "top-address" ? "column" : "column-reverse"};
`;

const Address = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-default-secondary);
`;

const CityCountry = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
`;

const MapMarker = ({
  address = "주소가 제공되지 않았습니다",
  city = "알 수 없는 도시",
  country = "알 수 없는 국가",
  layout = "top-address",
}: MapMarkerProps) => {
  return (
    <MapMarkerWrapper>
      <img src={mapIcon} alt="Map Icon" />
      <AddressWrapper layout={layout}>
        <Address>{address}</Address>
        <CityCountry>
          {city}, {country}
        </CityCountry>
      </AddressWrapper>
    </MapMarkerWrapper>
  );
};

export default MapMarker;
