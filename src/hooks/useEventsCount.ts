import { useEffect, useState } from 'react';
import { EventStore } from '@client/services/event.store.class';
import { app } from '@app/app.provider';

export const useEventsCount = () => {
  const [eventsCount, setEventsCount] = useState(0);
  const { netEvents } = app.userEvents.useState(['netEvents']);

  useEffect(() => {
    const handler = (events: Map<number, EventStore>) => {
      const count = events.get(0)!.getAllCount();
      setEventsCount(count);
    };
    handler(app.getState().events);
  }, [netEvents]);

  return eventsCount;
};
