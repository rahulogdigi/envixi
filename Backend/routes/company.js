var express = require('express');
var router = express.Router();
var Role = require('../helpers/role')

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);

var authorize = require('../helpers/authorize')

var { add_company, add_employee_link, get_company_list, get_company_profile, user_mapping, activate_licence_key, add_access_module, get_employee_list, get_module_list, get_access_module_list } = require('../controller/company_controller');
const { get_subscription_list } = require('../controller/subsciption_controller');
const { productkey_validation } = require('../middleware/product_key_validator');
const { add_location, get_location_specific_and_all } = require('../controller/location_controller');

/**
 * @api {post} /api/company/add_company Add user company
 * @apiName Add Company
 * @apiGroup Company
 *
 *
 * @apiParam {String} company_name company_name of the Company.
 * @apiParam {String} contact_number  contact_number of the Company.
 * @apiParam {String} email email of the User.
 * @apiParam {String} password  password of the User.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *      "financial_start_date": "2020-01-01",
        "financial_end_date": "2021-12-31",
 *      "corporate_identity_number": "INF01",
        "company_name": "Infimonk Pvt Ltd",
 *}

  * @apiParamExample {json} Request-Example:

 {
    "financial_start_date": "2020-01-01",
    "incorporation_year": "2022",
    "financial_end_date": "2021-12-31",
    "corporate_identity_number": "INF01",
    "company_name": "Infimonk Pvt Ltd",
    "registered_office_address": "Fake address",
    "corporate_office_address": "Fake address",
    "emai_id": "fake@dummy.com",
    "contact_number": [
        "9874563210",
        "1234567890"
    ],
    "website_url": [
        "www.google.com",
        "www.dummy.com"
    ],
    "financial_year": "01/2022",
    "stock_exchange_name": "",
    "paid_up_capital": "250",
    "contact_details": {
        "contact_person": "Dinesh Kumar",
        "contact_number": [
            "9874563210",
            "1234567890"
        ]
    },
    "reporting_boundary": "Dummy text",
    "ii_products_and_services": {
        "business_activity": [
            {
                "description_of_main_activity": "Dummy text",
                "business_activity_description": "Dummy text",
                "total_turnover_percentage": 21
            }
        ],
        "products_services_sold_by_the_entity": [
            {
                "product_or_service": "Dummy text",
                "nic_code": "DUMMYCODE",
                "total_turnover_percentage": 12
            }
        ]
    },
    "iii_operations": {
        "location": {
            "national_operations": {
                "number_of_plants": 12,
                "number_of_office": 8
            },
            "international_operations": {
                "number_of_plants": 11,
                "number_of_office": 4
            }
        },
        "market_served_by_entity": {
            "number_of_location": {
                "number_of_states": 5,
                "number_of_countries": 2
            },
            "seventeen_b": null,
            "seventeen_c": null
        }
    },
    "iv_employees": {
        "financial_year": {
            "employees_and_worker": {
                "employees": {
                    "permanent_d": {
                        "total": 0,
                        "male": {
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    },
                    "other_than_permanent_e": {
                        "total": 0,
                        "male": {
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    }
                },
                "workers": {
                    "permanent_f": {
                        "total": 0,
                        "male": {
                            
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                           
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    },
                    "other_than_permanent_g": {
                        "total": 0,
                        "male": {
                            
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                            
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    }
                }
            },
            "diffrently_added_employees_and_worker": {
                "added_employees": {
                    "permanent_d": {
                        "total": 0,
                        "male": {
                            
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                            
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    },
                    "other_than_permanent_e": {
                        "total": 0,
                        "male": {
                            
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                           
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    }
                },
                "added_workers": {
                    "permanent_f": {
                        "total": 0,
                        "male": {
                            
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                           
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    },
                    "other_than_permanent_g": {
                        "male": {
                           
                            "no_a": 0,
                            "no_b_a": 0
                        },
                        "female": {
                            
                            "no_c": 0,
                            "no_c_a": 0
                        }
                    }
                }
            }
        },
        "participation_or_representation_of_women": {
            "total": 0,
            "bod": {
                
                "no_a": 0,
                "no_a_b": 0
            },
            "kmp": {
                
                "no_a": 0,
                "no_a_b": 0
            }
        },
        "turnover_rate_for_permanent_employees_and_workers": {
            "permanent_employees": {
                "first_year": {
                    "fy_year": 2000,
                    "female": 12,
                    "male": 10,
                    "total": 22
                },
                "second_year": {
                    "fy_year": 2001,
                    "female": 12,
                    "male": 10,
                    "total": 22
                },
                "third_year": {
                    "fy_year": 2002,
                    "female": 12,
                    "male": 15,
                    "total": 27
                }
            },
            "permanent_workers": {
                "first_year": {
                    "fy_year": 2000,
                    "female": 12,
                    "male": 10,
                    "total": 22
                },
                "second_year": {
                    "fy_year": 2001,
                    "female": 12,
                    "male": 10,
                    "total": 22
                },
                "third_year": {
                    "fy_year": 2002,
                    "female": 12,
                    "male": 15,
                    "total": 27
                }
            }
        }
    },
    "v_associate_companies": [
        {
            "name_of_holding_or_associate_companies": "XYZ pvt ltd",
            "indicate_whether_holding_or_subsidiary_or_associate_joint_venture": "Dummy text",
            "percentage_of_shares_held_by_listed_entity": 25,
            "does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity": true
        }
    ],
    "vi_csr_details": {
        "is_csr_applicable": true,
        "turnover_in_rs": 12500000,
        "net_worth": 12500000
    },
    "vii_transparency_and_disclosures_ompliances": {
        "national_guidelines_on_responsible_business_conduct": {
            "stakeholder_group": {
                "communities": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "investors": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "shareholders": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "employee_and_workers": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "customers": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "value_chain_partner": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                },
                "others": {
                    "grievance_redressal_mechanism_in_place": true,
                    "current_fy": {
                        "year": 2022,
                        "number_of_complaints": 50,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    },
                    "previous_fy": {
                        "year": 2021,
                        "number_of_complaints": 40,
                        "number_of_complaints_pending_resolution_at_close": 20,
                        "remarks": null
                    }
                }
            }
        },
        "business_conduct_issues": [
            {
                
                "material_issue_identified": null,
                "indicate_whether_risk_or_opportunity": "Dummy text",
                "rational_of_identifying": "Dummy text",
                "in_case_of_risk": "Dummy text",
                "financial_implications": null
            },
            {
                
                "material_issue_identified": null,
                "indicate_whether_risk_or_opportunity": "Dummy text",
                "rational_of_identifying": "Dummy text",
                "in_case_of_risk": "Dummy text",
                "financial_implications": null
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Company has been created successfuly",
    "data": {
        "acknowledged": true,
        "insertedId": "62d45de0a7211b2b4c722207"
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 409 Data already exits!
 *     {
            "status": 409,
            "message": "Data already exits!"
        }
 * 
 * 
 */
