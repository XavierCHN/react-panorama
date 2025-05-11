import { DependencyList, useLayoutEffect, useState } from 'react';

/**
 * Executes `callback` every time `eventName` game event is fired.
 */
export function useGameEvent<T extends string | object>(
  eventName:
    | (T extends string ? T : string)
    | keyof CustomGameEventDeclarations
    | keyof GameEventDeclarations,
  callback: (event: NetworkedData<GameEvents.InferGameEventType<T, object>>) => void,
  dependencies: DependencyList = [],
) {
  useLayoutEffect(() => {
    const id = GameEvents.Subscribe(eventName, callback);
    return () => GameEvents.Unsubscribe(id);
  }, dependencies);
}

/**
 * Executes `callback` every time `event` UI event is fired.
 */
export function useRegisterForUnhandledEvent<TName extends PanoramaEvents.PanoramaEventName | string>(
  event: TName extends PanoramaEvents.PanoramaEventName ? TName : string,
  callback: PanoramaEvents.InferPanoramaCallback<TName>,
  dependencies: DependencyList = [],
) {
  useLayoutEffect(() => {
    const id = $.RegisterForUnhandledEvent(event, callback);
    return () => $.UnregisterForUnhandledEvent(event, id);
  }, dependencies);
}

/**
 * Gets the value of a key in a custom NetTable and updates component when it changes.
 */
export function useNetTableKey<
  TName extends keyof CustomNetTableDeclarations,
  T extends CustomNetTableDeclarations[TName],
  K extends keyof T
>(name: TName, key: K): NetworkedData<T[K]> | null {
  const [value, setValue] = useState(() => CustomNetTables.GetTableValue<TName, T, K>(name, key));

  useLayoutEffect(() => {
    const listener = CustomNetTables.SubscribeNetTableListener(name, (_, eventKey, eventValue) => {
      if (key === eventKey) {
        setValue(eventValue);
      }
    });

    return () => CustomNetTables.UnsubscribeNetTableListener(listener);
  }, [name, key]);

  return value;
}

/**
 * Gets all values in a custom NetTable and updates component when it changes.
 */
export function useNetTableValues<
  TName extends keyof CustomNetTableDeclarations,
  T extends CustomNetTableDeclarations[TName]
>(name: TName): NetworkedData<T> | null {
  const [values, setValue] = useState(() =>
    CustomNetTables.GetAllTableValues<TName, T>(name).reduce<NetworkedData<T>>(
      (accumulator, pair) => ({ ...(accumulator as any), [pair.key]: pair.value }),
      {} as any,
    ),
  );

  useLayoutEffect(() => {
    const listener = CustomNetTables.SubscribeNetTableListener(name, (_, eventKey, eventValue) => {
      setValue((current) => ({ ...(current as any), [eventKey]: eventValue }));
    });

    return () => CustomNetTables.UnsubscribeNetTableListener(listener);
  }, [name]);

  return values;
}
