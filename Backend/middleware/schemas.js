const Joi = require('joi')


const personID = Joi.string().guid({ version: 'uuidv4' })

const user_schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'ai'] } }),
    password: Joi.string().min(8).required().strict(),
})

const user_login_schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'ai'] } }),
    password: Joi.string().min(8).required().strict(),
})



const add_company = Joi.object({
    incorporation_year: Joi.string().required(),
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    corporate_identity_number: Joi.string().required(),
    company_name: Joi.string().uppercase({ force: true }).required(),
    registered_office_address: Joi.string().min(6).max(160).allow(null),
    corporate_office_address: Joi.string().min(6).max(160).allow(null),
    emai_id: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'ai'] } }).allow(null),
    contact_number: Joi.array().items(Joi.string().regex(/^[0-9]{10}$/)).allow(null),
    website_url: Joi.array().items(Joi.string()).allow(null),
    financial_year: Joi.string().allow(null),
    stock_exchange_name: Joi.string().min(3).allow(null),
    paid_up_capital: Joi.number().min(0).allow(null, 0),
    contact_details: Joi.array().items({
        contact_person: Joi.string().required(),
        contact_number: Joi.array().items(Joi.string().regex(/^[0-9]{10}$/)).allow(null),
    }).allow(null),
    reporting_boundary: Joi.string().allow(null),
    ii_products_and_services: Joi.object({
        business_activity: Joi.array().items({
            description_of_main_activity: Joi.string().allow(null),
            business_activity_description: Joi.string().allow(null),
            total_turnover_percentage: Joi.number().positive().min(0).allow(null)
        }).allow(null),
        products_services_sold_by_the_entity: Joi.array().items({
            product_or_service: Joi.string().allow(null),
            nic_code: Joi.string().allow(null),
            total_turnover_percentage: Joi.number().positive().min(0).allow(null)
        }).allow(null)
    }),
    iii_operations: Joi.object({
        location: Joi.object({
            national_operations: Joi.object({
                number_of_plants: Joi.number().min(0).allow(null),
                number_of_office: Joi.number().min(0).allow(null),
            }),
            international_operations: Joi.object({
                number_of_plants: Joi.number().min(0).allow(null),
                number_of_office: Joi.number().min(0).allow(null),
            })
           
        }),
        market_served_by_entity: Joi.object({
            number_of_location: Joi.object({
                number_of_states: Joi.number().min(0).allow(null),
                number_of_countries: Joi.number().min(0).allow(null)
            }),
            seventeen_b: Joi.string().allow(null),
            seventeen_c: Joi.string().allow(null)
        })
    }),
    iv_employees: Joi.object({
        financial_year: Joi.object({
            employees_and_worker: Joi.object({
                employees: Joi.object({
                    permanent_d: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({
                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        }),
                    }),
                    other_than_permanent_e: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        }),
                    })
                }),
                workers: Joi.object({
                    permanent_f: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({
                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        }),
                    }),
                    other_than_permanent_g: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        }),
                    })
                })
            }),
            diffrently_added_employees_and_worker: Joi.object({
                added_employees: Joi.object({
                    permanent_d: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    other_than_permanent_e: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        })
                    })
                }),
                added_workers: Joi.object({
                    permanent_f: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    other_than_permanent_g: Joi.object({
                        total: Joi.number().min(0).allow(null),
                        male: Joi.object({

                            no_a: Joi.number().min(0).allow(null),
                            no_b_a: Joi.number().min(0).allow(null)
                        }),
                        female: Joi.object({

                            no_c: Joi.number().min(0).allow(null),
                            no_c_a: Joi.number().min(0).allow(null)
                        })
                    })
                })
            })
        }),
        participation_or_representation_of_women: Joi.object({  
            bod: Joi.object({
                total: Joi.number().min(0).allow(null),
                no_a: Joi.number().min(0).allow(null),
                no_a_b: Joi.number().min(0).allow(null)
            }),
            kmp: Joi.object({
                total: Joi.number().min(0).allow(null),
                no_a: Joi.number().min(0).allow(null),
                no_a_b: Joi.number().min(0).allow(null)
            })
        }),
        turnover_rate_for_permanent_employees_and_workers: Joi.object({
            permanent_employees: Joi.object({
                first_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                }),
                second_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                }),
                third_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                })
            }),
            permanent_workers: Joi.object({
                first_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                }),
                second_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                }),
                third_year: Joi.object({
                    fy_year: Joi.string().allow(null),
                    female: Joi.number().min(0).allow(null),
                    male: Joi.number().min(0).allow(null),
                    total: Joi.number().integer().min(0).allow(null)
                })
            })
        })
    }),
    v_associate_companies: Joi.array().items({
        name_of_holding_or_associate_companies: Joi.string().allow(null),
        indicate_whether_holding_or_subsidiary_or_associate_joint_venture: Joi.string().allow(null),
        percentage_of_shares_held_by_listed_entity: Joi.number().positive().min(1).allow(null),
        does_the_entity_indicated_at_column_A_participate_in_the_business_esponsibility_initiatives_of_the_listed_entity: Joi.boolean().allow(null)

    }).allow(null),
    vi_csr_details: Joi.object({
        is_csr_applicable: Joi.boolean().allow(null),
        turnover_in_rs: Joi.number().positive().min(1).allow(null, 0),
        net_worth: Joi.number().positive().min(1).allow(null, 0),
    }),
    vii_transparency_and_disclosures_ompliances: Joi.object({
        national_guidelines_on_responsible_business_conduct: Joi.object({
            stakeholder_group: Joi.object({
                communities: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                investors: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                shareholders: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                employee_and_workers: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                customers: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                value_chain_partner: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),
                others: Joi.object({
                    grievance_redressal_mechanism_in_place: Joi.boolean().allow(null),
                    current_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    }),
                    previous_fy: Joi.object({
                        year: Joi.string().allow(null),
                        number_of_complaints: Joi.number().integer().min(0).allow(null),
                        number_of_complaints_pending_resolution_at_close: Joi.number().integer().min(0).allow(null),
                        remarks: Joi.string().allow(null)
                    })
                }),

            })

        }),
        business_conduct_issues: Joi.array().items({

            material_issue_identified: Joi.string().allow(null),
            indicate_whether_risk_or_opportunity: Joi.string().allow(null),
            rational_of_identifying: Joi.string().allow(null),
            in_case_of_risk: Joi.string().allow(null),
            financial_implications: Joi.string().allow(null),

        }).allow(null)
    })
})

