import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client
  .setProject("68f7712b000c1e9863a6")
  .setPlatform("com.uniquegamedev.sheflie");

export const account = new Account(client);
export const avatars = new Avatars(client);
