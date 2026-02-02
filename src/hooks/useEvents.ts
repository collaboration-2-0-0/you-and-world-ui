import { useCallback, useEffect, useRef, useState } from 'react';
import { IEvent, IEvents, NetViewKeys } from '@server/types/types';
import { app } from '@app/app.provider';
import { EventStore } from '@client/services/event.store.class';
import { modalService } from '@services/modal.service';

export const useEvents = (netView?: NetViewKeys) => {
  const { userNet: net } = app.getState();
  const [eventStoreEvents, setEventStoreEvents] = useState<IEvents>([]);

  const { netEvents } = app.userEvents.useState(['netEvents']);
  const currentEvent = useRef<IEvent | null>(null);
  const netId = netView ? net?.net_id : 0;

  const handleEvents = useCallback(
    (eventsMap: Map<number, EventStore>) => {
      if (netId === undefined) return;
      const eventsStore = eventsMap.get(netId);
      if (!eventsStore) return;
      const showEvents = eventsStore.state.events;
      setEventStoreEvents(showEvents);
    },
    [netId],
  );

  useEffect(() => {
    handleEvents(app.getState().events);
  }, [handleEvents, netEvents]);

  useEffect(() => {
    if (currentEvent.current) return;
    const [event] = eventStoreEvents;
    if (!event) return;
    currentEvent.current = event;
    const { message } = event;
    const handleClose = () => {
      currentEvent.current = null;
      app.userEvents.confirm(event).catch(() => {});
    };
    modalService.showMessage(message, undefined, undefined, handleClose);
  }, [eventStoreEvents]);

  return null;
};