const section_b = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    policy_and_management_process: Joi.object({
        one_a: Joi.object({
            p1: Joi.boolean().allow(null),
            p2: Joi.boolean().allow(null),
            p3: Joi.boolean().allow(null),
            p4: Joi.boolean().allow(null),
            p5: Joi.boolean().allow(null),
            p6: Joi.boolean().allow(null),
            p7: Joi.boolean().allow(null),
            p8: Joi.boolean().allow(null),
            p9: Joi.boolean().allow(null)
        }),
        one_b: Joi.object({
            p1: Joi.boolean().allow(null),
            p2: Joi.boolean().allow(null),
            p3: Joi.boolean().allow(null),
            p4: Joi.boolean().allow(null),
            p5: Joi.boolean().allow(null),
            p6: Joi.boolean().allow(null),
            p7: Joi.boolean().allow(null),
            p8: Joi.boolean().allow(null),
            p9: Joi.boolean().allow(null)
        }),
        one_c: Joi.object({
            p1: Joi.string().allow(null),
            p2: Joi.string().allow(null),
            p3: Joi.string().allow(null),
            p4: Joi.string().allow(null),
            p5: Joi.string().allow(null),
            p6: Joi.string().allow(null),
            p7: Joi.string().allow(null),
            p8: Joi.string().allow(null),
            p9: Joi.string().allow(null)
        }),
        two: Joi.object({
            p1: Joi.boolean().allow(null),
            p2: Joi.boolean().allow(null),
            p3: Joi.boolean().allow(null),
            p4: Joi.boolean().allow(null),
            p5: Joi.boolean().allow(null),
            p6: Joi.boolean().allow(null),
            p7: Joi.boolean().allow(null),
            p8: Joi.boolean().allow(null),
            p9: Joi.boolean().allow(null)
        }),
        three: Joi.object({
            p1: Joi.boolean().allow(null),
            p2: Joi.boolean().allow(null),
            p3: Joi.boolean().allow(null),
            p4: Joi.boolean().allow(null),
            p5: Joi.boolean().allow(null),
            p6: Joi.boolean().allow(null),
            p7: Joi.boolean().allow(null),
            p8: Joi.boolean().allow(null),
            p9: Joi.boolean().allow(null)
        }),
        four: Joi.object({
            p1: Joi.string().allow(null),
            p2: Joi.string().allow(null),
            p3: Joi.string().allow(null),
            p4: Joi.string().allow(null),
            p5: Joi.string().allow(null),
            p6: Joi.string().allow(null),
            p7: Joi.string().allow(null),
            p8: Joi.string().allow(null),
            p9: Joi.string().allow(null)
        }),
        five: Joi.object({
            p1: Joi.string().allow(null),
            p2: Joi.string().allow(null),
            p3: Joi.string().allow(null),
            p4: Joi.string().allow(null),
            p5: Joi.string().allow(null),
            p6: Joi.string().allow(null),
            p7: Joi.string().allow(null),
            p8: Joi.string().allow(null),
            p9: Joi.string().allow(null)
        }),
        six: Joi.object({
            p1: Joi.string().allow(null),
            p2: Joi.string().allow(null),
            p3: Joi.string().allow(null),
            p4: Joi.string().allow(null),
            p5: Joi.string().allow(null),
            p6: Joi.string().allow(null),
            p7: Joi.string().allow(null),
            p8: Joi.string().allow(null),
            p9: Joi.string().allow(null)
        })

    }),
    governance_leadership_and_oversight: Joi.object({
        seven: Joi.string().required().allow(null),
        eight: Joi.string().required().allow(null),
        nine: Joi.string().required().allow(null),
        ten: Joi.object({
            performance_against_above_policies_and_follow_up_action: Joi.object({
                indicate_whether_review_was_undertaken_by_director: Joi.object({
                    p1: Joi.string().allow(null),
                    p1_other: Joi.string().allow(null),
                    p2: Joi.string().allow(null),
                    p2_other: Joi.string().allow(null),
                    p3: Joi.string().allow(null),
                    p3_other: Joi.string().allow(null),
                    p4: Joi.string().allow(null),
                    p4_other: Joi.string().allow(null),
                    p5: Joi.string().allow(null),
                    p5_other: Joi.string().allow(null),
                    p6: Joi.string().allow(null),
                    p6_other: Joi.string().allow(null),
                    p7: Joi.string().allow(null),
                    p7_other: Joi.string().allow(null),
                    p8: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null),
                    p9: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null)
                }),
                frequency: Joi.object({
                    p1: Joi.string().allow(null),
                    p1_other: Joi.string().allow(null),
                    p2: Joi.string().allow(null),
                    p2_other: Joi.string().allow(null),
                    p3: Joi.string().allow(null),
                    p3_other: Joi.string().allow(null),
                    p4: Joi.string().allow(null),
                    p4_other: Joi.string().allow(null),
                    p5: Joi.string().allow(null),
                    p5_other: Joi.string().allow(null),
                    p6: Joi.string().allow(null),
                    p6_other: Joi.string().allow(null),
                    p7: Joi.string().allow(null),
                    p7_other: Joi.string().allow(null),
                    p8: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null),
                    p9: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null)
                })
            }),
            compliance_with_statutory_requirements: Joi.object({
                indicate_whether_review_was_undertaken_by_director: Joi.object({
                    p1: Joi.string().allow(null),
                    p1_other: Joi.string().allow(null),
                    p2: Joi.string().allow(null),
                    p2_other: Joi.string().allow(null),
                    p3: Joi.string().allow(null),
                    p3_other: Joi.string().allow(null),
                    p4: Joi.string().allow(null),
                    p4_other: Joi.string().allow(null),
                    p5: Joi.string().allow(null),
                    p5_other: Joi.string().allow(null),
                    p6: Joi.string().allow(null),
                    p6_other: Joi.string().allow(null),
                    p7: Joi.string().allow(null),
                    p7_other: Joi.string().allow(null),
                    p8: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null),
                    p9: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null)
                }),
                frequency: Joi.object({
                    p1: Joi.string().allow(null),
                    p1_other: Joi.string().allow(null),
                    p2: Joi.string().allow(null),
                    p2_other: Joi.string().allow(null),
                    p3: Joi.string().allow(null),
                    p3_other: Joi.string().allow(null),
                    p4: Joi.string().allow(null),
                    p4_other: Joi.string().allow(null),
                    p5: Joi.string().allow(null),
                    p5_other: Joi.string().allow(null),
                    p6: Joi.string().allow(null),
                    p6_other: Joi.string().allow(null),
                    p7: Joi.string().allow(null),
                    p7_other: Joi.string().allow(null),
                    p8: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null),
                    p9: Joi.string().allow(null),
                    p8_other: Joi.string().allow(null)
                })
            })
        }),
        eleven: Joi.object({
            p1: Joi.boolean().allow(null),
            name_of_agency_p1: Joi.string().allow(null),
            p2: Joi.boolean().allow(null),
            name_of_agency_p2: Joi.string().allow(null),
            p3: Joi.boolean().allow(null),
            name_of_agency_p3: Joi.string().allow(null),
            p4: Joi.boolean().allow(null),
            name_of_agency_p4: Joi.string().allow(null),
            p5: Joi.boolean().allow(null),
            name_of_agency_p5: Joi.string().allow(null),
            p6: Joi.boolean().allow(null),
            name_of_agency_p6: Joi.string().allow(null),
            p7: Joi.boolean().allow(null),
            name_of_agency_p7: Joi.string().allow(null),
            p8: Joi.boolean().allow(null),
            name_of_agency_p8: Joi.string().allow(null),
            p9: Joi.boolean().allow(null),
            name_of_agency_p9: Joi.string().allow(null)
        }),
        tweleve: Joi.object({
            the_entity_does_not_consider_the_principles_material_to_its_business: Joi.object({
                p1: Joi.boolean().allow(null),
                p2: Joi.boolean().allow(null),
                p3: Joi.boolean().allow(null),
                p4: Joi.boolean().allow(null),
                p5: Joi.boolean().allow(null),
                p6: Joi.boolean().allow(null),
                p7: Joi.boolean().allow(null),
                p8: Joi.boolean().allow(null),
                p9: Joi.boolean().allow(null)
            }),
            position_to_formulate_and_implement_the_policies_on_specified_principles: Joi.object({
                p1: Joi.boolean().allow(null),
                p2: Joi.boolean().allow(null),
                p3: Joi.boolean().allow(null),
                p4: Joi.boolean().allow(null),
                p5: Joi.boolean().allow(null),
                p6: Joi.boolean().allow(null),
                p7: Joi.boolean().allow(null),
                p8: Joi.boolean().allow(null),
                p9: Joi.boolean().allow(null)
            }),
            human_and_technical_resources_available_for_the_task: Joi.object({
                p1: Joi.boolean().allow(null),
                p2: Joi.boolean().allow(null),
                p3: Joi.boolean().allow(null),
                p4: Joi.boolean().allow(null),
                p5: Joi.boolean().allow(null),
                p6: Joi.boolean().allow(null),
                p7: Joi.boolean().allow(null),
                p8: Joi.boolean().allow(null),
                p9: Joi.boolean().allow(null)
            }),
            it_is_planned_to_be_done_in_the_next_financial_year: Joi.object({
                p1: Joi.boolean().allow(null),
                p2: Joi.boolean().allow(null),
                p3: Joi.boolean().allow(null),
                p4: Joi.boolean().allow(null),
                p5: Joi.boolean().allow(null),
                p6: Joi.boolean().allow(null),
                p7: Joi.boolean().allow(null),
                p8: Joi.boolean().allow(null),
                p9: Joi.boolean().allow(null)
            }),
            any_other_reason: Joi.string().allow(null)

        })

    })
})

