package com.hireme.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.User;
import com.hireme.service.UserService;
import com.hireme.service.model.UserModel;
import com.hireme.service.util.ServiceUtil;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Controller
@CrossOrigin
public class LoginController {

    @Autowired
    private UserService userService;

    private static Map<String, String> tokenMap = new HashMap<>();

    @RequestMapping(value = {"/", "/login"}, method = RequestMethod.GET)
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }


    @RequestMapping(value = "/registration", method = RequestMethod.GET)
    public ModelAndView registration() {
        ModelAndView modelAndView = new ModelAndView();
        UserModel userModel = new UserModel();
        modelAndView.addObject("userModel", userModel);
        modelAndView.setViewName("registration");
        return modelAndView;
    }

    @RequestMapping(value = "/verify", method = RequestMethod.POST)
    public ModelAndView verify(@Valid UserModel userModel, BindingResult bindingResult) {
        ModelAndView modelAndView = new ModelAndView();
        User userExists = null;
        try {
            userExists = userService.getUser(userModel.getEmail());
        } catch (BusinessException e) {
        }
        if (userExists != null) {
            bindingResult
                    .rejectValue("email", "error.user",
                            "There is already a user registered with the email provided");
        }
        if (bindingResult.hasErrors()) {
            modelAndView.setViewName("registration");
        } else {
            UUID token = UUID.randomUUID();
            System.out.println("token===========================" + token);
            ServiceUtil.sendMail(userModel.getEmail(), "HireMe! Email Verification Token", "Token : " + token);
            tokenMap.put(userModel.getEmail(), token.toString());
            modelAndView.addObject("userModel", userModel);
            modelAndView.setViewName("verify");
        }
        return modelAndView;
    }

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public ModelAndView createNewUser(@Valid UserModel userModel, BindingResult bindingResult) {
        ModelAndView modelAndView = new ModelAndView();
        try {
            if (tokenMap.get(userModel.getEmail()).equals(userModel.getToken())) {
                tokenMap.remove(userModel.getEmail());
                User newUser = ServiceUtil.getUser(userModel);
                userService.createUser(newUser, userModel.getRole());
                ServiceUtil.sendMail(newUser.getEmail(), "Welcome to HireMe! ", "Congratulations, you may exploit our services. We wish you all the best.");
                modelAndView.addObject("successMessage", "User has been registered successfully");
                modelAndView.addObject("userModel", new UserModel());
                modelAndView.setViewName("registration");
            } else {
                bindingResult
                        .rejectValue("token", "error.user",
                                "Invalid token");
                modelAndView.addObject("userModel", userModel);
                modelAndView.setViewName("verify");
            }
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }

    @RequestMapping(value = "/admin/home", method = RequestMethod.GET)
    public ModelAndView homeAdmin() {
        ModelAndView modelAndView = new ModelAndView();

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userName", "Welcome (" + user.getEmail() + ")");
            modelAndView.addObject("adminMessage", "Content Available Only for Users with Admin Role");
            modelAndView.setViewName("admin/home");
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }

    @RequestMapping(value = "/jobseeker/jobseeker", method = RequestMethod.GET)
    public ModelAndView homeJobseeker() {
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userId", user.getId());
            modelAndView.setViewName("/jobseeker/jobseeker");
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }

    @RequestMapping(value = "/company/company", method = RequestMethod.GET)
    public ModelAndView homeCompany() {
        ModelAndView modelAndView = new ModelAndView();
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user;
        try {
            user = userService.getUser(auth.getName());
            modelAndView.addObject("userId", user.getId());
            modelAndView.setViewName("company/company");
        } catch (BusinessException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return modelAndView;
    }
}