router.post('/add_company', authorize([Role.Employeer, Role.Admin]), validateRequest, add_company)


/**
 * @api {get} /api/company/get_company_profile Get specific company data
 * @apiName Get company data
 * @apiGroup Company
 * @apiParam {String} company_id company_id of the User.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *      "company_id": "c385b73a2efcb4f46eaabc51be083989"
 *}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Company data",
    "data": {
        "_id": "62dd47685d80714c69e5b2fc",
        "corporate_identity_number": "INF01",
        "company_name": "INFIMONK PVT LTD",
        "registered_office_address": "Fake address",
        "corporate_office_address": "Fake address",
        "emai_id": "fake@dummy.com",
        "contact_number": [
            "9874563210",
            "1234567890"
        ],
        "website_url": [
            "www.google.com",
            "www.dummy.com"
        ],
        "financial_year": "01/2022",
        "stock_exchange_name": "",
        "paid_up_capital": 250,
        "contact_details": {
            "contact_person": "Dinesh Kumar",
            "contact_number": [
                "9874563210",
                "1234567890"
            ]
        },
        "reporting_boundary": "Dummy text",
        "ii_products_and_services": {
            "business_activity": [
                {
                    "description_of_main_activity": "Dummy text",
                    "business_activity_description": "Dummy text",
                    "total_turnover_percentage": 21
                }
            ],
            "products_services_sold_by_the_entity": [
                {
                    "product_or_service": "Dummy text",
                    "nic_code": "DUMMYCODE",
                    "total_turnover_percentage": 12
                }
            ]
        },
        "iii_operations": {
            "location": {
                "national_operations": {
                    "number_of_plants": 12,
                    "number_of_office": 8
                },
                "international_operations": {
                    "number_of_plants": 11,
                    "number_of_office": 4
                }
            }
        },
        "iv_employees": {
            "financial_year": {
                "employees_and_worker": {
                    "employees": {
                        "permanent_d": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        },
                        "other_than_permanent_e": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        }
                    },
                    "workers": {}
                },
                "diffrently_added_employees_and_worker": {
                    "added_employees": {
                        "permanent_d": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        },
                        "other_than_permanent_e": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        }
                    },
                    "added_workers": {
                        "permanent_f": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        },
                        "other_than_permanent_g": {
                            "male": {
                                "total": 0,
                                "no_a": 0,
                                "no_b_a": 0
                            },
                            "female": {
                                "total": 0,
                                "no_c": 0,
                                "no_c_a": 0
                            }
                        }
                    }
                }
            },
            "participation_or_representation_of_women": {
                "bod": {
                    "total": 0,
                    "no_a": 0,
                    "no_a_b": 0
                },
                "kmp": {
                    "total": 0,
                    "no_a": 0,
                    "no_a_b": 0
                }
            },
            "turnover_rate_for_permanent_employees_and_workers": {
                "permanent_employees": {
                    "first_year": {
                        "fy_year": 2000,
                        "female": 12,
                        "male": 10,
                        "total": 22
                    },
                    "second_year": {
                        "fy_year": 2001,
                        "female": 12,
                        "male": 10,
                        "total": 22
                    },
                    "third_year": {
                        "fy_year": 2002,
                        "female": 12,
                        "male": 15,
                        "total": 27
                    }
                },
                "permanent_workers": {
                    "first_year": {
                        "fy_year": 2000,
                        "female": 12,
                        "male": 10,
                        "total": 22
                    },
                    "second_year": {
                        "fy_year": 2001,
                        "female": 12,
                        "male": 10,
                        "total": 22
                    },
                    "third_year": {
                        "fy_year": 2002,
                        "female": 12,
                        "male": 15,
                        "total": 27
                    }
                }
            }
        },
        "v_associate_companies": [
            {
                "name_of_holding_or_associate_companies": "XYZ pvt ltd",
                "indicate_whether_holding_or_subsidiary_or_associate_joint_venture": "Dummy text",
                "percentage_of_shares_held_by_listed_entity": 25,
                "does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity": true
            }
        ],
        "vi_csr_details": {
            "is_csr_applicable": true,
            "turnover_in_rs": 12500000,
            "net_worth": 12500000
        },
        "vii_transparency_and_disclosures_ompliances": {
            "national_guidelines_on_responsible_business_conduct": {
                "stakeholder_group": {
                    "communities": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "investors": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "shareholders": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "employee_and_workers": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "customers": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "value_chain_partner": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    },
                    "others": {
                        "grievance_redressal_mechanism_in_place": true,
                        "current_fy": {
                            "year": 2022,
                            "number_of_complaints": 50,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": 2021,
                            "number_of_complaints": 40,
                            "number_of_complaints_pending_resolution_at_close": 20,
                            "remarks": null
                        }
                    }
                }
            },
            "business_conduct_issues": [
                {
                    "sl_no": 1,
                    "material_issue_identified": null,
                    "indicate_whether_risk_or_opportunity": "Dummy text",
                    "rational_of_identifying": "Dummy text",
                    "in_case_of_risk": "Dummy text",
                    "financial_implications": null
                },
                {
                    "sl_no": 1,
                    "material_issue_identified": null,
                    "indicate_whether_risk_or_opportunity": "Dummy text",
                    "rational_of_identifying": "Dummy text",
                    "in_case_of_risk": "Dummy text",
                    "financial_implications": null
                }
            ]
        },
        "company_id": "c385b73a2efcb4f46eaabc51be083989",
        "owner": "62dd46a52d33afcafa765687",
        "db_name": "c385b73a_IPL_DB"
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }
 * 
 * 
 */

