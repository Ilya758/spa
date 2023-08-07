import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export const useMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLElement,
      style: 'mapbox://styles/mapbox/light-v10',
      center: { lng: -123.1148, lat: 49.27607 },
      zoom: 16.23,
    });

    new mapboxgl.Marker({
      color: 'red',
    })
      .setLngLat([-123.11518, 49.27607])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>Doggy SPA</h3>')
      )
      .addTo(map.current);

    new mapboxgl.Marker({
      color: 'red',
    })
      .setLngLat([-123.115, 49.2762])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>Doggy SPA</h3>')
      )
      .addTo(map.current);

    new mapboxgl.Marker({
      color: 'red',
    })
      .setLngLat([-123.1153, 49.2758])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>Doggy SPA</h3>')
      )
      .addTo(map.current);
  });

  return {
    mapContainer,
  };
};