const principal_wise_performance_disclosure = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    essential_indicators: Joi.object({
        principles_during_the_financial_year: Joi.object({
            segment_board_of_director: Joi.object({
                total_number_of_training: Joi.number().integer().min(0).allow(null),
                topics: Joi.string().allow(null),
                percentage_of_person: Joi.number().min(0).allow(null)
            }),
            key_managerial_personnel: Joi.object({
                total_number_of_training: Joi.number().integer().min(0).allow(null),
                topics: Joi.string().allow(null),
                percentage_of_person: Joi.number().min(0).allow(null)
            }),
            employees_other_than_bod_and_kmps: Joi.object({
                total_number_of_training: Joi.number().integer().min(0).allow(null),
                topics: Joi.string().allow(null),
                percentage_of_person: Joi.number().min(0).allow(null)
            }),
            workers: Joi.object({
                total_number_of_training: Joi.number().integer().min(0).allow(null),
                topics: Joi.string().allow(null),
                percentage_of_person: Joi.number().min(0).allow(null)
            })
        }),
        details_of_fines_penalties: Joi.object({
            monetary: Joi.object({
                penality: Joi.object({
                    ngrbc_principal: Joi.string().allow(null),
                    name_of_the_regulatory: Joi.string().allow(null),
                    amount_in_inr: Joi.number().min(0).allow(null),
                    brief_of_the_case: Joi.string().allow(null),
                    has_an_appeal_been_preferred: Joi.boolean().allow(null)
                }),
                settlement: Joi.object({
                    ngrbc_principal: Joi.string().allow(null),
                    name_of_the_regulatory: Joi.string().allow(null),
                    amount_in_inr: Joi.number().min(0).allow(null),
                    brief_of_the_case: Joi.string().allow(null),
                    has_an_appeal_been_preferred: Joi.boolean().allow(null)
                }),
                compounding_fee: Joi.object({
                    ngrbc_principal: Joi.string().allow(null),
                    name_of_the_regulatory: Joi.string().allow(null),
                    amount_in_inr: Joi.number().min(0).allow(null),
                    brief_of_the_case: Joi.string().allow(null),
                    has_an_appeal_been_preferred: Joi.boolean().allow(null)
                }),

            }),
            non_monetary: Joi.object({
                imprisonment: Joi.object({
                    ngrbc_principal: Joi.string().allow(null),
                    name_of_the_regulatory: Joi.string().allow(null),
                    amount_in_inr: Joi.number().min(0).allow(null),
                    brief_of_the_case: Joi.string().allow(null),
                    has_an_appeal_been_preferred: Joi.boolean().allow(null)
                }),
                punishment: Joi.object({
                    ngrbc_principal: Joi.string().allow(null),
                    name_of_the_regulatory: Joi.string().allow(null),
                    amount_in_inr: Joi.number().min(0).allow(null),
                    brief_of_the_case: Joi.string().allow(null),
                    has_an_appeal_been_preferred: Joi.boolean().allow(null)
                })

            })
        }),
        monetary_or_non_monetary_action_appealed: Joi.array().items({
            case_details: Joi.string().allow(null),
            judicial_institutions: Joi.string().allow(null)
        }).allow(null),
        anti_corruption_or_anti_bribery_policy_boolean: Joi.boolean().allow(null),
        anti_corruption_or_anti_bribery_policy: Joi.string().allow(null),
        number_of_directors: Joi.object({
            current_financial_yr: Joi.object({
                year: Joi.string().allow(null),
                directors: Joi.number().integer().min(0).allow(null),
                kmps: Joi.number().integer().min(0).allow(null),
                employees: Joi.number().integer().min(0).allow(null),
                workers: Joi.number().integer().min(0).allow(null)

            }),
            previous_financial_yr: Joi.object({
                year: Joi.string().allow(null),
                directors: Joi.number().integer().min(0).allow(null),
                kmps: Joi.number().integer().min(0).allow(null),
                employees: Joi.number().integer().min(0).allow(null),
                workers: Joi.number().integer().min(0).allow(null)

            })
        }),
        details_of_complaints: Joi.object({
            current_financial_yr: Joi.object({
                year: Joi.string().allow(null),
                number_of_complaints_received_of_conflict_of_interes_of_the_directors: Joi.object({
                    numbers: Joi.number().integer().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                number_of_complaints_received_of_conflict_of_interes_of_the_kmps: Joi.object({
                    numbers: Joi.number().integer().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            }),
            previous_financial_yr: Joi.object({
                year: Joi.string().allow(null),
                number_of_complaints_received_of_conflict_of_interes_of_the_directors: Joi.object({
                    numbers: Joi.number().integer().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                number_of_complaints_received_of_conflict_of_interes_of_the_kmps: Joi.object({
                    numbers: Joi.number().integer().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            })
        }),
        provide_details_of_any_corrective_action_taken_or_underway_on_issues_related_to_fines: Joi.string().allow(null)
    }),
    leadership_indicators: Joi.object({
        awareness_programmes_conducted: Joi.array().items({
            total_number_of_awareness_programmes_held: Joi.number().min(0).allow(null),
            principles_covered_under_the_training: Joi.string().allow(null),
            percetage_of_age: Joi.number().min(0).allow(null),
        }).allow(null),
        manage_conflict_of_interests_involving_members_of_the_board: Joi.string().allow(null)
    }),
    company_id: Joi.string().required()
})


const goal_and_service = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        one_capital_expenditure: Joi.object({
            r_and_d: Joi.object({
                current_year: Joi.number().allow(null),
                previous_year: Joi.number().allow(null),
                details_of_improvements: Joi.string().allow(null)
            }),
            capex: Joi.object({
                current_year: Joi.number().allow(null),
                previous_year: Joi.number().allow(null),
                details_of_improvements: Joi.string().allow(null)
            })
        }),
        two_a: Joi.string().allow(null),
        two_b: Joi.string().allow(null),
        three_describe_the_processes_in_place_to_safely_reclaim: Joi.object({
            a: Joi.string().allow(null),
            b: Joi.string().allow(null),
            c: Joi.string().allow(null),
            d: Joi.string().allow(null)
        }),
        four_extended_producer_responsibility: Joi.object({
            epr: Joi.string().allow(null),
            if_yes: Joi.boolean().allow(null),
            if_no: Joi.boolean().allow(null)
        })
    }),
    leadership_indicators: Joi.object({
        entity_conducted_life_cycle_perspective: Joi.array().items({
            nic_code: Joi.string().allow(null),
            name_of_the_product_or_service: Joi.string().allow(null),
            percetage_of_total_turnover: Joi.number().min(0).allow(null),
            assesment_was_conducted: Joi.string().allow(null),
            whether_conducted_by_independent_external_agency: Joi.boolean().allow(null),
            result_communucated_in_public_domain: Joi.string().allow(null),
            url: Joi.string().allow(null)

        }).allow(null),
        significant_social_or_environmental_concerns: Joi.array().items({
            name_of_the_product_or_service: Joi.string().allow(null),
            description_of_the_risk: Joi.string().allow(null),
            action_taken: Joi.string().allow(null),
        }).allow(null),
        percentage_of_recycled_or_reused_input_material: Joi.array().items({
            indicate_input_material: Joi.string().allow(null),
            current_year: Joi.string().allow(null),
            previous_year: Joi.string().allow(null)
        }).allow(null),
        products_and_packaging_reclaimed_at_end_of_life: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                plastic: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                e_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                hazardous_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                other_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                })
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                plastic: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                e_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                hazardous_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                }),
                other_waste: Joi.object({
                    re_used: Joi.number().min(0).allow(null),
                    recycled: Joi.number().min(0).allow(null),
                    safely_disposed: Joi.number().min(0).allow(null)
                })
            })
        }),
        reclaimed_products: Joi.array().items({
            indicate_product_category: Joi.string().allow(null),
            packaging_materials_as_percentage: Joi.number().min(0).allow(null)
        }).allow(null)
    })


})

