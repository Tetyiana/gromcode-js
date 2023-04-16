function withdraw(clients, balances, client, amount) {
  const indexClient = clients.indexOf(client);
  if (balances[indexClient] >= amount) {
    return (balances[indexClient] = (balances[indexClient] - amount));
  }
  return -1;
}
