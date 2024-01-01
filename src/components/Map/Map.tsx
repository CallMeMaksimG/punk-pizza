import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Maps() {
  const defaultState = {
    center: [59.938676, 30.314487],
    zoom: 10,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState}>
        <Placemark geometry={[59.938676, 30.314487]} />
      </Map>
    </YMaps>
  );
}