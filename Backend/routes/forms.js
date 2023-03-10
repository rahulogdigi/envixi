var express = require('express');
var router = express.Router();
var Role = require('../helpers/role')

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);

var authorize = require('../helpers/authorize');
const { management_and_process, principal_four, principal_five, principal_three, principal_two, principal_one, principal_seven, principal_eight, principal_nine, principal_six, get_principal_form, get_form_month_and_year_wise, monthly_survey_principal_one, monthly_survey_principal_three, monthly_survey_principal_two, monthly_survey_principal_four, monthly_survey_principal_five, monthly_survey_principal_six, monthly_survey_principal_seven, monthly_survey_principal_eight, monthly_survey_principal_nine, get_monthly_survey_principal_nine, get_monthly_survey_form_data, get_monthly_survey_form_data_specific, get_monthly_survey_form_data_specific_date_range, staging_principal_two, staging_principal_one, staging_principal_three, staging_principal_four, staging_principal_five, staging_principal_six, staging_principal_seven, staging_principal_eight, staging_principal_nine, get_monthly_survey_aggregate_data, staging_management_and_process, get_graph_form_data_total_volume_of_water_consumption, get_graph_form_data_total_scope_emissions, get_graph_form_data_total_energy_consumption, get_graph_form_data_total_water_discharged_in_kilolitres } = require('../controller/forms_controller');



