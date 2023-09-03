package com.tfm.devops.backend.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.springframework.stereotype.Service;

@Service
public class Encoder {

    public String encrypt(String information) throws NoSuchAlgorithmException {
        /* Algorithm to use for encryption MD5 */
        MessageDigest messageDigest = MessageDigest.getInstance("MD5");

        /* Add information in bytes to MD5 */
        messageDigest.update(information.getBytes(StandardCharsets.UTF_8));

        /* Convert the hash value into bytes */
        byte[] hashBytes = messageDigest.digest();

        /*
         * The bytes array has bytes in decimal form. And the objetive is to Convert
         * into hexadecimal format.
         */
        StringBuilder hexString = new StringBuilder();

        for (byte hashByte : hashBytes) {
            String hex = Integer.toHexString(0xFF & hashByte);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }

        return hexString.toString();

    }

}