router.get('/get_company_profile', authorize([Role.Employee, Role.Employeer, Role.Admin]), validateRequest, get_company_profile)


/**
 * @api {get} /api/company/get_company_list Get all company list
 * @apiName Get company list
 * @apiGroup Company
 * 
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Company list",
    "data": [
        {
            "_id": "62dd47675d80714c69e5b2fb",
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "company_name": "INFIMONK PVT LTD",
            "corporate_identity_number": "INF01",
            "owner": "62dd46a52d33afcafa765687",
            "db_name": "c385b73a_IPL_DB"
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }
 * 
 * 
 */

router.get('/get_company_list', authorize([ Role.Employee, Role.Employeer, Role.Admin]), validateRequest, get_company_list)


/**
 * @api {get} /api/company/add_employee_link Invite employee
 * @apiName Invite employee
 * @apiGroup Company
 *
 * @apiParam {String} emailid emailid unique user.
 *
 * @apiParam {String} company_id company_id of the Employeer.

 * 
 * @apiDeprecated ref_token send as a params.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *      "company_id": "677dsffxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *      "recipient_emailid": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 *      "invite_link": "http://example.com/invite"
 *}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Request email has been sent successfully"
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }
 * 
 * 
 */
router.get('/add_employee_link', authorize([Role.Employeer, Role.Employee]), validateRequest, add_employee_link)


