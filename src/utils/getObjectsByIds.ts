export const getObjectsByIds = (arrayIds: Array<string>, serviceMethod: any) =>
  Promise.allSettled(arrayIds.map((id: string) => serviceMethod(id))).then(
    (res) =>
      (res as PromiseFulfilledResult<any>[]).map((item) => ({
        ...item.value,
        id: item.value._id,
      }))
  );