const respect_and_promote = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        a_details_of_measures_for_the_well_being_of_employees: Joi.object({
            percentage_of_employees_covered: Joi.object({
                permanent_employees: Joi.object({
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    }),
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    })
                }),
                other_than_permanent_employees: Joi.object({
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    }),
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null),
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null),
                        }),

                    })
                })
            })
        }),
        b_details_of_measures_for_the_well_being_of_workers: Joi.object({
            percentage_of_employees_covered: Joi.object({
                permanent_workers: Joi.object({
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    })
                }),
                other_than_permanent_workers: Joi.object({
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        health_insurance: Joi.object({
                            number_b: Joi.number().min(0).allow(null),
                            percent_of_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        accident_insurance: Joi.object({
                            number_c: Joi.number().min(0).allow(null),
                            percent_of_c_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        maternity_benifits: Joi.object({
                            number_d: Joi.number().min(0).allow(null),
                            percent_of_d_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        paternity_benifits: Joi.object({
                            number_e: Joi.number().min(0).allow(null),
                            percent_of_e_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        day_care_facilities: Joi.object({
                            number_f: Joi.number().min(0).allow(null),
                            percent_of_f_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    })
                })
            })
        }),
        details_of_retirement_benefits: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                pf: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                gratutity: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                esi: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                others: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),

            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                pf: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                gratutity: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                esi: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),
                others: Joi.object({
                    no_of_employees_covered_as_a_percentage_of_total_employees: Joi.number().min(0).allow(null),
                    no_of_workers_covered_as_a_percentage_of_total_workers: Joi.number().min(0).allow(null),
                    deducted_and_deposited_with_the_authority: Joi.string().allow(null)
                }),

            })
        }),
        accessibility_of_workplaces: Joi.string().allow(null),
        does_entity_have_an_equal_opportunity_policy: Joi.string().allow(null),
        retention_rates_of_permanent_employees_and_workers: Joi.object({
            permanent_employees: Joi.object({
                male: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                }),
                total: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                })
            }),
            permanent_workers: Joi.object({
                male: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                }),
                total: Joi.object({
                    return_to_work_rate: Joi.number().min(0).allow(null),
                    retention_rate: Joi.number().min(0).allow(null)
                })
            })
        }),
        mechanism_available_to_receive_and_redress_grievances: Joi.object({
            permanent_workers: Joi.string().allow(null),
            other_than_permanent_workers: Joi.string().allow(null),
            permanent_employees: Joi.string().allow(null),
            other_than_permanent_employees: Joi.string().allow(null)
        }),
        membership_of_employees_and_worker_in_association: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                total_permanent_employees: Joi.object({
                    total_employee_category_a: Joi.number().positive().min(0).allow(null),
                    no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                    percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_employee_category_a: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_employee_category_a: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null)
                    })
                }),
                total_permanent_workers: Joi.object({
                    total_employee_category_a: Joi.number().positive().min(0).allow(null),
                    no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                    percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_employee_category_a: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_employee_category_a: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null)
                    })
                }),
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                total_permanent_employees: Joi.object({
                    total_employee_category_c: Joi.number().positive().min(0).allow(null),
                    no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                    percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_employee_category_c: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_employee_category_c: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    })
                }),
                total_permanent_workers: Joi.object({
                    total_employee_category_c: Joi.number().positive().min(0).allow(null),
                    no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                    percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_employee_category_c: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_employee_category_c: Joi.number().positive().min(0).allow(null),
                        no_employee_or_workers_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    })
                }),
            })
        }),
        details_of_training_given_to_employees_and_workers: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                employees: Joi.object({
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    })
                }),
                workers: Joi.object({
                    total: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    male: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_b: Joi.number().min(0).allow(null),
                            percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_c: Joi.number().min(0).allow(null),
                            percentage_c_divided_by_a: Joi.number().min(0).allow(null)
                        })
                    })
                })
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                employees: Joi.object({
                    total: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    }),
                    male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    })
                }),
                workers: Joi.object({
                    total: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    }),
                    male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    }),
                    female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        on_health_and_safety_measures: Joi.object({
                            no_e: Joi.number().min(0).allow(null),
                            percentage_e_divided_by_d: Joi.number().min(0).allow(null)
                        }),
                        on_skill_upgrade: Joi.object({
                            no_f: Joi.number().min(0).allow(null),
                            percentage_f_divided_by_d: Joi.number().min(0).allow(null)
                        })
                    })
                })
            })
        }),
        details_of_performance_and_career_development_reviews_of_employees_and_worker: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                employees: Joi.object({
                    total_a: Joi.number().positive().min(0).allow(null),
                    no_b: Joi.number().positive().min(0).allow(null),
                    percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_a: Joi.number().positive().min(0).allow(null),
                        no_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    }),
                    female: Joi.object({
                        total_a: Joi.number().positive().min(0).allow(null),
                        no_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    })
                }),
                workers: Joi.object({
                    total_c: Joi.number().positive().min(0).allow(null),
                    no_d: Joi.number().positive().min(0).allow(null),
                    percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_c: Joi.number().positive().min(0).allow(null),
                        no_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_c: Joi.number().positive().min(0).allow(null),
                        no_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    })
                })
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                employees: Joi.object({
                    total_a: Joi.number().positive().min(0).allow(null),
                    no_b: Joi.number().positive().min(0).allow(null),
                    percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_a: Joi.number().positive().min(0).allow(null),
                        no_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    }),
                    female: Joi.object({
                        total_a: Joi.number().positive().min(0).allow(null),
                        no_b: Joi.number().positive().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().positive().min(0).allow(null),
                    })
                }),
                workers: Joi.object({
                    total_c: Joi.number().positive().min(0).allow(null),
                    no_d: Joi.number().positive().min(0).allow(null),
                    percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null),
                    male: Joi.object({
                        total_c: Joi.number().positive().min(0).allow(null),
                        no_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    }),
                    female: Joi.object({
                        total_c: Joi.number().positive().min(0).allow(null),
                        no_d: Joi.number().positive().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().positive().min(0).allow(null)
                    })
                })
            })
        }),
        health_and_safety_management_system: Joi.object({
            a: Joi.string().allow(null),
            b: Joi.string().allow(null),
            c: Joi.boolean().allow(null),
            d: Joi.boolean().allow(null)
        }),
        details_of_safety_related_incidents: Joi.object({
            safety_incident_number: Joi.object({
                ltifr: Joi.object({
                    employees: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    }),
                    workers: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    })
                }),
                total_recordable_work_related_injuries: Joi.object({
                    employees: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    }),
                    workers: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    })
                }),
                no_of_fatalities: Joi.object({
                    employees: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    }),
                    workers: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    })
                }),
                high_consequence_work_related_injury: Joi.object({
                    employees: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    }),
                    workers: Joi.object({
                        current_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        }),
                        previous_financial_year: Joi.object({
                            year: Joi.string().allow(null),
                            numbers: Joi.number().integer().min(0).allow(null)
                        })
                    })
                })
            })
        }),

        measures_taken_by_the_entity_to_ensure_a_safe_and_healthy_work_place: Joi.string().allow(null),
        number_of_complaints: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                working_conditions: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_the_year_end: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                healthy_and_safety: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_the_year_end: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                working_conditions: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_the_year_end: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                healthy_and_safety: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_the_year_end: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            })
        }),
        assessment_of_the_year: Joi.object({
            health_and_safety_practices: Joi.object({
                percentage_of_your_plants: Joi.number().min(0).allow(null)
            }),
            working_conditions: Joi.object({
                percentage_of_your_plants: Joi.number().min(0).allow(null)
            })
        }),
        details_of_any_corrective_action_taken: Joi.string().allow(null)

    }),
    leadership_indicators: Joi.object({
        does_the_entity_extend_any_life_insurance_employees: Joi.string().allow(null),
        does_the_entity_extend_any_life_insurance_workers: Joi.string().allow(null),
        provide_the_measures_undertaken_by_the_entity: Joi.string().allow(null),
        high_consequence_work_related_injury: Joi.object({
            total_number_of_affected_employees_or_workers: Joi.object({
                current_financial_year: Joi.object({
                    year: Joi.string().allow(null),
                    employees: Joi.number().integer().min(0).allow(null),
                    workers: Joi.number().integer().min(0).allow(null)
                }),
                previous_financial_year: Joi.object({
                    year: Joi.string().allow(null),
                    employees: Joi.number().integer().min(0).allow(null),
                    workers: Joi.number().integer().min(0).allow(null)
                })
            }),
            no_of_employees_or_workers_that_are_rehabilitated: Joi.object({
                current_financial_year: Joi.object({
                    year: Joi.string().allow(null),
                    employees: Joi.number().integer().min(0).allow(null),
                    workers: Joi.number().integer().min(0).allow(null)
                }),
                previous_financial_year: Joi.object({
                    year: Joi.string().allow(null),
                    employees: Joi.number().integer().min(0).allow(null),
                    workers: Joi.number().integer().min(0).allow(null)
                })
            })
        }),
        does_the_entity_provide_transition_assistance_programs: Joi.string().allow(null),
        details_on_assessment_of_value_chain_partners: Joi.object({
            health_and_safety_practices: Joi.object({
                percentage_of_value_partners: Joi.string().allow(null)
            }),
            working_conditions: Joi.object({
                percentage_of_value_partners: Joi.string().allow(null)
            })
        }),
        details_of_any_corrective_actions_taken: Joi.string().allow(null)
    })
})