/**
 * @api {put} /api/company/activate_licence_key Activate license key
 * @apiName Activate license key
 * @apiGroup Company
 *
 * @apiParam {String} licence_key licence_key unique licence_key.
 *
 * @apiParam {String} company_id company_id of the Employeer.

 * 
 * @apiParamExample {json} Request-Example:
 *     {
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "licence_key": "6ITV-U43Y-GXGP-BIV2-LQFR-HRD8-FF8X-6C5W"
        }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Licence key has been activated successfully"
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }
 @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Invalid Token
 *     {
            "status": 401,
            "message": "Invalid Token"
        }
 * 
 * 
 */
router.put('/activate_licence_key', authorize([Role.Employeer]), validateRequest, activate_licence_key)



/**
 * @api {put} /api/company/user_mapping User mapping
 * @apiName User mapping
 * @apiGroup Company
 *
 * @apiParam {String} licence_key_id licence_key_id unique Licence.
 * @apiParam {Array} employees_ids employees_ids of the Employeer.
 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "employees_ids": [
        "62dd4cb289375e79c0661d3dd"
    ],
    "licence_key_id": "6326af20b353288272d04b43"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "User has been maaped successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.3 400 Following ids are not matching
 *     {
          "status": 400,
          "message": "Following ids are not matching",
          "data": [
                "62dd4cb289375e79c0661d3dd"
            ]
      }
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.4 404 No licence key found
 *     {
            "status": 404,
            "message": "No licence key found"
        } 
 * 
 */
router.put('/user_mapping', authorize([Role.Admin,Role.Employeer]), validateRequest, user_mapping)





/**
 * @api {get} /api/company/get_subscription_list?company_id=c385bxxxxxx&limit=1&offset=0 Get subscriptions specific or list 
 * @apiName Get subscriptions specific or list 
 * @apiGroup Company
 *
 * @apiParam {String} offset offset of the data .
 * @apiParam {Array} limit limit of the Data.
 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "limit": 10,
    "offset": 0
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Licence list",
    "total": 1,
    "data": [
        {
            "_id": "6328a9f2bbc7796db8296890",
            "no_of_user": 6,
            "user_ids": [
                "62dd46a52d33afcafa765687"
            ],
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "created_at": "2022-09-19 17:42:09",
            "updated_at": "2022-09-19 17:42:09",
            "is_active": true,
            "plan_cost": 480,
            "expired_at": "2023-09-20 18:34:56",
            "licence_key": "6ITV-U43Y-GXGP-BIV2-LQFR-HRD8-FF8X-6C5W",
            "plan_type": "years",
            "userId": "631e2951901c46bc16c55e71",
            "plan_name": [],
            "reseller_name": []
        },
        {
            "_id": "6328aa3d830d973389d65f17",
            "no_of_user": 2,
            "user_ids": [],
            "company_id": null,
            "created_at": "2022-09-19 17:43:25",
            "updated_at": "2022-09-19 17:43:25",
            "is_active": true,
            "plan_cost": 160,
            "expired_at": "2023-09-19 17:43:25",
            "licence_key": "TGXE-LOS6-SAJF-T4V5-A3ZY-JE1T-VNR7-N3EX",
            "plan_type": "years",
            "userId": "631e2951901c46bc16c55e71",
            "plan_name": [],
            "reseller_name": []
        },
        {
            "_id": "6399d6533c2def41786a52fa",
            "no_of_user": "6",
            "user_ids": [],
            "company_id": null,
            "created_at": "2022-12-14 13:57:39",
            "updated_at": "2022-12-14 13:57:39",
            "is_active": true,
            "plan_type": "months",
            "plan_cost": 60,
            "expired_at": "2023-01-14 13:57:39",
            "licence_key": "LMUJ-HE5D-9HUE-87PT-NGWJ-DICB-Q2VU-5T51",
            "userId": "62dd43fed16f8e142171efa1",
            "plan_name": [
                "Basic Monthly"
            ],
            "reseller_name": [
                "admin"
            ]
        },
        {
            "_id": "6399d9a33c2def41786a52fb",
            "no_of_user": "2",
            "user_ids": [],
            "company_id": null,
            "created_at": "2022-12-14 14:11:47",
            "updated_at": "2022-12-14 14:11:47",
            "is_active": true,
            "plan_type": "years",
            "plan_cost": 300,
            "expired_at": "2023-12-14 14:11:47",
            "licence_key": "4KFW-49N9-Z543-SAE1-BQXU-WXQM-N2SN-5H8V",
            "userId": "62dd43fed16f8e142171efa1",
            "plan_name": [],
            "reseller_name": [
                "admin"
            ]
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */
router.get('/get_subscription_list', authorize([Role.Admin, Role.Employeer, Role.Reseller]), validateRequest, get_subscription_list)