/**
 * @api {post} /api/form/management_and_process Add section B form
 * @apiName Add section B form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *  "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "policy_and_management_process": {
        "one_a": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "one_b": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "one_c": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "two": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "three": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "four": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "five": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "six": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        }
    },
    "governance_leadership_and_oversight": {
        "seven": "Dummy Text",
        "eight": "Dummy text",
        "nine": "Dummy text",
        "ten": {
            "performance_against_above_policies_and_follow_up_action": {
                "indicate_whether_review_was_undertaken_by_director": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                },
                "frequency": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p8": true
                }
            },
            "compliance_with_statutory_requirements": {
                "indicate_whether_review_was_undertaken_by_director": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                },
                "frequency": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                }
            }
        },
        "eleven": {
            "p1": true,
            "name_of_agency_p1": "Dummy text",
            "p2": true,
            "name_of_agency_p2": "Dummy text",
            "p3": true,
            "name_of_agency_p3": "Dummy text",
            "p4": true,
            "name_of_agency_p4": "Dummy text",
            "p5": true,
            "name_of_agency_p5": "Dummy text",
            "p6": true,
            "name_of_agency_p6": "Dummy text",
            "p7": true,
            "name_of_agency_p7": "Dummy text",
            "p8": true,
            "name_of_agency_p8": "Dummy text",
            "p9": true,
            "name_of_agency_p9": "Dummy text"
        },
        "tweleve": {
            "the_entity_does_not_consider_the_principles_material_to_its_business": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "position_to_formulate_and_implement_the_policies_on_specified_principles": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "human_and_technical_resources_available_for_the_task": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "it_is_planned_to_be_done_in_the_next_financial_year": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "any_other_reason": "Dummy text"
        }
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Section B form submited"
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

router.post('/management_and_process', authorize([Role.Employeer, Role.Employee]), validateRequest, management_and_process)

/**
 * @api {post} /api/form/staging_management_and_process Add staging section B form
 * @apiName Add staging section B form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *  "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "policy_and_management_process": {
        "one_a": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "one_b": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "one_c": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "two": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "three": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "four": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "five": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        },
        "six": {
            "p1": true,
            "p2": true,
            "p3": true,
            "p4": true,
            "p5": true,
            "p6": true,
            "p7": true,
            "p8": true,
            "p9": true
        }
    },
    "governance_leadership_and_oversight": {
        "seven": "Dummy Text",
        "eight": "Dummy text",
        "nine": "Dummy text",
        "ten": {
            "performance_against_above_policies_and_follow_up_action": {
                "indicate_whether_review_was_undertaken_by_director": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                },
                "frequency": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p8": true
                }
            },
            "compliance_with_statutory_requirements": {
                "indicate_whether_review_was_undertaken_by_director": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                },
                "frequency": {
                    "p1": true,
                    "p2": true,
                    "p3": true,
                    "p4": true,
                    "p5": true,
                    "p6": true,
                    "p7": true,
                    "p8": true,
                    "p9": true
                }
            }
        },
        "eleven": {
            "p1": true,
            "name_of_agency_p1": "Dummy text",
            "p2": true,
            "name_of_agency_p2": "Dummy text",
            "p3": true,
            "name_of_agency_p3": "Dummy text",
            "p4": true,
            "name_of_agency_p4": "Dummy text",
            "p5": true,
            "name_of_agency_p5": "Dummy text",
            "p6": true,
            "name_of_agency_p6": "Dummy text",
            "p7": true,
            "name_of_agency_p7": "Dummy text",
            "p8": true,
            "name_of_agency_p8": "Dummy text",
            "p9": true,
            "name_of_agency_p9": "Dummy text"
        },
        "tweleve": {
            "the_entity_does_not_consider_the_principles_material_to_its_business": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "position_to_formulate_and_implement_the_policies_on_specified_principles": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "human_and_technical_resources_available_for_the_task": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "it_is_planned_to_be_done_in_the_next_financial_year": {
                "p1": true,
                "p2": true,
                "p3": true,
                "p4": true,
                "p5": true,
                "p6": true,
                "p7": true,
                "p8": true,
                "p9": true
            },
            "any_other_reason": "Dummy text"
        }
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Section B form submited"
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
router.post('/staging_management_and_process', authorize([Role.Employeer, Role.Employee]), validateRequest, staging_management_and_process)



/**
 * @api {post} /api/form/principal_one Add Principal 1 form
 * @apiName Add Principal 1 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "principles_during_the_financial_year": {
            "segment_board_of_director": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 28
            },
            "key_managerial_personnel": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 28
            },
            "employees_other_than_bod_and_kmps": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 28
            },
             "workers": {
                "total_number_of_training": "",
                "topics": "",
                "percentage_of_person": ""
            }
        },
        "details_of_fines_penalties": {
            "monetary": {
                "penality": {
                    "ngrbc_principal": "Dummy text",
                    "name_of_the_regulatory": "Dummy text",
                    "amount_in_inr": 240000.85,
                    "brief_of_the_case": "Dummy text",
                    "has_an_appeal_been_preferred": true
                },
                "settlement": {
                    "ngrbc_principal": "Dummy text",
                    "name_of_the_regulatory": "Dummy text",
                    "amount_in_inr": 240000.85,
                    "brief_of_the_case": "Dummy text",
                    "has_an_appeal_been_preferred": true
                },
                "compounding_fee": {
                    "ngrbc_principal": "Dummy text",
                    "name_of_the_regulatory": "Dummy text",
                    "amount_in_inr": 240000.85,
                    "brief_of_the_case": "Dummy text",
                    "has_an_appeal_been_preferred": true
                }
            },
            "non_monetary": {
                "imprisonment": {
                    "ngrbc_principal": "Dummy text",
                    "name_of_the_regulatory": "Dummy text",
                    "amount_in_inr": 240000.85,
                    "brief_of_the_case": "Dummy text",
                    "has_an_appeal_been_preferred": true
                },
                "punishment": {
                    "ngrbc_principal": "Dummy text",
                    "name_of_the_regulatory": "Dummy text",
                    "amount_in_inr": 240000.85,
                    "brief_of_the_case": "Dummy text",
                    "has_an_appeal_been_preferred": true
                }
            }
        },
        "monetary_or_non_monetary_action_appealed": [
            {
                "case_details": "Dummy text",
                "judicial_institutions": "Dummy text"
            },
            {
                "case_details": "Dummy text",
                "judicial_institutions": "Dummy text"
            }
        ],
        "anti_corruption_or_anti_bribery_policy_boolean": true,
        "anti_corruption_or_anti_bribery_policy": "Dummy text",
        "number_of_directors": {
            "current_financial_yr": {
                "year": "2020-2021",
                "directors": 2,
                "kmps": 0,
                "employees": 1250,
                "workers": 1800
            },
            "previous_financial_yr": {
                "year": "2020-2021",
                "directors": 1,
                "kmps": 0,
                "employees": 1150,
                "workers": 1500
            }
        },
        "details_of_complaints": {
            "current_financial_yr": {
                "year": "2020-2021",
                "number_of_complaints_received_of_conflict_of_interes_of_the_directors": {
                    "numbers": 5,
                    "remarks": "Dummy text"
                },
                "number_of_complaints_received_of_conflict_of_interes_of_the_kmps": {
                    "numbers": 5,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_yr": {
                "year": "2020-2021",
                "number_of_complaints_received_of_conflict_of_interes_of_the_directors": {
                    "numbers": 5,
                    "remarks": "Dummy text"
                },
                "number_of_complaints_received_of_conflict_of_interes_of_the_kmps": {
                    "numbers": 5,
                    "remarks": "Dummy text"
                }
            }
        },
        "provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines": "Dummy text"
    },
    "leadership_indicators": {
        "awareness_programmes_conducted": [
            {
                "total_number_of_awareness_programmes_held": 55,
                "principles_covered_under_the_training": "Dummy text",
                "percetage_of_age": 54
            }
        ],
        "manage_conflict_of_interests_involving_members_of_the_board": "Dummy text"
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/principal_one', authorize([Role.Employeer, Role.Employee]), validateRequest, principal_one)

router.post('/staging_principal_one', authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_one)

/**
 * @api {post} /api/form/principal_two Add Principal 2 form
 * @apiName Add Principal 2 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "one_capital_expenditure": {
            "r_and_d": {
                "current_year": 2022,
                "previous_year": 2021,
                "details_of_improvements": "Dummy text"
            },
            "capex": {
                "current_year": 2022,
                "previous_year": 2021,
                "details_of_improvements": "Dummy text"
            }
        },
        "two_a": "Dummy text",
        "two_b": "Dummy text",
        "three_describe_the_processes_in_place_to_safely_reclaim": {
            "a": "Dummy text",
            "b": "Dummy text",
            "c": "Dummy text",
            "d": "Dummy text"
        },
        "four_extended_producer_responsibility": {
            "epr": "Dummy text",
            "if_yes": true,
            "if_no": false
        }
    },
    "leadership_indicators": {
        "entity_conducted_life_cycle_perspective": [
            {
                "nic_code": "154278825",
                "name_of_the_product_or_service": "Dummy text",
                "percetage_of_total_turnover": 540000,
                "assesment_was_conducted": "Dummy text",
                "whether_conducted_by_independent_external_agency": true,
                "result_communucated_in_public_domain": "Dummy text",
                "url": "Dummy text"
            },
            {
                "nic_code": "154278825",
                "name_of_the_product_or_service": "Dummy text",
                "percetage_of_total_turnover": 540000,
                "assesment_was_conducted": "Dummy text",
                "whether_conducted_by_independent_external_agency": true,
                "result_communucated_in_public_domain": "Dummy text",
                "url": "Dummy text"
            }
        ],
        "significant_social_or_environmental_concerns": [
            {
                "name_of_the_product_or_service": "Dummy text",
                "description_of_the_risk": "Dummy text",
                "action_taken": "Dummy text"
            },
            {
                "name_of_the_product_or_service": "Dummy text",
                "description_of_the_risk": "Dummy text",
                "action_taken": "Dummy text"
            }
        ],
        "percentage_of_recycled_or_reused_input_material": [
            {
                "indicate_input_material": "Dummy text",
                "current_year": 2022,
                "previous_year": 2021
            }
        ],
        "products_and_packaging_reclaimed_at_end_of_life": {
            "current_financial_year": {
                "year": 2022,
                "plastic": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "e_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "hazardous_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "other_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "plastic": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "e_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "hazardous_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                },
                "other_waste": {
                    "re_used": "Dummy text",
                    "recycled": "Dummy text",
                    "safely_disposed": "Dummy text"
                }
            }
        },
        "reclaimed_products": [
            {
                "indicate_product_category": "Dummy text",
                "packaging_materials_as_percentage": 25
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post("/principal_two", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_two)

router.post("/staging_principal_two", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_two)


/**
 * @api {post} /api/form/principal_three Add Principal 3 form
 * @apiName Add Principal 3 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "a_details_of_measures_for_the_well_being_of_employees": {
            "percentage_of_employees_covered": {
                "permanent_employees": {
                    "male": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "female": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "total": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    }
                },
                "other_than_permanent_employees": {
                    "male": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "female": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "total": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    }
                }
            }
        },
        "b_details_of_measures_for_the_well_being_of_workers": {
            "percentage_of_employees_covered": {
                "permanent_workers": {
                    "male": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "female": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "total": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    }
                },
                "other_than_permanent_workers": {
                    "male": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "female": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    },
                    "total": {
                        "total_a": 50,
                        "health_insurance": {
                            "number_b": 15,
                            "percent_of_b_divided_by_a": 25
                        },
                        "accident_insurance": {
                            "number_c": 15,
                            "percent_of_c_divided_by_a": 25
                        },
                        "maternity_benifits": {
                            "number_d": 15,
                            "percent_of_d_divided_by_a": 25
                        },
                        "paternity_benifits": {
                            "number_e": 15,
                            "percent_of_e_divided_by_a": 25
                        },
                        "day_care_facilities": {
                            "number_f": 15,
                            "percent_of_f_divided_by_a": 25
                        }
                    }
                }
            }
        },
        "details_of_retirement_benefits": {
            "current_financial_year": {
                "year": 2022,
                "pf": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "gratutity": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "esi": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "others": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                }
            },
            "previous_financial_year": {
                "fy": 2021,
                "pf": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "gratutity": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "esi": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                },
                "others": {
                    "no_of_employees_covered_as_a_percentage_of_total_employees": 58,
                    "no_of_workers_covered_as_a_percentage_of_total_workers": 60,
                    "deducted_and_deposited_with_the_authority": "Dummy text"
                }
            }
        },
        "accessibility_of_workplaces": "Dummy text",
        "does_entity_have_an_equal_opportunity_policy": "Dummy text",
        "retention_rates_of_permanent_employees_and_workers": {
            "permanent_employees": {
                "male": {
                    "return_to_work_rate": 25,
                    "retention_rate": 45
                },
                "female": {
                    "return_to_work_rate": 25,
                    "retention_rate": 45
                },
                "total": {
                    "return_to_work_rate": 50,
                    "retention_rate": 90
                }
            },
            "permanent_workers": {
                "male": {
                    "return_to_work_rate": 25,
                    "retention_rate": 45
                },
                "female": {
                    "return_to_work_rate": 25,
                    "retention_rate": 45
                },
                "total": {
                    "return_to_work_rate": 50,
                    "retention_rate": 90
                }
            }
        },
        "mechanism_available_to_receive_and_redress_grievances": {
            "permanent_workers": "Dummy text",
            "other_than_permanent_workers": "Dummy text",
            "permanent_employees": "Dummy text",
            "other_than_permanent_employees": "Dummy text"
        },
        "membership_of_employees_and_worker_in_association": {
            "current_financial_year": {
                "year": 2022,
                "total_permanent_employees": {
                    "total_employee_category_a": 250,
                    "no_employee_or_workers_b": 150,
                    "percentage_b_divided_by_a": 52,
                    "male": {
                        "total_employee_category_a": 250,
                        "no_employee_or_workers_b": 150,
                        "percentage_b_divided_by_a": 52
                    },
                    "female": {
                        "total_employee_category_a": 250,
                        "no_employee_or_workers_b": 150,
                        "percentage_b_divided_by_a": 52
                    }
                },
                "total_permanent_workers": {
                    "total_employee_category_a": 250,
                    "no_employee_or_workers_b": 150,
                    "percentage_b_divided_by_a": 52,
                    "male": {
                        "total_employee_category_a": 250,
                        "no_employee_or_workers_b": 150,
                        "percentage_b_divided_by_a": 52
                    },
                    "female": {
                        "total_employee_category_a": 250,
                        "no_employee_or_workers_b": 150,
                        "percentage_b_divided_by_a": 52
                    }
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "total_permanent_employees": {
                    "total_employee_category_c": 250,
                    "no_employee_or_workers_d": 150,
                    "percentage_d_divided_by_c": 52,
                    "male": {
                        "total_employee_category_c": 250,
                        "no_employee_or_workers_d": 150,
                        "percentage_d_divided_by_c": 52
                    },
                    "female": {
                        "total_employee_category_c": 250,
                        "no_employee_or_workers_d": 150,
                        "percentage_d_divided_by_c": 52
                    }
                },
                "total_permanent_workers": {
                    "total_employee_category_c": 250,
                    "no_employee_or_workers_d": 150,
                    "percentage_d_divided_by_c": 52,
                    "male": {
                        "total_employee_category_c": 250,
                        "no_employee_or_workers_d": 150,
                        "percentage_d_divided_by_c": 52
                    },
                    "female": {
                        "total_employee_category_c": 250,
                        "no_employee_or_workers_d": 150,
                        "percentage_d_divided_by_c": 52
                    }
                }
            }
        },
        "details_of_training_given_to_employees_and_workers": {
            "current_financial_year": {
                "year": 2022,
                "employees": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                },
                "workers": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "employees": {
                    "total": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    },
                    "male": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    },
                    "female": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    }
                },
                "workers": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                }
            }
        },
        "details_of_performance_and_career_development_reviews_of_employees_and_worker": {
            "current_financial_year": {
                "year": 2022,
                "employees": {
                    "total_a": 258,
                    "no_b": 25,
                    "percentage_b_divided_by_a": 12,
                    "male": {
                        "total_a": 258,
                        "no_b": 25,
                        "percentage_b_divided_by_a": 12
                    },
                    "female": {
                        "total_a": 258,
                        "no_b": 25,
                        "percentage_b_divided_by_a": 12
                    }
                },
                "workers": {
                    "total_c": 258,
                    "no_d": 25,
                    "percentage_d_divided_by_c": 12,
                    "male": {
                        "total_c": 258,
                        "no_d": 25,
                        "percentage_d_divided_by_c": 12
                    },
                    "female": {
                        "total_c": 258,
                        "no_d": 25,
                        "percentage_d_divided_by_c": 12
                    }
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "employees": {
                    "total_a": 258,
                    "no_b": 25,
                    "percentage_b_divided_by_a": 12,
                    "male": {
                        "total_a": 258,
                        "no_b": 25,
                        "percentage_b_divided_by_a": 12
                    },
                    "female": {
                        "total_a": 258,
                        "no_b": 25,
                        "percentage_b_divided_by_a": 12
                    }
                },
                "workers": {
                    "total_c": 258,
                    "no_d": 25,
                    "percentage_d_divided_by_c": 12,
                    "male": {
                        "total_c": 258,
                        "no_d": 25,
                        "percentage_d_divided_by_c": 12
                    },
                    "female": {
                        "total_c": 258,
                        "no_d": 25,
                        "percentage_d_divided_by_c": 12
                    }
                }
            }
        },
        "health_and_safety_management_system": {
            "a": "Dummy text",
            "b": "Dummy text",
            "c": false,
            "d": true
        },
        "details_of_safety_related_incidents": {
            "safety_incident_number": {
                "ltifr": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "total_recordable_work_related_injuries": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "no_of_fatalities": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "high_consequence_work_related_injury": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                }
            }
        },
        "measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place": "Dummy text",
        "number_of_complaints": {
            "current_financial_year": {
                "year": 2022,
                "working_conditions": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                },
                "healthy_and_safety": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_year": {
                "year": 2022,
                "working_conditions": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                },
                "healthy_and_safety": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                }
            }
        },
        "assessment_of_the_year": {
            "health_and_safety_practices": {
                "percentage_of_your_plants": 84
            },
            "working_conditions": {
                "percentage_of_your_plants": 54
            }
        },
        "details_of_any_corrective_action_taken": "Dummy text"
    },
    "leadership_indicators": {
         "does_the_entity_extend_any_life_insurance_employees": "Dummy text",
         "does_the_entity_extend_any_life_insurance_workers": "Dummy text",
        "provide_the_measures_undertaken_by_the_entity": "Dummy text",
        "high_consequence_work_related_injury": {
            "total_number_of_affected_employees_or_workers": {
                "current_financial_year": {
                    "year": 2022,
                    "employees": 54,
                    "workers": 55
                },
                "previous_financial_year": {
                    "year": 2021,
                    "employees": 24,
                    "workers": 44
                }
            },
            "no_of_employees_or_workers_that_are_rehabilitated": {
                "current_financial_year": {
                    "year": 2022,
                    "employees": 54,
                    "workers": 55
                },
                "previous_financial_year": {
                    "year": 2021,
                    "employees": 24,
                    "workers": 44
                }
            }
        },
        "does_the_entity_provide_transition_assistance_programs": "Dummy text",
        "details_on_assessment_of_value_chain_partners": {
            "health_and_safety_practices": {
                "percentage_of_value_partners": "Dummy text"
            },
            "working_conditions": {
                "percentage_of_value_partners": "Dummy text"
            }
        },
        "details_of_any_corrective_actions_taken": "Dummy text"
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/principal_three', authorize([Role.Employeer, Role.Employee]), validateRequest, principal_three)

router.post('/staging_principal_three', authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_three)


/**
 * @api {post} /api/form/principal_four Add Principal 4 form
 * @apiName Add Principal 4 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity": "Dummy text",
        "list_stakeholder_groups": [
            {
                "stakeholder_group": "Dummy text",
                "whether_identified_as_vulnerable": "Dummy text",
                "channel_of_the_communication": "Dummy text",
                "frequency_of_the_engagement": "Annually",
                "purpose_and_scope_of_engagement_including_key": "Dummy text"
            },
            {
                "stakeholder_group": "Dummy text",
                "whether_identified_as_vulnerable": "Dummy text",
                "channel_of_the_communication": "Dummy text",
                "frequency_of_the_engagement": "Annually",
                "purpose_and_scope_of_engagement_including_key": "Dummy text"
            }
        ]
    },
    "leadership_indicators": {
        "provide_the_processes_for_consultation_between_stakeholders_and_the_board": "Dummy text",
        "whether_stakeholder_consultation_is_used_to_support_the_identification": "Dummy text",
        "provide_details_of_instances_of_engagement": "Dummy text"
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post("/principal_four", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_four)

router.post("/staging_principal_four", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_four),



/**
 * @api {post} /api/form/principal_five Add Principal 5 form
 * @apiName Add Principal 5 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "employees_and_workers_who_have_been_provided_training_on_human_rights": {
            "current_financial_year": {
                "employees": {
                    "permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "other_permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "total_employees": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    }
                },
                "workers": {
                    "permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "other_permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "total_workers": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    }
                }
            },
            "previous_financial_year": {
                "employees": {
                    "permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "other_permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "total_employees": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    }
                },
                "workers": {
                    "permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "other_permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "total_workers": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    }
                }
            }
        },
        "details_of_minimum_wages_paid_to_employees": {
            "current_financial_year": {
                "employees": {
                    "permanent_male": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "permanent_female": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "other_than_permanent_male": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "other_than_permanent_female": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    }
                },
                "workers": {
                    "permanent_male": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "permanent_female": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "other_than_permanent_male": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    },
                    "other_than_permanent_female": {
                        "total_a": 500,
                        "equal_to_minimum_wage_no_b": 25,
                        "equal_to_minimum_wage_no_b_divided_by_a": 58,
                        "more_than_minimum_wage_no_c": 46,
                        "more_than_minimum_wage_no_c_divided_by_a": 77
                    }
                }
            },
            "previous_financial_year": {
                "employees": {
                    "permanent_male": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "permanent_female": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "other_than_permanent_male": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "other_than_permanent_female": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    }
                },
                "workers": {
                    "permanent_male": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "permanent_female": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "other_than_permanent_male": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    },
                    "other_than_permanent_female": {
                        "total_d": 500,
                        "equal_to_minimum_wage_no_e": 25,
                        "equal_to_minimum_wage_no_e_divided_by_d": 58,
                        "more_than_minimum_wage_no_f": 46,
                        "more_than_minimum_wage_no_f_divided_by_d": 77
                    }
                }
            }
        },
        "details_of_remuneration": {
            "boards_of_directors": {
                "male": {
                    "number": 254,
                    "median_remuneration": 254
                },
                "female": {
                    "number": 254,
                    "median_remuneration": 254
                }
            },
            "key_managerial": {
                "male": {
                    "number": 254,
                    "median_remuneration": 254
                },
                "female": {
                    "number": 254,
                    "median_remuneration": 254
                }
            },
            "other_than_bod_and_kmp": {
                "male": {
                    "number": 254,
                    "median_remuneration": 254
                },
                "female": {
                    "number": 254,
                    "median_remuneration": 254
                }
            },
            "workers": {
                "male": {
                    "number": 254,
                    "median_remuneration": 254
                },
                "female": {
                    "number": 254,
                    "median_remuneration": 254
                }
            }
        },
        "do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business": true,
        "describe_the_internal_mechanisms_in_place_to_redress_grievances": "Dummy text",
        "number_of_complaints": {
            "current_financial_year": {
                "sexual_harassment": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "discrimination_at_workplace": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "child_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "forced_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "wages": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "others_human_rights_related_issued": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_year": {
                "sexual_harassment": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "discrimination_at_workplace": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "child_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "forced_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "wages": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "others_human_rights_related_issued": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                }
            }
        },
        "mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases": "Dummy text",
        "do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts": true,
        "assessments_for_the_year": {
            "child_labour_percentage_of_your_plants_and_offices": 12,
            "involuntary_labour_percentage_of_your_plants_and_offices": 25,
            "sexual_harassment_percentage_of_your_plants_and_offices": 22,
            "discrimination_at_workplace_percentage_of_your_plants_and_offices": 44,
            "wages_percentage_of_your_plants_and_offices": 10,
            "others_percentage_of_your_plants_and_offices": 0
        },
        "provide_details_of_any_corrective_actions_taken": "Dummy text"
    },
    "leadership_indicators": {
        "details_of_a_business_process_being_modified": "Dummy text",
        "details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted": "Dummy text",
        "is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors": "Dummy text",
        "details_on_assessment_of_value_chain_partners": {
            "sexual_harassment_percentage_of_value_chain_partners": 45,
            "discrimination_at_workplace_percentage_of_value_chain_partners": 20,
            "child_labour_percentage_of_value_chain_partners": 14,
            "involuntary_labour_percentage_of_value_chain_partners": 21,
            "wages_percentage_of_value_chain_partners": 44,
            "others_percentage_of_value_chain_partners": 0
        },
        "provide_details_of_any_corrective_actions_taken": "Dummy text"
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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
router.post("/principal_five", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_five)

router.post("/staging_principal_five", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_five)

/**
 * @api {post} /api/form/principal_six Add Principal 6 form
 * @apiName Add Principal 6 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    company_id: "c385b73a2efcb4f46eaabc51be083989",
    details_of_total_energy_consumption: {
      current_year: this._utilities.selectedFinancialYear,
      previous_year: this._utilities.previousFinancialYear,
      total_electricity_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_fuel_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_consumption_through_other_sources: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_energy_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_intensity_per_rupee: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      energy_intensity_optional: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    },
    indicate_if_any_independent_assessment_essential_1: "Yes",
    independent_assessment_agency_name_essential_1: "",
    is_dcs: true,
    targets_under_pat_achieved: false,
    remedial_action_taken: "",
    details_of_following_disclosures_related_to_water: {
      current_year: this._utilities.selectedFinancialYear,
      previous_year: this._utilities.previousFinancialYear,
      surface_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      groundwater: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      third_party_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      desalinated_water: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      others: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_volume_of_water_withdrawal: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      total_volume_of_water_consumption: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity_per_rupee: {
        current_financial_year: "",
        previous_financial_year: "",
      },
      water_intensity_optional: {
        current_financial_year: "",
        previous_financial_year: "",
      },
    },
    indicate_if_any_independent_assessment_essential_3: "Yes",
    independent_assessment_agency_name_essential_3: "",
    mechanism_for_zero_liquid_discharge: true,
    mechanism_for_zero_liquid_discharge_details: "",
    details_of_air_emissions: {
      nox: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      sox: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      pm: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      pop: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      voc: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      hap: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      other: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_essential_5: "Yes",
    independent_assessment_agency_name_essential_5: "",
    details_of_greenhouse_gas_emissions: {
      total_scope_1_emissions: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_scope_2_emissions: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_scope_1_2_emissions_per_rupee_of_turnover: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_scope_1_2_emissions_intensity: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_essential_6: "Yes",
    independent_assessment_agency_name_essential_6: "",
    related_to_reducing_green_house_gas_emission: true,
    related_to_reducing_green_house_gas_emission_details: "",
    details_related_to_waste_management: {
      plastic_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      e_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      bio_medical_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      construction_and_demolition_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      battery_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      radioactive_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      other_hazardous_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      other_non_hazardous_waste: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      recycled: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      re_used: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      other_recovery_operations: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      incineration: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      landfilling: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      other_disposal_operations: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_essential_8: "Yes",
    indicate_if_any_independent_assessment_name_essential_8: "",
    waste_management_practices_adopted: "",
    ecologically_sensitive_areas: [
      {
        office_location: "",
        types_of_operation: "",
        is_environmental_approval: true,
        details: "",
      },
    ],
    details_of_environmental_impact_assessments: [
      {
        project_detail: "",
        eia: "",
        date: "",
        conducted_by_independent_external_agency: true,
        communicated_in_public_domain: true,
        web_link: "",
      },
    ],
    is_entity_compliant_with_the_applicable_environmental_law: true,
    non_compliances_details: [
      {
        guidelines_which_was_not_complied: "",
        details_of_the_non_compliance: "",
        action_taken_by_regulatory_agencies: "",
        corrective_action_taken: "",
      },
    ],
    energy_consumed_from_renewable_and_non_renewable_sources: {
      renewable_total_electricity_consumption: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      renewable_total_fuel_consumption: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      renewable_energy_consumption_through_other_sources: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      non_renewable_total_electricity_consumption: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      non_renewable_total_fuel_consumption: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      non_renewable_energy_consumption_through_other_sources: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_leader_1: "Yes",
    indicate_if_any_independent_assessment_name_leader_1: "",
    details_related_to_water_discharged: {
      surface_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      surface_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      ground_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      ground_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      sea_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      sea_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      third_parties_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      third_parties_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      others_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      others_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_leader_2: "Yes",
    indicate_if_any_independent_assessment_name_leader_2: "",
    water_withdrawal_in_areas_of_water_stress: {
      name_of_area: "",
      nature_of_operations: "",
      water_withdrawal_surface_water: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_withdrawal_ground_water: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_withdrawal_third_party_water: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_withdrawal_sea_water: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_withdrawal_others_water: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_volume_of_water_consumption: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_intensity_per_rupee_of_turnover: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      water_intensity: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      surface_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      surface_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      ground_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      ground_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      sea_water_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      sea_water_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      third_parties_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      third_parties_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      others_no_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      others_with_treatment: {
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_leader_3: "Yes",
    indicate_if_any_independent_assessment_name_leader_3: "",
    details_of_total_Scope_3_emissions: {
      total_scope_3_emissions: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_scope_3_emissions_per_rupee_of_turnover: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
      total_scope_3_emissions_intensity: {
        unit: 0,
        current_financial_year: 0,
        previous_financial_year: 0,
      },
    },
    indicate_if_any_independent_assessment_leader_4: "Yes",
    indicate_if_any_independent_assessment_name_leader_4: "",
    details_of_significant_direct_indirect_impact_on_biodiversity: "",
    used_innovative_technology: [
      {
        initiative_undertaken: "",
        details_of_the_initiative: "",
        web_link: "",
        outcome_of_the_initiative: "",
      },
    ],
    business_continuity_and_disaster_management_plan: "",
    business_continuity_and_disaster_management_plan_web_link: "",
    significant_adverse_impact_to_the_environment: "",
    percentage_of_value_chain_partners: "",
  }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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



router.post("/principal_six", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_six)

router.post("/staging_principal_six", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_six)


/**
 * @api {post} /api/form/principal_seven Add Principal 7 form
 * @apiName Add Principal 7 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "one_a_number_of_affiliations_with_trade_and_industry_chambers_associations": "Dummy text",
        "one_b_list_the_top_10_trade_and_industry_chambers": [
            {
                "name_of_the_trade_and_industry_chambers_associations": "Dummy text",
                "reach_of_trade_and_industry_chambers_associations_state_national": "Dummy text"
            },
            {
                "name_of_the_trade_and_industry_chambers_associations": "Dummy text",
                "reach_of_trade_and_industry_chambers_associations_state_national": "Dummy text"
            },
            {
                "name_of_the_trade_and_industry_chambers_associations": "Dummy text",
                "reach_of_trade_and_industry_chambers_associations_state_national": "Dummy text"
            }
        ],
        "two_provide_details_of_corrective_action_taken_or_underway_on_any_issues": [
            {
                "name_of_authority": "Dummy text",
                "brief_of_the_case": "Dummy text",
                "corrective_action_taken": "Dummy text"
            },
            {
                "name_of_authority": "Dummy text",
                "brief_of_the_case": "Dummy text",
                "corrective_action_taken": "Dummy text"
            }
        ]
    },
    "leadership_indicators": {
        "details_of_public_policy_positions_advocated_by_the_entity": [
            {
                "public_policy_advocated": "Dummy text",
                "method_resorted_for_such_advocacy": "Dummy text",
                "whether_information_available_in_public": true,
                "frequency_of_review_by_board": "Dummy text",
                "web_link": "http://dummyurl.com"
            },
            {
                "public_policy_advocated": "Dummy text",
                "method_resorted_for_such_advocacy": "Dummy text",
                "whether_information_available_in_public": true,
                "frequency_of_review_by_board": "Dummy text",
                "web_link": "http://dummyurl.com"
            },
            {
                "public_policy_advocated": "Dummy text",
                "method_resorted_for_such_advocacy": "Dummy text",
                "whether_information_available_in_public": true,
                "frequency_of_review_by_board": "Dummy text",
                "web_link": "http://dummyurl.com"
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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
router.post("/principal_seven", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_seven)

router.post("/staging_principal_seven", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_seven)

/**
 * @api {post} /api/form/principal_eight Add Principal 8 form
 * @apiName Add Principal 8 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "sia": [
            {
                "name_and_breif_details_of_project": "Dummy text",
                "sia_notification_no": "Dummy text",
                "date_of_notofication": "Dummy text",
                "whether_conducted_by_independent_external_agency": true,
                "results_communicated_in_public_domain": false,
                "weh_url": "Dummy text"
            },
            {
                "name_and_breif_details_of_project": "Dummy text",
                "sia_notification_no": "Dummy text",
                "date_of_notofication": "Dummy text",
                "whether_conducted_by_independent_external_agency": true,
                "results_communicated_in_public_domain": false,
                "weh_url": "Dummy text"
            }
        ],
        "r_and_r": [
            {
                "name_of_project_for_which_r_and_r_is_going": "Dummy text",
                "state": "Dummy text",
                "district": "Dummy text",
                "no_of_project_affected": 12,
                "percentage_of_pafs": 25,
                "amounts_paid_to_pafs_in_inr": 25450
            },
            {
                "name_of_project_for_which_r_and_r_is_going": "Dummy text",
                "state": "Dummy text",
                "district": "Dummy text",
                "no_of_project_affected": 12,
                "percentage_of_pafs": 25,
                "amounts_paid_to_pafs_in_inr": 25450
            }
        ],
        "describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community": "Dummy text",
        "percentage_of_input_material": {
            "current_financial_year": {
                "year": 2022,
                "directly_sourced_from_msmes": 254,
                "sourced_directly_from_within_the_district_and_neighbouring_districts": 150
            },
            "previous_financial_year": {
                "year": 2021,
                "directly_sourced_from_msmes": 254,
                "sourced_directly_from_within_the_district_and_neighbouring_districts": 150
            }
        }
    },
    "leadership_indicators": {
        "provide_details_of_actions_taken_to_mitigate": [
            {
                "details_of_negative_social_impact_identified": "Dummy text",
                "corrective_action_taken": "Dummy text"
            },
            {
                "details_of_negative_social_impact_identified": "Dummy text",
                "corrective_action_taken": "Dummy text"
            }
        ],
        "provide_the_following_information_on_csr_projects": [
            {
                "state": "Dummy text",
                "aspirational_district": "Dummy text",
                "amount_spent_in_inr": 2500
            },
            {
                "state": "Dummy text",
                "aspirational_district": "Dummy text",
                "amount_spent_in_inr": 2500
            }
        ],
        "three_a": false,
        "three_b": "Dummy text",
        "three_c": "Dummy text",
        "details_of_the_benefits_derived_and_shared_from_the_intellectual_properties": [
            {
                "intellectual_property_based_on_traditional_knowledge": "Dummy text",
                "owned_acquired": false,
                "benefit_shared": true,
                "basis_of_calculating_benefit_share": "Dummy text"
            },
            {
                "intellectual_property_based_on_traditional_knowledge": "Dummy text",
                "owned_acquired": false,
                "benefit_shared": true,
                "basis_of_calculating_benefit_share": "Dummy text"
            }
        ],
        "details_of_corrective_actions_taken_or_underway_based_on_any_adverse": [
            {
                "name_of_authority": "Dummy text",
                "brief_of_the_case": "Dummy text",
                "corrective_action_taken": "Dummy text"
            },
            {
                "name_of_authority": "Dummy text",
                "brief_of_the_case": "Dummy text",
                "corrective_action_taken": "Dummy text"
            }
        ],
        "details_of_beneficiaries_of_csr_projects": [
            {
                "csr_project": "Dummy text",
                "no_of_persons_benefitted_from_csr_project": 250,
                "percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups": "Dummy text"
            },
            {
                "csr_project": "Dummy text",
                "no_of_persons_benefitted_from_csr_project": 250,
                "percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups": "Dummy text"
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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
router.post("/principal_eight", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_eight)

router.post("/staging_principal_eight", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_eight)

/**
 * @api {post} /api/form/principal_nine Add Principal 9 form
 * @apiName Add Principal 9 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * 
 * @apiParamExample {json} Request-Example:
 *    {
 * "financial_start_date": "2020-01-01",
    "financial_end_date": "2021-12-31",
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "essential_indicators": {
        "describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback": "Dummy text",
        "turnover_of_products_and_services": {
            "percentage_to_total_turnover": {
                "environmental_and_social_parameters_relevant_to_the_product": 20,
                "safe_and_responsible_usage": 25,
                "recycling_and_or_safe_disposa": 250
            }
        },
        "number_of_consumer_complaints_in_respect": {
            "current_financial_year": {
                "year": 2022,
                "data_privacy": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "advertising": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "cyber_security": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "delivery_of_essential_services": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "restrictive_trade_practices": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "unfair_trade_practices": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "other": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "data_privacy": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "advertising": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "cyber_security": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "delivery_of_essential_services": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "restrictive_trade_practices": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "unfair_trade_practices": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                },
                "other": {
                    "received_during_the_year": 20,
                    "pending_resolution_at_end_of_year": 45,
                    "remarks": "Dummy text"
                }
            }
        },
        "details_of_instances_of_product_recalls_on_account_of_safety_issues": {
            "voluntary_recalls": {
                "number": 45,
                "reason_for_recall": "Dummy text"
            },
            "forced_recalls": {
                "number": 45,
                "reason_for_recall": "Dummy text"
            }
        },
        "does_the_entity_have_a_framework_policy_boolean": true,
        "does_the_entity_have_a_framework_policy": "Dummy text",
        "provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating": "Dummy text"
    },
    "leadership_indicators": {
        "channels_or_platforms_where_information": "Dummy text",
        "steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible": "Dummy text",
        "mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services": "Dummy text",
        "does_the_entity_display_product_information_on_the_product_over": "Dummy text",
        "does_the_entity_display_product_information_on_the_product_over_brief": "Dummy text",
        "does_the_entity_display_product_information_on_the_product_over_survey": true,
        "five_a_number_of_instances_of_data_breaches_along_with_impact": "Dummy text",
        "five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer": "Dummy text"
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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
router.post("/principal_nine", authorize([Role.Employeer, Role.Employee]), validateRequest, principal_nine)

router.post("/staging_principal_nine", authorize([Role.Employeer, Role.Employee]), validateRequest, staging_principal_nine)


/**
 * @api {get} /api/form Get form
 * @apiName Get form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} form_type form_type of the Principal.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "form_type": "principal_two"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data principal_one",
    "data": {
        "_id": "630ef17fe593bdcbc5c240ac",
        "financial_start_date": "2020-01-01",
        "financial_end_date": "2021-12-31",
        "company_id": "c385b73a2efcb4f46eaabc51be083989",
        "essential_indicators": {
            "principles_during_the_financial_year": {
                "segment_board_of_director": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 28
                },
                "key_managerial_personnel": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 28
                },
                "employees_other_than_bod_and_kmps": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 28
                }
            },
            "details_of_fines_penalties": {
                "monetary": {
                    "penality": {
                        "ngrbc_principal": "Dummy text",
                        "name_of_the_regulatory": "Dummy text",
                        "amount_in_inr": 240000.85,
                        "brief_of_the_case": "Dummy text",
                        "has_an_appeal_been_preferred": true
                    },
                    "settlement": {
                        "ngrbc_principal": "Dummy text",
                        "name_of_the_regulatory": "Dummy text",
                        "amount_in_inr": 240000.85,
                        "brief_of_the_case": "Dummy text",
                        "has_an_appeal_been_preferred": true
                    },
                    "compounding_fee": {
                        "ngrbc_principal": "Dummy text",
                        "name_of_the_regulatory": "Dummy text",
                        "amount_in_inr": 240000.85,
                        "brief_of_the_case": "Dummy text",
                        "has_an_appeal_been_preferred": true
                    }
                },
                "non_monetary": {
                    "imprisonment": {
                        "ngrbc_principal": "Dummy text",
                        "name_of_the_regulatory": "Dummy text",
                        "amount_in_inr": 240000.85,
                        "brief_of_the_case": "Dummy text",
                        "has_an_appeal_been_preferred": true
                    },
                    "punishment": {
                        "ngrbc_principal": "Dummy text",
                        "name_of_the_regulatory": "Dummy text",
                        "amount_in_inr": 240000.85,
                        "brief_of_the_case": "Dummy text",
                        "has_an_appeal_been_preferred": true
                    }
                }
            },
            "monetary_or_non_monetary_action_appealed": [
                {
                    "case_details": "Dummy text",
                    "judicial_institutions": "Dummy text"
                },
                {
                    "case_details": "Dummy text",
                    "judicial_institutions": "Dummy text"
                }
            ],
            "anti_corruption_or_anti_bribery_policy_boolean": true,
            "anti_corruption_or_anti_bribery_policy": "Dummy text",
            "number_of_directors": {
                "current_financial_yr": {
                    "year": "2020-2021",
                    "directors": 2,
                    "kmps": 0,
                    "employees": 1250,
                    "workers": 1800
                },
                "previous_financial_yr": {
                    "year": "2020-2021",
                    "directors": 1,
                    "kmps": 0,
                    "employees": 1150,
                    "workers": 1500
                }
            },
            "details_of_complaints": {
                "current_financial_yr": {
                    "year": "2020-2021",
                    "number_of_complaints_received_of_conflict_of_interes_of_the_directors": {
                        "numbers": 5,
                        "remarks": "Dummy text"
                    },
                    "number_of_complaints_received_of_conflict_of_interes_of_the_kmps": {
                        "numbers": 5,
                        "remarks": "Dummy text"
                    }
                },
                "previous_financial_yr": {
                    "year": "2020-2021",
                    "number_of_complaints_received_of_conflict_of_interes_of_the_directors": {
                        "numbers": 5,
                        "remarks": "Dummy text"
                    },
                    "number_of_complaints_received_of_conflict_of_interes_of_the_kmps": {
                        "numbers": 5,
                        "remarks": "Dummy text"
                    }
                }
            },
            "provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines": "Dummy text"
        },
        "leadership_indicators": {
            "awareness_programmes_conducted": [
                {
                    "total_number_of_awareness_programmes_held": 55,
                    "principles_covered_under_the_training": "Dummy text",
                    "percetage_of_age": 54
                }
            ],
            "manage_conflict_of_interests_involving_members_of_the_board": "Dummy text"
        },
        "update_at": "2022-08-31 05:28:31"
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
 *     HTTP/1.1 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found"
      }
 * 
 * 
 */
