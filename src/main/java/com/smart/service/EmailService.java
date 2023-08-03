package com.smart.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@Service
public class EmailService {
	@Autowired
    private JavaMailSender mailSender;

	
	 public boolean sendEmail(String subject, String body, String toEmail) {
	        //rest of the code..

	        boolean f = false;
	        
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("ashwinikdhaked@gmail.com");
            message.setTo(toEmail);
            message.setText(body);
            message.setSubject(subject);
	            
	        try {
	        	mailSender.send(message);
	            System.out.println("Sent success...................");
	            f = true;

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return f;
	    }
}