/**
 * @api {post} /api/company/add_access_module Add user access module
 * @apiName Add user access module
 * @apiGroup Company
 *
 * @apiParam {String} company_id company_id of the Company .
 * @apiParam {String} module_list module_list of the Data.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} employees_id employees_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "module_list": "63d5583d164bb0415e42c8ac,63d55a36164bb0415e42cb11,63d55d05164bb0415e42ce87",
    "employees_id": "62dd4cb289375e79c0661d3d"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "User data has been saved successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 0,
        "upsertedId": "63d615ee164bb0415e42fa27",
        "upsertedCount": 1,
        "matchedCount": 0
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */
router.post('/add_access_module', authorize([Role.Admin, Role.Employeer]), validateRequest, add_access_module)


/**
 * @api {get} /api/company/get_employee_list Get employee list
 * @apiName Get employee list
 * @apiGroup Company
 *
 * @apiParam {String} company_id company_id of the Company .
 * @apiParam {Number} limit limit of the Data.
 * @apiParam {Number} offset offset of the Data.
 * @apiParam {Number} sort_by sort_by of the Data.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "limit": 10,
    "offset": 0,
    "sort_by": -1
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
    "status": 200,
    "message": "Employee list",
    "total": 2,
    "data": [
        {
            "_id": "62dd4cb289375e79c0661d3d",
            "email": "nitish.kumar@gmail.com",
            "role": "Employee",
            "first_name": "Nitish",
            "last_name": "Kumar",
            "company_ids": [
                "c385b73a2efcb4f46eaabc51be083989"
            ],
            "is_deactive": false
        },
        {
            "_id": "62dd46a52d33afcafa765687",
            "email": "sumit.gupta@gmail.com",
            "role": "Employeer",
            "first_name": "Sumit",
            "last_name": "Gupta",
            "company_ids": [
                "c385b73a2efcb4f46eaabc51be083989"
            ],
            "is_deactive": false
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */
router.get('/get_employee_list', authorize([Role.Admin, Role.Employeer]), validateRequest, get_employee_list)

/**
 * @api {get} /api/company/get_module_list Get module list
 * @apiName Get module list
 * @apiGroup Company
 *
 * @apiParam {String} module_id module_id of the Module .
 * @apiParam {Number} limit limit of the Data.
 * @apiParam {Number} offset offset of the Data.
 * @apiParam {Number} sort_by sort_by of the Data.'
 * @apiParam {String} search_query search_query of the Data.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "limit": 10,
    "offset": 0,
    "sort_by": -1,
    "search_query": "BSRS",
    "module_id": "c385b73a2efcb4f46eaabc51be"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 *{
    "status": 200,
    "message": "Module list",
    "total": 2,
    "data": [
        {
            "_id": "63d55d05164bb0415e42ce87",
            "framework_id": "63d555831e75024057742550",
            "id": "navigation-features",
            "title": "BRSR Principles",
            "type": "group",
            "created_at": "2023-01-28 17:36:06",
            "display_seq_number": 5,
            "icon": "heroicons_outline:menu",
            "link": "",
            "parent": null,
            "subtitle": "",
            "updated_at": "2023-01-28 17:36:06"
        },
        {
            "_id": "63d55c82164bb0415e42cdde",
            "framework_id": "63d555831e75024057742550",
            "id": "brsr1",
            "title": "BRSR",
            "type": "group",
            "created_at": "2023-01-28 17:33:55",
            "display_seq_number": 4,
            "icon": "heroicons_outline:home",
            "link": "",
            "parent": null,
            "subtitle": "",
            "updated_at": "2023-01-28 17:33:55"
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */
router.get('/get_module_list', authorize([Role.Admin, Role.Employeer]), validateRequest, get_module_list)


