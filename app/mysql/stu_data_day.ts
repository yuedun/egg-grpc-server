import { Application } from 'egg';

export default (app) => {
	const { DATE, BIGINT, STRING, INTEGER, DOUBLE } = app.Sequelize;
	const MyModel = app.mysql.define('bi_teastu_tea_detail_data', {
		id: { type: BIGINT(11).UNSIGNED, allowNull: false, primaryKey: true },
		tea_id: INTEGER,
		tea_name: INTEGER,
		tea_mobile: STRING,
		tea_entry_time: DATE,
		tea_belong: STRING,
		tea_origin: INTEGER,
		tea_time_type: INTEGER,
		tea_time_type_1: INTEGER,
		tea_full_time_type: INTEGER,
		tea_degree: INTEGER,
		tea_school: INTEGER,
		tea_prefer_grade: STRING,
		tea_prefer_subject: INTEGER,
		tea_onjob_days: STRING,
		tea_studying_stu_num: INTEGER,
		tea_all_stu_num: INTEGER,
		tea_progress_rate: DOUBLE,
		tea_3mons_stu_num: INTEGER,
		tea_stu_id: DOUBLE,
		tea_stu_name: INTEGER,
		tea_stu_is_paied: INTEGER,
		tea_stu_grade: INTEGER,
		tea_stu_subject: INTEGER,
		tea_stu_les_type: INTEGER,
		tea_stu_les_hour: INTEGER,
		tea_stu_les_time: DATE,
		tea_stu_les_state: INTEGER,
		tea_stu_transformed: INTEGER,
		tea_stu_period: INTEGER,
		tea_stu_relation: INTEGER,
		tea_stu_start_type: INTEGER,
		tea_stu_end_type: STRING,
		tea_stu_creat_time: STRING,
		update_time: STRING,
	}, {
			timestamps: false
		});
	return MyModel;
}