const respect_the_interests = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        describe_the_processes_for_identifying_key_stakeholder_groups_of_the_entity: Joi.string().allow(null),
        list_stakeholder_groups: Joi.array().items({
            stakeholder_group: Joi.string().allow(null),
            whether_identified_as_vulnerable: Joi.string().allow(null),
            channel_of_the_communication: Joi.string().allow(null),
            frequency_of_the_engagement: Joi.string().allow(null),
            purpose_and_scope_of_engagement_including_key: Joi.string().allow(null)
        }).allow(null)
    }),
    leadership_indicators: Joi.object({
        provide_the_processes_for_consultation_between_stakeholders_and_the_board: Joi.string().allow(null),
        whether_stakeholder_consultation_is_used_to_support_the_identification: Joi.string().allow(null),
        provide_details_of_instances_of_engagement: Joi.string().allow(null)
    })
})

const respect_and_promote_human_rights = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        employees_and_workers_who_have_been_provided_training_on_human_rights: Joi.object({
            current_financial_year: Joi.object({
                employees: Joi.object({
                    permanent: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_permanent: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    total_employees: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    })
                }),
                workers: Joi.object({
                    permanent: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_permanent: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    total_workers: Joi.object({
                        total_a: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_b: Joi.number().min(0).allow(null),
                        percentage_b_divided_by_a: Joi.number().min(0).allow(null)
                    })
                })
            }),

            previous_financial_year: Joi.object({
                employees: Joi.object({
                    permanent: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    }),
                    other_permanent: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    }),
                    total_employees: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    })
                }),
                workers: Joi.object({
                    permanent: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    }),
                    other_permanent: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    }),
                    total_workers: Joi.object({
                        total_c: Joi.number().min(0).allow(null),
                        no_of_employees_or_workers_d: Joi.number().min(0).allow(null),
                        percentage_d_divided_by_c: Joi.number().min(0).allow(null)
                    })
                })
            })
        }),
        details_of_minimum_wages_paid_to_employees: Joi.object({
            current_financial_year: Joi.object({
                employees: Joi.object({
                    permanent_male: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    permanent_female: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_male: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_female: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    })
                }),
                workers: Joi.object({
                    permanent_male: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    permanent_female: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_male: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_female: Joi.object({
                        total_a: Joi.number().min(0).allow(null, 0),
                        equal_to_minimum_wage_no_b: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_b_divided_by_a: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_c_divided_by_a: Joi.number().min(0).allow(null)
                    })
                })
            }),
            previous_financial_year: Joi.object({
                employees: Joi.object({
                    permanent_male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    permanent_female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    })
                }),
                workers: Joi.object({
                    permanent_male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    permanent_female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_male: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    }),
                    other_than_permanent_female: Joi.object({
                        total_d: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e: Joi.number().min(0).allow(null),
                        equal_to_minimum_wage_no_e_divided_by_d: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f: Joi.number().min(0).allow(null),
                        more_than_minimum_wage_no_f_divided_by_d: Joi.number().min(0).allow(null)
                    })
                })
            })
        }),
        details_of_remuneration: Joi.object({
            boards_of_directors: Joi.object({
                male: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                })
            }),
            key_managerial: Joi.object({
                male: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                })
            }),
            other_than_bod_and_kmp: Joi.object({
                male: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                })
            }),
            workers: Joi.object({
                male: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                }),
                female: Joi.object({
                    number: Joi.number().min(0).allow(null),
                    median_remuneration: Joi.number().min(0).allow(null)
                })
            })
        }),
        do_you_have_a_focal_point_individual_or_committee_responsible_for_addressing_human_rights_impacts_or_issues_caused_or_contributed_to_by_the_business: Joi.boolean().allow(null),
        describe_the_internal_mechanisms_in_place_to_redress_grievances: Joi.string().allow(null),
        number_of_complaints: Joi.object({
            current_financial_year: Joi.object({
                sexual_harassment: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                discrimination_at_workplace: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                child_labour: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                forced_labour: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                wages: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                others_human_rights_related_issued: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                })
            }),
            previous_financial_year: Joi.object({
                sexual_harassment: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                discrimination_at_workplace: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                child_labour: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                forced_labour: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                wages: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                }),
                others_human_rights_related_issued: Joi.object({
                    filed_during_the_year: Joi.number().positive().min(0).allow(null, 0),
                    pending_resolution_at_the_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null, "")
                })
            })
        }),
        mechanisms_to_prevent_adverse_consequences_to_the_complainant_in_discrimination_and_harassment_cases: Joi.string().allow(null, ""),
        do_human_rights_requirements_form_part_of_your_business_agreements_and_contracts: Joi.boolean().allow(null),
        assessments_for_the_year: Joi.object({
            child_labour_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null, 0),
            involuntary_labour_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null, 0),
            sexual_harassment_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null),
            discrimination_at_workplace_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null),
            wages_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null),
            others_percentage_of_your_plants_and_offices: Joi.number().positive().min(0).allow(null)
        }),
        provide_details_of_any_corrective_actions_taken: Joi.string().allow(null, "")
    }),
    leadership_indicators: Joi.object({
        details_of_a_business_process_being_modified: Joi.string().allow(null, ""),
        details_of_the_scope_and_coverage_of_any_human_rights_due_diligence_conducted: Joi.string().allow(null, ""),
        is_the_premise_or_office_of_the_entity_accessible_to_differently_abled_visitors: Joi.string().allow(null, ""),
        details_on_assessment_of_value_chain_partners: Joi.object({
            sexual_harassment_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null),
            discrimination_at_workplace_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null),
            child_labour_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null),
            involuntary_labour_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null),
            wages_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null),
            others_percentage_of_value_chain_partners: Joi.number().positive().min(0).allow(null)
        }),
        provide_details_of_any_corrective_actions_taken: Joi.string().allow(null, "")
    })

})

