package com.wgbing.thinker.dao;


import com.wgbing.thinker.domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * TODO: 用户角色数据操作层
 * @author wgbing
 * @date 2018/7/12 下午11:20
 */
public interface RoleDao extends JpaRepository<Role, Long> {

}
