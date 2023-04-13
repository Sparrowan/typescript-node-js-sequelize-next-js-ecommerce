'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.tables = exports.exclude_table_column = exports.columns = void 0;
/**
 * All columns that have data that can be translated
 */
exports.columns = [
    "name",
    "description",
    "currency_name",
    "gender",
    "custom",
    "co_pay",
    "type",
    "consultation_type",
    "content",
    "title",
    'require_pre_auth',
    'family_shared',
    'limit_type',
    'notification',
    'question',
    'answer',
    'limit_to_gender',
    'require_limit',
    'to_day',
    'from_day',
    'exclusion',
    'particular',
    'details'
];
exports.exclude_table_column = {
    action: {
        name: true
    },
    scheme: {
        name: true
    },
    blog: {
        type: true
    },
    entity: {
        name: true
    }
};
/**
 * An array of all tables to exclude for translation
 */
exports.tables = [
    'administrative_area',
    'client_package',
    'client_package_renewal',
    'entity_contact',
    'entity_type',
    'entity_type_permission',
    'eproc_settings',
    'group_member',
    'mails',
    'package_feature',
    'permission',
    'product_type',
    'scheme_benefit_category',
    'scheme_member',
    'scheme_member_country',
    'scheme_membership_renewal',
    'scheme_principal',
    'scheme_principal_dependent',
    'scheme_sp',
    'sms',
    'sp_service',
    'system_feature',
    'system_package',
    'underwriter_product_type',
    'user_activation',
    'user_group',
    'user_preference',
    'user_role',
    'notification_status',
    'access_log'
];
