export const isTokenExpired = (expireDate: string): boolean => {
  const expiryTime = new Date(expireDate).getTime();
  const currentTime = Date.now();
  return currentTime >= expiryTime;
};
export const getBlurDataURL = () => {
  return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAFvAzYDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAYEAEBAQEBAAAAAAAAAAAAAAAAARESAv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAEQECEiH/2gAMAwEAAhEDEQA/APYIAoAAioAioACAIqCoCICCAIrNBEqpRUqLUBGatSglZrVZqKlZrVZoJWa1WaCVmrUorNZrVZoJWa1WagzWa1WaKlZrVZoM1mtVmipWatSgzWa1WaCVmtVmgzUq1KKzUq1KCVmrUBKiooiKgCKioACAAACoKiiCooCoogqKCgAoAiqigKigKioCooCoAoAKAgKgCgAACgAKIAogD3II0yogACAqACAgAIAgIqIqAiVUBEolFKzVqUESqzQSpVrNQSpVrNFSpVrNBKzWqzRUrNWpQZqVazUErNWpRWazWqzQSs1alBms1qs0VKzVqUGalWs0EqVazRUqVazQSpVrNAQRQQAQBUEAQAUUQEUARRFBRFEVUAVUUQVFBRFBRFBRFQUAFEUFEUBUEFAAVAFEUUAAAAAB7gQaZVAAEAAQAEAEAEEFEEQEEAqFQCs1azRRKVKCVKVKglSlSipUq1mglZq1KCVmrWaKlSrWaglZq1mipUq1mglZq1mglZrVZoqVmrWaCVKtZoJUpUoqVKVKCVFrNAQRQQQRUEUVAEAFFEBFVlRFVlQVWVEVWVEVUAaEUFEUFEUFVlQURUFEAaEAVUEFEAaEAUQBRAFEBVEAe40TUaZaRDQUTTQVE0BUQAEQFQ1AEERRBAEEoCU1milQqUCs0qVArNWs0UrNWs0EqUqUErNWs0UrNWs1BKzVqUErNWs0VKzVrNArNWs0VKzVrNArNWs0EqVazRSs1azQKzVrICCKAgICCgICKIKKICNCAjQgqNCANCAjSsqCqyqCqyoNDKiNCAKrKoKrKiqIA0IAoioKIAogCiAKIoAAPbaammtMrpqamg1qammirprOmguiamgqaamgaampoKmpqaC6mppqKVKmpoGppamgVKazaKalLWbUC1KWpaCWpS1m0UqUrNoFZq1m0UrNKlQSs1bWbQKzSpRUrNW1mgVmlS0ErNW1milZpaloFZpUoJUpalopWaWpaAhqaoJpqaIqammqKJqaqNDOmiNCaaDQzq6qNDOrojQzq6I0M6oNaICNKzpoNKzqoKrK6Cqzqgqs6ag0us6aDWmoaDQzq6C6ahqDWjOmitGs6oLpqGgumppoLomgPbaammtMrprOmg1qammgupqaaC6mppoq6mpqaC6ampoLqampoLqampqC6mpqaKWpaaloGpalqaBalpazaKWpaWs2oLWbS1LQS1LS1m0UtS0tZtAtZtLUtRUtS0tZtAtZpaloJalpazaKWs2razaBazaWs2ilrNq2s2gWs2lqWgWs2lqWilqWpaloGpprOqLqaamqi6mpqaDWms6aqNaazpojWms6uqjWms6uiNaazq6DWms6uiNaus6aI1q6zpoNarOroNaazq6DWms6uojWms6ug1prOmit6azpqDWrrGroNaazpoNaus6ag1prOmg1prOmg1prOmg1pqaaC6JoD22ms6a0jWprOmg1prOmgums6aC6azpoLprOmgupqamirqampoLqammgampqagtqampaKtrNpqWgalqWpoFqWpalqKWpaWs2gWpaWs2ilrNpaloFrNpazagWpaWs2ilrNpazaC2s2lrNopazaWs2gWpaWs2ilrNpazaBalpazaBalqWpaKWpalqWgus6lqaoupqamqNams6mqjemsaao3prGmiN6axq6rLemsauiN6usaaI3q6xq6I3prGroN6usaaI3q6xq6g1q6xq6DWrrGroNausauoNausaug1prOmg3prOmoNausaaDems6ag1prOmitaazpoN6axpoN6azpoNaM6A9tprOprSNaazpoNaazpoLprOmgums6aC6azqaDWpqamgupqamgupqamitazqamoLampqWgtqalrNoq2pampaC2s2lrNqC2s2lrNoq2s2lrNoFqWpalopalqWpagWs2lrNopalqWpaBazaWs2gWs2lrNoq2s2lrNqBazaWs2ilqWpazaC2s2pazaqralrNrN9CtWs30zfTNqkbvpOmNNUa6TWdNWjWms6arLXR0xpqo30vTnpqo66uuXR0Rl21dcul6Ijpq659L0Mumrrnpojpq656uoOmmsaaDpprGroN6axq6g3prGroN6axq6g3prGmg3q6xpqDemsaaDemsauoN6axporemsaaDemsaaDemsaaDejGiD2+ms6a6I1prOmg1qazpoNaazqaDWms6moNampqaK1qazpoLqampoLqampoLqampoq6mpqagtrNprNoLalqWpaKtrNqWpaC2s2lrNqC2s2palopalqWpaBalqWs2oq2s2lrNoFqWpazaKtrNpazaBazaWs2opalqWs2gWpalrNopazalrF9IrVrF9M30zarUavpm1EUVBBKqCDNVNNTVSrprOmqzWtTWdNWs+mtNZ0aqVrTWRqpWtOmRStz2s9uaiOvS9OOr0I7dL049LqRPrt0dOWrojr0vTlpqFdujpy1ekK66a5dL0FddNcul6Qrrprl0vSFdNXXLo6Frrprn0dIV001z6OkWuumufR0FdNNc+jpCummufR0FdNNc+joK6aOfQFe61NZ010VrTWdNBrT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";
};