const respect_and_make_efforts = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({


        details_of_total_energy_consumption: Joi.object({
            current_year: Joi.string().allow(null),
            previous_year: Joi.string().allow(null),
            total_electricity_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_fuel_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),

            energy_consumption_through_other_sources: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_energy_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            energy_intensity_per_rupee: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            energy_intensity_optional: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })

        }),
        indicate_if_any_independent_assessment_essential_1: Joi.boolean().allow(null),
        independent_assessment_agency_name_essential_1: Joi.string().allow(null),
        is_dcs: Joi.boolean().allow(null),
        targets_under_pat_achieved: Joi.boolean().allow(null),
        remedial_action_taken: Joi.string().allow(null),
        details_of_following_disclosures_related_to_water: Joi.object({
            current_year: Joi.string().allow(null),
            previous_year: Joi.string().allow(null),
            surface_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            groundwater: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            third_party_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            desalinated_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            others: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_volume_of_water_withdrawal: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_volume_of_water_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_intensity_per_rupee: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_intensity_optional: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_essential_3: Joi.boolean().allow(null),
        independent_assessment_agency_name_essential_3: Joi.string().allow(null),
        mechanism_for_zero_liquid_discharge: Joi.boolean().allow(null),
        mechanism_for_zero_liquid_discharge_details: Joi.string().allow(null),
        details_of_air_emissions: Joi.object({
            nox: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            sox: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            pm: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            pop: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            voc: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            hap: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            other: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_essential_5: Joi.boolean().allow(null),
        independent_assessment_agency_name_essential_5: Joi.string().allow(null),
        details_of_greenhouse_gas_emissions: Joi.object({
            total_scope_1_emissions: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_scope_2_emissions: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_scope_1_2_emissions_per_rupee_of_turnover: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_scope_1_2_emissions_intensity: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_essential_6: Joi.boolean().allow(null),
        independent_assessment_agency_name_essential_6: Joi.string().allow(null),
        related_to_reducing_green_house_gas_emission: Joi.boolean().allow(null),
        related_to_reducing_green_house_gas_emission_details: Joi.string().allow(null),
        details_related_to_waste_management: Joi.object({
            plastic_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            e_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            bio_medical_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            construction_and_demolition_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            battery_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            radioactive_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            other_hazardous_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            other_non_hazardous_waste: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            recycled: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            re_used: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            other_recovery_operations: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            incineration: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            landfilling: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            }),
            other_disposal_operations: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null),
            })
        }),
        indicate_if_any_independent_assessment_essential_8: Joi.boolean().allow(null),
        indicate_if_any_independent_assessment_name_essential_8: Joi.string().allow(null),
        waste_management_practices_adopted: Joi.string().allow(null),
        ecologically_sensitive_areas: Joi.array().items({
            office_location: Joi.string().allow(null),
            types_of_operation: Joi.string().allow(null),
            is_environmental_approval: Joi.boolean().allow(null),
            details: Joi.string().allow(null)

        }).allow(null),
        details_of_environmental_impact_assessments: Joi.array().items({
            project_detail: Joi.string().allow(null),
            eia: Joi.string().allow(null),
            date: Joi.string().allow(null),
            conducted_by_independent_external_agency: Joi.boolean().allow(null),
            communicated_in_public_domain: Joi.boolean().allow(null),
            web_link: Joi.string().allow(null)
        }).allow(null),
        is_entity_compliant_with_the_applicable_environmental_law: Joi.boolean().allow(null),
        non_compliances_details: Joi.array().items({
            guidelines_which_was_not_complied: Joi.string().allow(null),
            details_of_the_non_compliance: Joi.string().allow(null),
            action_taken_by_regulatory_agencies: Joi.string().allow(null),
            corrective_action_taken: Joi.string().allow(null)
        }).allow(null)

    }),
    leadership_indicators: Joi.object({
        energy_consumed_from_renewable_and_non_renewable_sources: Joi.object({
            renewable_total_electricity_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            }),
            renewable_total_fuel_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            }),
            renewable_energy_consumption_through_other_sources: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            }),
            non_renewable_total_electricity_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            }),
            non_renewable_total_fuel_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            }),
            non_renewable_energy_consumption_through_other_sources: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null, 0),
                previous_financial_year: Joi.number().integer().min(0).allow(null, 0)
            })

        }),
        indicate_if_any_independent_assessment_leader_1: Joi.boolean().allow(null),
        indicate_if_any_independent_assessment_name_leader_1: Joi.string().allow(null),
        details_related_to_water_discharged: Joi.object({
            surface_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            surface_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            ground_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            ground_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            sea_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            sea_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            third_parties_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            third_parties_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            others_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            others_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_leader_2: Joi.boolean().allow(null),
        indicate_if_any_independent_assessment_name_leader_2: Joi.string().allow(null),
        water_withdrawal_in_areas_of_water_stress: Joi.object({
            name_of_area: Joi.string().allow(null),
            nature_of_operations: Joi.string().allow(null),
            water_withdrawal_surface_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_withdrawal_ground_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_withdrawal_third_party_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_withdrawal_sea_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_withdrawal_others_water: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_volume_of_water_consumption: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_intensity_per_rupee_of_turnover: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            water_intensity: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            surface_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            surface_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            ground_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            ground_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            sea_water_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            sea_water_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            third_parties_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            third_parties_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            others_no_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            others_with_treatment: Joi.object({
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_leader_3: Joi.boolean().allow(null),
        indicate_if_any_independent_assessment_name_leader_3: Joi.string().allow(null),
        details_of_total_Scope_3_emissions: Joi.object({
            total_scope_3_emissions: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_scope_3_emissions_per_rupee_of_turnover: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            }),
            total_scope_3_emissions_intensity: Joi.object({
                unit: Joi.string().allow(null),
                current_financial_year: Joi.number().integer().min(0).allow(null),
                previous_financial_year: Joi.number().integer().min(0).allow(null)
            })
        }),
        indicate_if_any_independent_assessment_leader_4: Joi.boolean().allow(null),
        indicate_if_any_independent_assessment_name_leader_4: Joi.string().allow(null),
        details_of_significant_direct_indirect_impact_on_biodiversity: Joi.string().allow(null),
        used_innovative_technology: Joi.array().items({
            initiative_undertaken: Joi.string().allow(null),
            details_of_the_initiative: Joi.string().allow(null),
            web_link: Joi.string().allow(null),
            outcome_of_the_initiative: Joi.string().allow(null)
        }).allow(null),
        business_continuity_and_disaster_management_plan: Joi.string().allow(null),
        business_continuity_and_disaster_management_plan_web_link: Joi.string().allow(null),
        significant_adverse_impact_to_the_environment: Joi.string().allow(null),
        percentage_of_value_chain_partners: Joi.number().integer().min(0).allow(null)
    })
})

