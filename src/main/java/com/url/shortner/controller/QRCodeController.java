package com.url.shortner.controller;

import com.url.shortner.service.QRCodeService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/qr")
public class QRCodeController {

    private final QRCodeService qrCodeService;

    @Value("${backend.url}")
    private String backendUrl;


    public QRCodeController(QRCodeService qrCodeService) {
        this.qrCodeService = qrCodeService;
    }


    @GetMapping("/{shortUrl}")
    public ResponseEntity<byte[]> generateQRCode(
            @PathVariable String shortUrl
    ) {

        try {

            String url = backendUrl + "/" + shortUrl;

            byte[] qrCode = qrCodeService.generateQRCode(
                    url,
                    300,
                    300
            );

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "inline; filename=qrcode.png"
                    )
                    .contentType(MediaType.IMAGE_PNG)
                    .body(qrCode);

        } catch (Exception e) {

            return ResponseEntity.badRequest().build();
        }
    }
}