/**
 * @api {get} /api/company/get_access_module_list Get module access list
 * @apiName Get module access list
 * @apiGroup Company
 *
 * @apiParam {String} module_id module_id of the Module .
 * @apiParam {Number} limit limit of the Data.
 * @apiParam {Number} offset offset of the Data.
 * @apiParam {Number} sort_by sort_by of the Data.'
 * @apiParam {String} employee_id employee_id of the Data.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "limit": 10,
    "offset": 0,
    "sort_by": -1,
    "employee_id": "c385b73a2xxxxxxxxxxxxxxxx",
    "module_id": "c385b73a2efcb4f46eaabc51be",
    "location_id": "c385b73a2efc"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 {
    "status": 200,
    "message": "Module access list",
    "total": 1,
    "data": [
        {
            "_id": "63d616df164bb0415e42fb1c",
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "location_id": "c385b73a2efc",
            "module_list": [
                "63d5583d164bb0415e42c8ac",
                "63d55a36164bb0415e42cb11",
                "63d55d05164bb0415e42ce87"
            ],
            "is_deactive": false,
            "employee_id": "62dd4cb289375e79c0661d3d",
            "module_details": [
                {
                    "_id": "63d5583d164bb0415e42c8ac",
                    "framework_id": "63d555831e75024057742550",
                    "id": "dashboards",
                    "title": "Company Profile",
                    "type": "group",
                    "created_at": "2023-01-28 17:19:21",
                    "display_seq_number": 1,
                    "icon": "heroicons_outline:home",
                    "link": "",
                    "parent": null,
                    "subtitle": "",
                    "updated_at": "2023-01-28 17:19:21"
                },
                {
                    "_id": "63d55a36164bb0415e42cb11",
                    "framework_id": "63d555831e75024057742550",
                    "id": "dashboards.project1",
                    "title": "Dashboard E",
                    "type": "basic",
                    "created_at": "2023-01-28 17:24:07",
                    "display_seq_number": 1,
                    "icon": "heroicons_outline:clipboard-check",
                    "link": "/dashboard/dashboard-e",
                    "parent": "dashboards",
                    "subtitle": "",
                    "updated_at": "2023-01-28 17:24:07"
                },
                {
                    "_id": "63d55d05164bb0415e42ce87",
                    "framework_id": "63d555831e75024057742550",
                    "id": "navigation-features",
                    "title": "BRSR Principles",
                    "type": "group",
                    "created_at": "2023-01-28 17:36:06",
                    "display_seq_number": 5,
                    "icon": "heroicons_outline:menu",
                    "link": "",
                    "parent": null,
                    "subtitle": "",
                    "updated_at": "2023-01-28 17:36:06"
                }
            ]
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */

router.get('/get_access_module_list', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest, get_access_module_list)



// Location code


/**
 * @api {post} /api/company/add_location Request to add location
 * @apiName Request to add location
 * @apiGroup Company
 *
 * @apiParam {Number} address address of the Data.
 * @apiParam {String} location_name location_name of the Location.'
 * @apiParam {String} company_id company_id of the Data.
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "a711a088c48fff7f3104c5fc2f095f4a",
    "location_name": "LocationA",
    "address": "Demo address",
    "is_deleted": true
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 {
    "status": 200,
    "message": "Location has been created successfuly",
    "data": {
        "data": "43b5162f632e"
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */

router.post('/add_location', authorize([Role.Admin, Role.Employeer]), validateRequest,  add_location)


/**
 * @api {post} /api/company/get_location_specific_and_all Get specific and all locations
 * @apiName Get specific and all locations
 * @apiGroup Company
 *
 * @apiParam {Number} is_deleted is_deleted of the Data.
 * @apiParam {String} location_id location_id of the Location.'
 * @apiParam {String} company_id company_id of the Data.
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "a711a088c48fff7f3104c5fc2f095f4a",
    "is_deleted": true
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "status": 200,
    "message": "Location list data",
    "total": 1,
    "data": [
        {
            "_id": "63ee6760164bb0415e4914e3",
            "company_id": "a711a088c48fff7f3104c5fc2f095f4a",
            "location_id": "43b5162f632e",
            "location_name": "LocationA",
            "update_at": "2023-02-16 17:31:10",
            "address": "Demo address",
            "created_at": "2023-02-16 17:31:10",
            "is_deleted": false
        }
    ]
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Something went wrong
 *     {
          "status": 500,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found."
      }

 * 
 */
router.get('/get_location_specific_and_all', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest,  get_location_specific_and_all)


module.exports = router;