const engaging_in_influencing_public = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        one_a_number_of_affiliations_with_trade_and_industry_chambers_associations: Joi.string().allow(null, ""),
        one_b_list_the_top_10_trade_and_industry_chambers: Joi.array().items({
            name_of_the_trade_and_industry_chambers_associations: Joi.string().allow(null, ""),
            reach_of_trade_and_industry_chambers_associations_state_national: Joi.string().allow(null, "")
        }).allow(null),
        two_provide_details_of_corrective_action_taken_or_underway_on_any_issues: Joi.array().items({
            name_of_authority: Joi.string().allow(null, ""),
            brief_of_the_case: Joi.string().allow(null, ""),
            corrective_action_taken: Joi.string().allow(null, "")
        }).allow(null)
    }),
    leadership_indicators: Joi.object({
        details_of_public_policy_positions_advocated_by_the_entity: Joi.array().items({
            public_policy_advocated: Joi.string().allow(null),
            method_resorted_for_such_advocacy: Joi.string().allow(null),
            whether_information_available_in_public: Joi.boolean().allow(null),
            frequency_of_review_by_board: Joi.string().allow(null),
            web_link: Joi.string().allow(null)
        }).allow(null)
    })
})

const promote_inclusive_growth = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        sia: Joi.array().items({
            name_and_breif_details_of_project: Joi.string().allow(null),
            sia_notification_no: Joi.string().allow(null),
            date_of_notofication: Joi.string().allow(null),
            whether_conducted_by_independent_external_agency: Joi.boolean().allow(null),
            results_communicated_in_public_domain: Joi.boolean().allow(null),
            weh_url: Joi.string().allow(null)

        }).allow(null),
        r_and_r: Joi.array().items({
            name_of_project_for_which_r_and_r_is_going: Joi.string().allow(null),
            state: Joi.string().allow(null),
            district: Joi.string().allow(null),
            no_of_project_affected: Joi.number().positive().min(0).allow(null),
            percentage_of_pafs: Joi.number().positive().min(0).allow(null),
            amounts_paid_to_pafs_in_inr: Joi.number().positive().min(0).allow(null)
        }).allow(null),
        describe_the_mechanisms_to_receive_and_redress_grievances_of_the_community: Joi.string().allow(null),
        percentage_of_input_material: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                directly_sourced_from_msmes: Joi.number().integer().min(0).allow(null),
                sourced_directly_from_within_the_district_and_neighbouring_districts: Joi.number().integer().min(0).allow(null)
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                directly_sourced_from_msmes: Joi.number().integer().min(0).allow(null),
                sourced_directly_from_within_the_district_and_neighbouring_districts: Joi.number().integer().min(0).allow(null)
            })
        })

    }),
    leadership_indicators: Joi.object({
        provide_details_of_actions_taken_to_mitigate: Joi.array().items({
            details_of_negative_social_impact_identified: Joi.string().allow(null),
            corrective_action_taken: Joi.string().allow(null)
        }).allow(null),
        provide_the_following_information_on_csr_projects: Joi.array().items({
            state: Joi.string().allow(null),
            aspirational_district: Joi.string().allow(null),
            amount_spent_in_inr: Joi.number().integer().min(0).allow(null)
        }).allow(null),
        three_a: Joi.boolean().allow(null),
        three_b: Joi.string().allow(null),
        three_c: Joi.string().allow(null),
        details_of_the_benefits_derived_and_shared_from_the_intellectual_properties: Joi.array().items({
            intellectual_property_based_on_traditional_knowledge: Joi.string().allow(null),
            owned_acquired: Joi.boolean().allow(null),
            benefit_shared: Joi.boolean().allow(null),
            basis_of_calculating_benefit_share: Joi.string().allow(null)
        }).allow(null),
        details_of_corrective_actions_taken_or_underway_based_on_any_adverse: Joi.array().items({
            name_of_authority: Joi.string().allow(null),
            brief_of_the_case: Joi.string().allow(null),
            corrective_action_taken: Joi.string().allow(null)
        }).allow(null),
        details_of_beneficiaries_of_csr_projects: Joi.array().items({
            csr_project: Joi.string().allow(null),
            no_of_persons_benefitted_from_csr_project: Joi.number().positive().min(0).allow(null),
            percentage_of_beneficiaries_from_vulnerable_and_marginalized_groups: Joi.string().allow(null)
        }).allow(null)
    })
})