router.get("/", authorize([Role.Employeer, Role.Employee]), validateRequest, get_principal_form)



/**
 * @api {get} /api/form/get_form_month_and_year_wise Get form month and year wise
 * @apiName Get form month and year wise
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} form_type form_type of the Principal.
 * @apiParam {String} month month of the data.
 * @apiParam {String} year year of the data.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "form_type": "principal_two",
    "month": 9,
    "year": 2022
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data company_master",
    "data": {
        "_id": "6321d8cb236ea22a3696dc9c",
        "contact_number": [
            "8989889898",
            "8980898979",
            "2321235674"
        ],
        "website_url": [
            "test.com",
            "yskk.com"
        ],
        "contact_details": [
            {
                "contact_person": "ddffd",
                "contact_number": [
                    "1234567890",
                    "6116181871",
                    "1817191719"
                ]
            },
            {
                "contact_person": "fddf",
                "contact_number": [
                    "2234567656"
                ]
            }
        ],
        "corporate_identity_number": "companycheck2",
        "company_name": "TEST CHECK COMP",
        "registered_office_address": "dddfff",
        "corporate_office_address": "bggfgfgfg",
        "financial_year": "89aj",
        "stock_exchange_name": "yahhsa ",
        "paid_up_capital": 99,
        "reporting_boundary": "jhskmk",
        "emai_id": "test@rdd.com",
        "ii_products_and_services": {
            "business_activity": [
                {
                    "description_of_main_activity": "tytag",
                    "business_activity_description": "ytyuahg",
                    "total_turnover_percentage": 88
                }
            ],
            "products_services_sold_by_the_entity": [
                {
                    "product_or_service": "hhj",
                    "nic_code": "jhjh",
                    "total_turnover_percentage": 878
                }
            ]
        },
        "iii_operations": {
            "location": {
                "national_operations": {
                    "number_of_plants": 4,
                    "number_of_office": 5
                },
                "international_operations": {
                    "number_of_plants": 3,
                    "number_of_office": 2
                }
            }
        },
        "iv_employees": {
            "financial_year": {
                "employees_and_worker": {
                    "employees": {
                        "permanent_d": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
                            }
                        },
                        "other_than_permanent_e": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
                            }
                        }
                    },
                    "workers": {}
                },
                "diffrently_added_employees_and_worker": {
                    "added_employees": {
                        "permanent_d": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
                            }
                        },
                        "other_than_permanent_e": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
                            }
                        }
                    },
                    "added_workers": {
                        "permanent_f": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
                            }
                        },
                        "other_than_permanent_g": {
                            "total": null,
                            "male": {
                                "no_a": null,
                                "no_b_a": null
                            },
                            "female": {
                                "no_c": null,
                                "no_c_a": null
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
                        "fy_year": "2021-2022",
                        "female": null,
                        "male": null,
                        "total": null
                    },
                    "second_year": {
                        "fy_year": "2020-2021",
                        "female": null,
                        "male": null,
                        "total": null
                    },
                    "third_year": {
                        "fy_year": "2019-2020",
                        "female": null,
                        "male": null,
                        "total": null
                    }
                },
                "permanent_workers": {
                    "first_year": {
                        "fy_year": "2021-2022",
                        "female": null,
                        "male": null,
                        "total": null
                    },
                    "second_year": {
                        "fy_year": "2020-2021",
                        "female": null,
                        "male": null,
                        "total": null
                    },
                    "third_year": {
                        "fy_year": "2019-2020",
                        "female": null,
                        "male": null,
                        "total": null
                    }
                }
            }
        },
        "v_associate_companies": [
            {
                "name_of_holding_or_associate_companies": "test",
                "indicate_whether_holding_or_subsidiary_or_associate_joint_venture": "tedd",
                "percentage_of_shares_held_by_listed_entity": 33,
                "does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity": false
            }
        ],
        "vi_csr_details": {
            "is_csr_applicable": false,
            "turnover_in_rs": 2,
            "net_worth": 12
        },
        "vii_transparency_and_disclosures_ompliances": {
            "national_guidelines_on_responsible_business_conduct": {
                "stakeholder_group": {
                    "communities": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "investors": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "shareholders": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "employee_and_workers": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "customers": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "value_chain_partner": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    },
                    "others": {
                        "grievance_redressal_mechanism_in_place": null,
                        "current_fy": {
                            "year": "2021-2022",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        },
                        "previous_fy": {
                            "year": "2020-2021",
                            "number_of_complaints": null,
                            "number_of_complaints_pending_resolution_at_close": null,
                            "remarks": null
                        }
                    }
                }
            },
            "business_conduct_issues": null
        },
        "financial_start_date": "2021-01-01",
        "financial_end_date": "2022-01-01",
        "update_at": "2022-09-14 13:36:11",
        "company_id": "0c934303dddeab684878de684bea9a05",
        "db_name": "0c934303_TCC_DB",
        "owner": "62fc09c93bebb404056609d6"
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
 *     HTTP/1.1 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found"
      }
 * 
 * 
 */
router.get("/get_form_month_and_year_wise", authorize([Role.Employeer, Role.Employee]), validateRequest, get_form_month_and_year_wise)



// =========================================================================
                    // New Form Section
// =========================================================================



/**
 * @api {post} /api/form/monthly_survey_principal_one Add Monthly Survey Principal 1 form
 * @apiName Add Monthly Survey Principal 1 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "principles_during_the_financial_year": {
            "segment_board_of_director": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 10
            },
            "key_managerial_personnel": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 12
            },
            "employees_other_than_bod_and_kmps": {
                "total_number_of_training": 25,
                "topics": "Dummy text",
                "percentage_of_person": 9
            },
            "workers": {
                "total_number_of_training": 0,
                "topics": "",
                "percentage_of_person": 0
            }
        }
    },
    "leadership_indicators": {
        "awareness_programmes_conducted": [
            {
                "total_number_of_awareness_programmes_held": 55,
                "principles_covered_under_the_training": "Dummy text",
                "percetage_of_age": 54
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_one', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_one)



/**
 * @api {post} /api/form/monthly_survey_principal_two Add Monthly Survey Principal 2 form
 * @apiName Add Monthly Survey Principal 2 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "one_capital_expenditure": {
            "r_and_d": {
                "amount_per_month_in_rs": 1200,
                "details_of_improvements": "Dummy text"
            },
            "capex": {
                "amount_per_month_in_rs": 200,
                "details_of_improvements": "Dummy text"
            }
        },
        "products_and_packaging_reclaimed_at_end_of_life": {
            "plastic": {
                "re_used": 10,
                "recycled": 10,
                "safely_disposed": 10
            },
            "e_waste": {
                "re_used": 10,
                "recycled": 10,
                "safely_disposed": 10
            },
            "hazardous_waste": {
                "re_used": 10,
                "recycled": 10,
                "safely_disposed": 10
            },
            "other_waste": {
                "re_used": 10,
                "recycled": 10,
                "safely_disposed": 10
            }
        }
    },
    "leadership_indicators": {
        "percentage_of_recycled_or_reused_input_material": [
            {
                "indicate_input_material": "Dummy text",
                "monthly_percentage": 10
            }
        ],
        "reclaimed_products": [
            {
                "indicate_product_category": "Dummy text",
                "reclaimed_packaging_materials_as_percentage": 25
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_two', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_two)

/**
 * @api {post} /api/form/monthly_survey_principal_three Add Monthly Survey Principal 3 form
 * @apiName Add Monthly Survey Principal 3 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "details_of_training_given_to_employees_and_workers": {
            "current_financial_year": {
                "year": 2022,
                "employees": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                },
                "workers": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                }
            },
            "previous_financial_year": {
                "year": 2021,
                "employees": {
                    "total": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    },
                    "male": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    },
                    "female": {
                        "total_d": 258,
                        "on_health_and_safety_measures": {
                            "no_e": 25,
                            "percentage_e_divided_by_d": 12
                        },
                        "on_skill_upgrade": {
                            "no_f": 58,
                            "percentage_f_divided_by_d": 65
                        }
                    }
                },
                "workers": {
                    "total": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "male": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    },
                    "female": {
                        "total_a": 258,
                        "on_health_and_safety_measures": {
                            "no_b": 25,
                            "percentage_b_divided_by_a": 12
                        },
                        "on_skill_upgrade": {
                            "no_c": 58,
                            "percentage_c_divided_by_a": 65
                        }
                    }
                }
            }
        },
        "details_of_safety_related_incidents": {
            "safety_incident_number": {
                "ltifr": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "total_recordable_work_related_injuries": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "no_of_fatalities": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                },
                "high_consequence_work_related_injury": {
                    "employees": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    },
                    "workers": {
                        "current_financial_year": {
                            "year": 2022,
                            "numbers": 25
                        },
                        "previous_financial_year": {
                            "year": 2021,
                            "numbers": 54
                        }
                    }
                }
            }
        },
        "number_of_complaints": {
            "current_financial_year": {
                "year": 2022,
                "working_conditions": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                },
                "healthy_and_safety": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_year": {
                "year": 2022,
                "working_conditions": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                },
                "healthy_and_safety": {
                    "filed_during_the_year": 550,
                    "pending_resolution_at_the_year_end": 250,
                    "remarks": "Dummy text"
                }
            }
        }
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_three', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_three)


/**
 * @api {post} /api/form/monthly_survey_principal_four Add Monthly Survey Principal 4 form
 * @apiName Add Monthly Survey Principal 4 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "list_stakeholder_groups": [
            {
                "stakeholder_group": "Dummy text",
                "whether_identified_as_vulnerable": "Dummy text",
                "channel_of_the_communication": "Dummy text",
                "frequency_of_the_engagement": "Annually",
                "purpose_and_scope_of_engagement_including_key": "Dummy text"
            },
            {
                "stakeholder_group": "Dummy text",
                "whether_identified_as_vulnerable": "Dummy text",
                "channel_of_the_communication": "Dummy text",
                "frequency_of_the_engagement": "Annually",
                "purpose_and_scope_of_engagement_including_key": "Dummy text"
            }
        ]
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_four', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_four)



/**
 * @api {post} /api/form/monthly_survey_principal_five Add Monthly Survey Principal 5 form
 * @apiName Add Monthly Survey Principal 5 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "employees_and_workers_who_have_been_provided_training_on_human_rights": {
            "current_financial_year": {
                "employees": {
                    "permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "other_permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "total_employees": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    }
                },
                "workers": {
                    "permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "other_permanent": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    },
                    "total_workers": {
                        "total_a": 250,
                        "no_of_employees_or_workers_b": 2500,
                        "percentage_b_divided_by_a": 10
                    }
                }
            },
            "previous_financial_year": {
                "employees": {
                    "permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "other_permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "total_employees": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    }
                },
                "workers": {
                    "permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "other_permanent": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    },
                    "total_workers": {
                        "total_c": 250,
                        "no_of_employees_or_workers_d": 2500,
                        "percentage_d_divided_by_c": 10
                    }
                }
            }
        },
        "number_of_complaints": {
            "current_financial_year": {
                "sexual_harassment": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "discrimination_at_workplace": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "child_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "forced_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "wages": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "others_human_rights_related_issued": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                }
            },
            "previous_financial_year": {
                "sexual_harassment": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "discrimination_at_workplace": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "child_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "forced_labour": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "wages": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                },
                "others_human_rights_related_issued": {
                    "filed_during_the_year": 250,
                    "pending_resolution_at_the_end_of_year": 50,
                    "remarks": "Dummy text"
                }
            }
        },
        "assessments_for_the_year": {
            "child_labour_percentage_of_your_plants_and_offices": 12,
            "involuntary_labour_percentage_of_your_plants_and_offices": 25,
            "sexual_harassment_percentage_of_your_plants_and_offices": 22,
            "discrimination_at_workplace_percentage_of_your_plants_and_offices": 44,
            "wages_percentage_of_your_plants_and_offices": 10,
            "others_percentage_of_your_plants_and_offices": 0
        }
    }
}
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_five', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_five)



/**
 * @api {post} /api/form/monthly_survey_principal_six Add Monthly Survey Principal 6 form
 * @apiName Add Monthly Survey Principal 6 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "details_of_total_energy_consumption": {
            "current_year": "2021-2022",
            "previous_year": "2020-2021",
            "total_electricity_consumption": {
                "current_financial_year": 45678,
                "previous_financial_year": 4567
            },
            "total_fuel_consumption": {
                "current_financial_year": 4567,
                "previous_financial_year": 45678
            },
            "energy_consumption_through_other_sources": {
                "current_financial_year": 5678,
                "previous_financial_year": 45678
            },
            "total_energy_consumption": {
                "current_financial_year": 55923,
                "previous_financial_year": 95923
            },
            "energy_intensity_per_rupee": {
                "current_financial_year": 4567,
                "previous_financial_year": 567
            },
            "energy_intensity_optional": {
                "current_financial_year": 3456,
                "previous_financial_year": 4567
            }
        },
        "details_of_following_disclosures_related_to_water": {
            "current_year": "2021-2022",
            "previous_year": "2020-2021",
            "surface_water": {
                "current_financial_year": 4567,
                "previous_financial_year": 4657
            },
            "groundwater": {
                "current_financial_year": 657,
                "previous_financial_year": 6578
            },
            "third_party_water": {
                "current_financial_year": 678,
                "previous_financial_year": 4657
            },
            "desalinated_water": {
                "current_financial_year": 8976,
                "previous_financial_year": 67887
            },
            "others": {
                "current_financial_year": 6567,
                "previous_financial_year": 87656
            },
            "total_volume_of_water_withdrawal": {
                "current_financial_year": 21445,
                "previous_financial_year": 171435
            },
            "total_volume_of_water_consumption": {
                "current_financial_year": 567,
                "previous_financial_year": 675
            },
            "water_intensity_per_rupee": {
                "current_financial_year": 56778,
                "previous_financial_year": 6567
            },
            "water_intensity_optional": {
                "current_financial_year": 786,
                "previous_financial_year": 568
            }
        },
        "details_of_air_emissions": {
            "nox": {
                "unit": "456",
                "current_financial_year": 675,
                "previous_financial_year": 567
            },
            "sox": {
                "unit": "56",
                "current_financial_year": 567,
                "previous_financial_year": 76
            },
            "pm": {
                "unit": "456876",
                "current_financial_year": 45676,
                "previous_financial_year": 456778
            },
            "pop": {
                "unit": "6456",
                "current_financial_year": 76456,
                "previous_financial_year": 6756
            },
            "voc": {
                "unit": "7656",
                "current_financial_year": 6756,
                "previous_financial_year": 6756
            },
            "hap": {
                "unit": "67565",
                "current_financial_year": 67,
                "previous_financial_year": 6578
            },
            "other": {
                "unit": "6567",
                "current_financial_year": 5667,
                "previous_financial_year": 5676
            }
        },
        "details_of_greenhouse_gas_emissions": {
            "total_scope_1_emissions": {
                "unit": "45",
                "current_financial_year": 546,
                "previous_financial_year": 54
            },
            "total_scope_2_emissions": {
                "unit": "43",
                "current_financial_year": 45,
                "previous_financial_year": 65
            },
            "total_scope_1_2_emissions_per_rupee_of_turnover": {
                "unit": "465",
                "current_financial_year": 456,
                "previous_financial_year": 45
            },
            "total_scope_1_2_emissions_intensity": {
                "unit": "43",
                "current_financial_year": 67,
                "previous_financial_year": 8
            }
        },
        "details_related_to_waste_management": {
            "plastic_waste": {
                "current_financial_year": 54,
                "previous_financial_year": 56
            },
            "e_waste": {
                "current_financial_year": 23,
                "previous_financial_year": 65
            },
            "bio_medical_waste": {
                "current_financial_year": 23,
                "previous_financial_year": 65
            },
            "construction_and_demolition_waste": {
                "current_financial_year": 134,
                "previous_financial_year": 65
            },
            "battery_waste": {
                "current_financial_year": 43,
                "previous_financial_year": 65
            },
            "radioactive_waste": {
                "current_financial_year": 32,
                "previous_financial_year": 45
            },
            "other_hazardous_waste": {
                "current_financial_year": 24,
                "previous_financial_year": 65
            },
            "other_non_hazardous_waste": {
                "current_financial_year": 314,
                "previous_financial_year": 54
            },
            "recycled": {
                "current_financial_year": 345,
                "previous_financial_year": 45
            },
            "re_used": {
                "current_financial_year": 54,
                "previous_financial_year": 5
            },
            "other_recovery_operations": {
                "current_financial_year": 43,
                "previous_financial_year": 54
            },
            "incineration": {
                "current_financial_year": 3,
                "previous_financial_year": 54
            },
            "landfilling": {
                "current_financial_year": 43,
                "previous_financial_year": 53
            },
            "other_disposal_operations": {
                "current_financial_year": 43,
                "previous_financial_year": 45
            }
        }
    },
    "leadership_indicators": {
        "energy_consumed_from_renewable_and_non_renewable_sources": {
            "renewable_total_electricity_consumption": {
                "current_financial_year": 3456,
                "previous_financial_year": 546
            },
            "renewable_total_fuel_consumption": {
                "current_financial_year": 43,
                "previous_financial_year": 54
            },
            "renewable_energy_consumption_through_other_sources": {
                "current_financial_year": 565,
                "previous_financial_year": 767
            },
            "non_renewable_total_electricity_consumption": {
                "current_financial_year": 434,
                "previous_financial_year": 545
            },
            "non_renewable_total_fuel_consumption": {
                "current_financial_year": 435,
                "previous_financial_year": 6655
            },
            "non_renewable_energy_consumption_through_other_sources": {
                "current_financial_year": 434,
                "previous_financial_year": 876
            }
        },
        "details_related_to_water_discharged": {
            "surface_water_no_treatment": {
                "current_financial_year": 345,
                "previous_financial_year": 673
            },
            "surface_water_with_treatment": {
                "current_financial_year": 54,
                "previous_financial_year": 67
            },
            "ground_water_no_treatment": {
                "current_financial_year": 6556,
                "previous_financial_year": 87
            },
            "ground_water_with_treatment": {
                "current_financial_year": 45,
                "previous_financial_year": 67
            },
            "sea_water_no_treatment": {
                "current_financial_year": 45,
                "previous_financial_year": 67
            },
            "sea_water_with_treatment": {
                "current_financial_year": 45,
                "previous_financial_year": 675
            },
            "third_parties_no_treatment": {
                "current_financial_year": 45,
                "previous_financial_year": 76
            },
            "third_parties_with_treatment": {
                "current_financial_year": 45,
                "previous_financial_year": 67
            },
            "others_no_treatment": {
                "current_financial_year": 65,
                "previous_financial_year": 87
            },
            "others_with_treatment": {
                "current_financial_year": 3,
                "previous_financial_year": 76
            }
        },
        "used_innovative_technology": [
            {
                "initiative_undertaken": "fcchgv hj",
                "details_of_the_initiative": "nbc nv",
                "web_link": "ncvjhv",
                "outcome_of_the_initiative": "ncvjh v"
            }
        ],
        "percentage_of_value_chain_partners": 436346
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_six', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_six)



/**
 * @api {post} /api/form/monthly_survey_principal_seven Add Monthly Survey Principal 7 form
 * @apiName Add Monthly Survey Principal 7 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *   {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "total_energy_consumption": {
            "total_energy": {
                "non_renewable_1_in_joule": 10,
                "non_renewable_2_in_joule": 10,
                "total_non_renewable": 20
            },
            "total_fuel": {
                "non_renewable_1_in_joule": 10,
                "non_renewable_2_in_joule": 10,
                "total_non_renewable": 20
            },
            "total_fuel_consumption_joule": 40
        },
        "details_related_to_water_discharged": {
            "surface_water": 10,
            "ground_water": 10,
            "third_parties_water": 20,
            "seawater_desalinated_water": 20,
            "others": 0,
            "total_volume_of_water_withdrawal_in_kilolitres": 60,
            "total_volume_of_water_consumption_in_kilolitres": 30,
            "water_intensity_per_rupee_of_turnover_water_consumed": 10,
            "water_intensity_the_relevant_metric_may_be_selected_by_the_entity": 0
        },
        "details_of_air_emissions": {
            "nox": {
                "unit": "456",
                "current_month": 675
            },
            "sox": {
                "unit": "456",
                "current_month": 675
            },
            "pm": {
                "unit": "456",
                "current_month": 675
            },
            "pop": {
                "unit": "456",
                "current_month": 675
            },
            "voc": {
                "unit": "456",
                "current_month": 675
            },
            "hap": {
                "unit": "456",
                "current_month": 675
            },
            "other": {
                "unit": "456",
                "current_month": 675
            }
        },
        "details_of_greenhouse_gas_emissions": {
            "total_scope_1_emissions": {
                "unit": "45",
                "current_month": 546
            },
            "total_scope_2_emissions": {
                "unit": "45",
                "current_month": 546
            },
            "total_scope_1_2_emissions_per_rupee_of_turnover": {
                "unit": "45",
                "current_month": 546
            },
            "total_scope_1_2_emissions_intensity": {
                "unit": "45",
                "current_month": 546
            }
        },
        "details_related_to_waste_management": {
            "plastic_waste_a": 20,
            "e_waste_b": 20,
            "bio_medical_waste_c": 20,
            "construction_and_demolition_waste_d": 10,
            "battery_waste_e": 10,
            "radioactive_waste_f": 10,
            "other_hazardous_waste_g": 10,
            "other_non_hazardous_waste": 10,
            "total_a_b_c_d_e_f_g_h": 110,
            "for_each_category_of_waste_generated_total_waste_recovered_through_recycling_re_using_or_other_recovery_operations": {
                "category_of_waste": {
                    "recycle": 10,
                    "re_used": 15,
                    "other_recovery_operations": 0,
                    "total": 25
                },
                "grand_total_category_of_waste": 25
            },
            "for_each_category_of_waste_generated_total_waste_disposed_by_nature_of_disposal_method": {
                "category_of_waste": {
                    "incineration": 10,
                    "landfilling": 15,
                    "other_disposal_operations": 0,
                    "total": 25
                },
                "grand_total_category_of_waste": 25
            },
            "re_used": {
                "current_financial_year": 54,
                "previous_financial_year": 5
            },
            "other_recovery_operations": {
                "current_financial_year": 43,
                "previous_financial_year": 54
            },
            "incineration": {
                "current_financial_year": 3,
                "previous_financial_year": 54
            },
            "landfilling": {
                "current_financial_year": 43,
                "previous_financial_year": 53
            },
            "other_disposal_operations": {
                "current_financial_year": 43,
                "previous_financial_year": 45
            }
        }
    },
    "leadership_indicators": {
        "provide_break-up_of_the_total_energy_consumed_in_joules_or_multiples_from_renewable_and_non_renewable_sources_in_the_following_format": {
            "total_electricity_consumption_a": 10,
            "total_fuel_consumption_b": 10,
            "energy_consumption_through_other_sources_c": 10,
            "total_a_b_c": 30,
            "from_non_renewable_sources": {
                "total_electricity_consumption_d": 10,
                "total_fuel_consumption_e": 10,
                "energy_consumption_through_other_sources": 10,
                "total_energy_consumption_d_e_f": 30
            }
        },
        "provide_the_following_details_related_to_water_discharged": {
            "water_discharge_by_destination_and_level_of_treatment": {
                "to_surface_water": {
                    "no_treatment": 10,
                    "with_treatment_please_specify_level_of_treatment": 0
                },
                "to_ground_water": {
                    "no_treatment": 15,
                    "with_treatment_please_specify_level_of_treatment": 0
                },
                "to_sewater": {
                    "no_treatment": 15,
                    "with_treatment_please_specify_level_of_treatment": 0
                },
                "sent_to_third_parties": {
                    "no_treatment": 15,
                    "with_treatment_please_specify_level_of_treatment": 0
                },
                "others": {
                    "no_treatment": 15,
                    "with_treatment_please_specify_level_of_treatment": 0
                },
                "total_water_discharged_in_kilolitres": 75
            }
        },
        "used_innovative_technology": [
            {
                "initiative_undertaken": "fcchgv hj",
                "details_of_the_initiative": "nbcnv",
                "web_link": "ncvjhv",
                "outcome_of_the_initiative": "ncvjhv"
            }
        ],
        "percentage_of_value_chain_partners": 48
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_seven', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_seven)



/**
 * @api {post} /api/form/monthly_survey_principal_eight Add Monthly Survey Principal 8 form
 * @apiName Add Monthly Survey Principal 8 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "percentage_of_input_material_inputs_to_total_inputs_by_value_sourced_from_suppliers": {
            "directly_sourced_from_msmes_small_producers": 10,
            "sourced_directly_from_within_the_district_and_neighbouring_districts": 10
        },
        "details_of_beneficiaries_of_CSR_Projects": {
            "csr_project": 10,
            "no_of_persons_benefitted_from_csr_projects": 10,
            "percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups": 20
        }
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_eight', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_eight)



/**
 * @api {post} /api/form/monthly_survey_principal_nine Add Monthly Survey Principal 9 form
 * @apiName Add Monthly Survey Principal 9 form
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "essential_indicators": {
        "number_of_consumer_complaints_in_respect": {
            "data_privacy": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "advertising": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "cyber_security": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "delivery_of_essential_services": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "restrictive_trade_practices": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "unfair_trade_practices": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            },
            "other": {
                "received_during_the_year": 20,
                "pending_resolution_at_end_of_year": 45,
                "remarks": "Dummy text"
            }
        }
    }
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form has been submitted successfully"
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

router.post('/monthly_survey_principal_nine', authorize([Role.Employeer, Role.Employee]), validateRequest, monthly_survey_principal_nine)


/**
 * @api {get} /api/form/get_monthly_survey_form_data Get monthly survey form data
 * @apiName Get monthly survey form data
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {Number} month month of the Data.
 * @apiParam {Number} year year of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": {
        "monthly_survey_principal_one": {
            "_id": "63c03ac3164bb0415e3df6e1",
            "location_id": "c385b73a2efc",
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "month": "01",
            "year": "2023",
            "create_at": "2023-01-12 16:52:21",
            "essential_indicators": {
                "principles_during_the_financial_year": {
                    "segment_board_of_director": {
                        "total_number_of_training": 25,
                        "topics": "Dummy text",
                        "percentage_of_person": 10
                    },
                    "key_managerial_personnel": {
                        "total_number_of_training": 25,
                        "topics": "Dummy text",
                        "percentage_of_person": 12
                    },
                    "employees_other_than_bod_and_kmps": {
                        "total_number_of_training": 25,
                        "topics": "Dummy text",
                        "percentage_of_person": 9
                    },
                    "workers": {
                        "total_number_of_training": 0,
                        "topics": "",
                        "percentage_of_person": 0
                    }
                }
            },
            "is_deleted": false,
            "leadership_indicators": {
                "awareness_programmes_conducted": [
                    {
                        "total_number_of_awareness_programmes_held": 55,
                        "principles_covered_under_the_training": "Dummy text",
                        "percetage_of_age": 54
                    }
                ]
            }
        },
        "monthly_survey_principal_two": null,
        "monthly_survey_principal_three": null,
        "monthly_survey_principal_four": null,
        "monthly_survey_principal_five": null,
        "monthly_survey_principal_six": null,
        "monthly_survey_principal_seven": null,
        "monthly_survey_principal_eight": null,
        "monthly_survey_principal_nine": null
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

router.get('/get_monthly_survey_form_data', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest, get_monthly_survey_form_data)



/**
 * @api {get} /api/form/get_monthly_survey_form_data Get monthly survey specific form data
 * @apiName Get monthly survey specific form data
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {Number} form_id form_id of the Data.
 * @apiParam {Number} form form of the sequence.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "form_id": "63c03ac3164bb0415e3df6e1",
    "form": 1
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": {
        "_id": "63c03ac3164bb0415e3df6e1",
        "location_id": "c385b73a2efc",
        "company_id": "c385b73a2efcb4f46eaabc51be083989",
        "month": "01",
        "year": "2023",
        "create_at": "2023-01-12 16:52:21",
        "essential_indicators": {
            "principles_during_the_financial_year": {
                "segment_board_of_director": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 10
                },
                "key_managerial_personnel": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 12
                },
                "employees_other_than_bod_and_kmps": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 9
                },
                "workers": {
                    "total_number_of_training": 0,
                    "topics": "",
                    "percentage_of_person": 0
                }
            }
        },
        "is_deleted": false,
        "leadership_indicators": {
            "awareness_programmes_conducted": [
                {
                    "total_number_of_awareness_programmes_held": 55,
                    "principles_covered_under_the_training": "Dummy text",
                    "percetage_of_age": 54
                }
            ]
        }
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

router.get('/get_monthly_survey_form_data_specific', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest, get_monthly_survey_form_data_specific)



/**
 * @api {get} /api/form/get_monthly_survey_form_data_specific_date_range Get monthly survey date range form data
 * @apiName Get monthly survey date range form dat
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * @apiParam {Number} form form of the sequence.
 * @apiParam {Number} limit limit of the data.
 * @apiParam {Number} offset offset of the data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "form_id": "63c03ac3164bb0415e3df6e1",
    "form": 1,
    "limit": 10,
    "offset": 0,
    "from_date": "2022-11",
    "to_date": "2023-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "total": 1,
    "data": [
        {
            "_id": "63c97af8164bb0415e40140f",
            "location_id": "c385b73a2efc",
            "company_id": "c385b73a2efcb4f46eaabc51be083989",
            "month": "01",
            "year": "2023",
            "create_at": "2023-01-19 17:21:41",
            "essential_indicators": {
                "segment_board_of_director": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 10
                },
                "key_managerial_personnel": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 12
                },
                "employees_other_than_bod_and_kmps": {
                    "total_number_of_training": 25,
                    "topics": "Dummy text",
                    "percentage_of_person": 9
                },
                "workers": {
                    "total_number_of_training": 0,
                    "topics": "",
                    "percentage_of_person": 0
                }
            },
            "is_deleted": false,
            "leadership_indicators": {
                "awareness_programmes_conducted": [
                    {
                        "total_number_of_awareness_programmes_held": 55,
                        "principles_covered_under_the_training": "Dummy text",
                        "percetage_of_age": 54
                    }
                ]
            }
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

router.get('/get_monthly_survey_form_data_specific_date_range', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest, get_monthly_survey_form_data_specific_date_range)



/**
 * @api {get} /api/form/get_monthly_survey_aggregate_data Get monthly survey aggregate data
 * @apiName Get monthly survey aggregate data
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "form_id": "63c03ac3164bb0415e3df6e1",
    "from_date": "2022-11",
    "to_date": "2023-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": {
        "total_no_of_awareness_programs": 55,
        "total_no_of_r_and_d": 0,
        "total_energy_consumption": 0,
        "total_waste_generation": 0
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
router.get('/get_monthly_survey_aggregate_data', authorize([Role.Admin, Role.Employeer, Role.Employee]), validateRequest, get_monthly_survey_aggregate_data)


/**
 * @api {get} /api/form/get_graph_form_data_total_volume_of_water_consumption Get total volume of water consumption
 * @apiName Get total volume of water consumption
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "from_date": "2022-11-01",
    "to_date": "2023-01-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": [
        {
            "_id": "2022-10-01",
            "date": "2022-10-01",
            "total": 0
        },
        {
            "_id": "2022-11-01",
            "date": "2022-11-01",
            "total": 30
        },
        {
            "_id": "2022-12-01",
            "date": "2022-12-01",
            "total": 45
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
router.get("/get_graph_form_data_total_volume_of_water_consumption", authorize([Role.Admin, Role.Employeer, Role.Employee]), get_graph_form_data_total_volume_of_water_consumption)

/**
 * @api {get} /api/form/get_graph_form_data_total_scope_emissions Get total scope emission
 * @apiName Get total scope emission
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "from_date": "2022-11-01",
    "to_date": "2023-01-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": [
        {
            "_id": "2022-10-01",
            "date": "2022-10-01",
            "total_scope_1_emissions": 0,
            "total_scope_2_emissions": 0
        },
        {
            "_id": "2022-11-01",
            "date": "2022-11-01",
            "total_scope_1_emissions": 45,
            "total_scope_2_emissions": 45
        },
        {
            "_id": "2022-12-01",
            "date": "2022-12-01",
            "total_scope_1_emissions": 45,
            "total_scope_2_emissions": 45
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
router.get("/get_graph_form_data_total_scope_emissions", authorize([Role.Admin, Role.Employeer, Role.Employee]), get_graph_form_data_total_scope_emissions)

/**
 * @api {get} /api/form/get_graph_form_data_total_scope_emissions Get total energy consumption
 * @apiName Get total energy consumption
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "from_date": "2022-11-01",
    "to_date": "2023-01-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": [
        {
            "_id": "2022-10-01",
            "date": "2022-10-01",
            "total_energy_consumption_renewal": 0,
            "total_energy_consumption_non_renewal": 0
        },
        {
            "_id": "2022-11-01",
            "date": "2022-11-01",
            "total_energy_consumption_renewal": 30,
            "total_energy_consumption_non_renewal": 30
        },
        {
            "_id": "2022-12-01",
            "date": "2022-12-01",
            "total_energy_consumption_renewal": 30,
            "total_energy_consumption_non_renewal": 30
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
router.get("/get_graph_form_data_total_energy_consumption", authorize([Role.Admin, Role.Employeer, Role.Employee]), get_graph_form_data_total_energy_consumption)


/**
 * @api {get} /api/form/get_graph_form_data_total_water_discharged_in_kilolitres Get total water discharged
 * @apiName Get total water discharged
 * @apiGroup Form

 * @apiParam {String} company_id company_id of the Employeer.
 * @apiParam {String} location_id location_id of the Company.
 * @apiParam {String} from_date from_date of the Data.
 * @apiParam {String} to_date to_date of the Data.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *  {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "location_id": "c385b73a2efc",
    "from_date": "2022-11-01",
    "to_date": "2023-01-01",
   
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Form data",
    "data": [
        {
            "_id": "2022-10-01",
            "date": "2022-10-01",
            "total_water_discharged_in_kilolitres": 0
        },
        {
            "_id": "2022-11-01",
            "date": "2022-11-01",
            "total_water_discharged_in_kilolitres": 75
        },
        {
            "_id": "2022-12-01",
            "date": "2022-12-01",
            "total_water_discharged_in_kilolitres": 75
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
router.get("/get_graph_form_data_total_water_discharged_in_kilolitres", authorize([Role.Admin, Role.Employeer, Role.Employee]), get_graph_form_data_total_water_discharged_in_kilolitres)

module.exports = router;