const businesses_should_engage = Joi.object({
    financial_start_date: Joi.date().required(),
    financial_end_date: Joi.date().greater(Joi.ref('financial_start_date')).required(),
    company_id: Joi.string().required(),
    essential_indicators: Joi.object({
        describe_the_mechanisms_in_place_to_receive_and_respond_to_consumer_complaints_and_feedback: Joi.string().allow(null),
        turnover_of_products_and_services: Joi.object({
            percentage_to_total_turnover: Joi.object({
                environmental_and_social_parameters_relevant_to_the_product: Joi.number().positive().min(0).allow(null),
                safe_and_responsible_usage: Joi.number().positive().min(0).allow(null),
                recycling_and_or_safe_disposa: Joi.number().positive().min(0).allow(null)
            })
        }),
        number_of_consumer_complaints_in_respect: Joi.object({
            current_financial_year: Joi.object({
                year: Joi.string().allow(null),
                data_privacy: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                advertising: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                cyber_security: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                delivery_of_essential_services: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                restrictive_trade_practices: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                unfair_trade_practices: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                other: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            }),
            previous_financial_year: Joi.object({
                year: Joi.string().allow(null),
                data_privacy: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                advertising: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                cyber_security: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                delivery_of_essential_services: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                restrictive_trade_practices: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                unfair_trade_practices: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                }),
                other: Joi.object({
                    received_during_the_year: Joi.number().positive().min(0).allow(null),
                    pending_resolution_at_end_of_year: Joi.number().positive().min(0).allow(null),
                    remarks: Joi.string().allow(null)
                })
            })
        }),
        details_of_instances_of_product_recalls_on_account_of_safety_issues: Joi.object({
            voluntary_recalls: Joi.object({
                number: Joi.number().min(0).allow(null),
                reason_for_recall: Joi.string().allow(null)
            }),
            forced_recalls: Joi.object({
                number: Joi.number().min(0).allow(null),
                reason_for_recall: Joi.string().allow(null)
            })
        }),
        does_the_entity_have_a_framework_policy_boolean: Joi.boolean().allow(null),
        does_the_entity_have_a_framework_policy: Joi.string().allow(null),
        provide_details_of_any_corrective_actions_taken_or_underway_on_issues_relating: Joi.string().allow(null)
    }),
    leadership_indicators: Joi.object({
        channels_or_platforms_where_information: Joi.string().allow(null),
        steps_taken_to_inform_and_educate_consumers_about_safe_and_responsible: Joi.string().allow(null),
        mechanisms_in_place_to_inform_consumers_of_any_risk_of_disruption_or_discontinuation_of_essential_services: Joi.string().allow(null),
        does_the_entity_display_product_information_on_the_product_over: Joi.string().allow(null),
        does_the_entity_display_product_information_on_the_product_over_brief: Joi.string().allow(null),
        does_the_entity_display_product_information_on_the_product_over_survey: Joi.boolean().allow(null),
        five_a_number_of_instances_of_data_breaches_along_with_impact: Joi.number().integer().min(0).allow(null),
        five_b_percentage_of_data_breaches_involving_personally_identifiable_information_of_customer: Joi.number().integer().min(0).allow(null)
    })

})


const set_password = Joi.object({
    password: Joi.string().min(8).required().strict()

})

// PLAN VALIDATION


const add_plan = Joi.object({
    plan_name: Joi.string().required(),
    price: Joi.number().positive().min(1).required(),
    display_price: Joi.string().required()
})


const block_unblock_reseller = Joi.object({
    reseller_id: Joi.string().required(),
    is_deactive: Joi.boolean().required()
})


const register_retailer = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'ai'] } }),
    password: Joi.string().min(8).required().strict(),
    retailer_name: Joi.string().required(),
    contact_person: Joi.string().required(),
    contact_number: Joi.string().required(),
})

const change_password = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in', 'ai'] } }),
    new_password: Joi.string().min(8).required().strict(),
})

const add_module = Joi.object({
    framework_id: Joi.string().required(),
    id: Joi.string().required(),
    title: Joi.string().required(),
    type: Joi.string().required(),
    display_seq_number: Joi.number().min(1).allow(null),
    icon: Joi.string().required(),
    link: Joi.string().required(),
    parent: Joi.string().allow(null).allow(""),
    subtitle: Joi.string().allow(null).allow(""),
    module_id: Joi.string()

})


module.exports = {
    '/register': user_schema,
    '/set_password': set_password,
    '/login': user_login_schema,
    '/add_company': add_company,
    '/management_and_process': section_b,
    '/principal_one': principal_wise_performance_disclosure,
    '/principal_two': goal_and_service,
    '/principal_three': respect_and_promote,
    '/principal_four': respect_the_interests,
    '/principal_five': respect_and_promote_human_rights,
    '/principal_six': respect_and_make_efforts,
    '/principal_seven': engaging_in_influencing_public,
    '/principal_eight': promote_inclusive_growth,
    '/principal_nine': businesses_should_engage,
    '/plan': add_plan,
    '/register_retailer': register_retailer,
    '/block_unblock_reseller': block_unblock_reseller,
    '/change_password': change_password,
    '/add_module': add_module

};